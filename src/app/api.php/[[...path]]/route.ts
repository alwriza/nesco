import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SITEHUB_API = "https://api.sitehub.io";

export async function GET(request: NextRequest, { params }: { params: Promise<{ path?: string[] }> }) {
  const resolvedParams = await params;
  return handleProxy(request, resolvedParams.path);
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ path?: string[] }> }) {
  const resolvedParams = await params;
  const path = resolvedParams.path ? `/${resolvedParams.path.join("/")}` : "";

  if (path === "/form_container/submit") {
    return handleFormSubmit(request);
  }

  return handleProxy(request, resolvedParams.path);
}

async function handleProxy(request: NextRequest, pathArray?: string[]) {
  const path = pathArray ? `/${pathArray.join("/")}` : "";
  const searchParams = request.nextUrl.searchParams.toString();
  const targetUrl = `${path.startsWith('/images') ? 'https://inter-cdn.com' : SITEHUB_API}${path}${searchParams ? `?${searchParams}` : ""}`;

  const headers = new Headers(request.headers);
  headers.delete("host");

  const fetchOptions: RequestInit = {
    method: request.method,
    headers,
  };

  if (request.method !== "GET" && request.method !== "HEAD") {
    const clonedReq = request.clone();
    fetchOptions.body = await clonedReq.blob();
  }

  try {
    const response = await fetch(targetUrl, fetchOptions);
    const text = await response.text();
    
    // Replace CDN hosts with /api.php as in original PHP
    const replacedText = text.replace(/https:\/\/cdn[1-7]\.site-media\.eu|https:\/\/inter-cdn\.com/g, "/api.php");

    return new NextResponse(replacedText, {
      status: response.status,
      headers: {
        "Content-Type": response.headers.get("Content-Type") || "text/plain",
      },
    });
  } catch (err) {
    console.error("Proxy error:", err);
    return NextResponse.json({ error: "Proxy failed" }, { status: 500 });
  }
}

async function handleFormSubmit(request: NextRequest) {
  try {
    const formData = await request.formData();
    const formId = formData.get("id");
    
    if (!formId) return NextResponse.json({ error: "Missing form ID" }, { status: 400 });

    // 1. Fetch form config from Sitehub
    const configRes = await fetch(`${SITEHUB_API}/website/elements/${formId}`);
    const formConfig = await configRes.json();
    
    // In a full implementation, you would:
    // 2. Validate Turnstile
    // 3. Extract attachments and form fields
    // 4. Call pushWebhook
    // 5. Send email using Nodemailer

    const successMessage = formConfig?.form?.successMessage || "Success";

    return new NextResponse(
      `<div class="wv-message wv-success">${successMessage}</div>`,
      { status: 200, headers: { "Content-Type": "text/html" } }
    );
  } catch (err) {
    console.error("Form submit error:", err);
    return NextResponse.json({ error: "Submission failed" }, { status: 400 });
  }
}
