import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    console.log("New Registration Received:", data);

    // --- TELEGRAM NOTIFICATION (Example) ---
    // const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    // const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
    // if (BOT_TOKEN && CHAT_ID) {
    //   const message = "<b>Новая регистрация NEScO 2026!</b>\n\n" +
    //     `Команда: ${data.team_name}\n` +
    //     `Участник 1: ${data.p1_name} (${data.p1_grade} класс)\n` +
    //     `Школа: ${data.p1_school}\n` +
    //     `Email: ${data.p1_email}\n` +
    //     `Телефон: ${data.p1_phone}`;
    //   
    //   await fetch(\`https://api.telegram.org/bot\${BOT_TOKEN}/sendMessage\`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ chat_id: CHAT_ID, text: message, parse_mode: "HTML" })
    //   });
    // }

    // --- EMAIL NOTIFICATION (Example using Nodemailer) ---
    // import nodemailer from "nodemailer";
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: 587,
    //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    // });
    // await transporter.sendMail({ ... });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Registration error:", err);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
