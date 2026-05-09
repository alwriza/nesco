import PageRu from "@/components/PageRu";
import PageEn from "@/components/PageEn";
import PageKk from "@/components/PageKk";

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  if (resolvedParams.locale === "en") return <PageEn />;
  if (resolvedParams.locale === "kk") return <PageKk />;
  return <PageRu />;
}
