import PageRuRegister from "@/components/PageRu_register";
import PageEnRegister from "@/components/PageEn_register";
import PageKkRegister from "@/components/PageKk_register";

export default async function LocaleRegisterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === "en") return <PageEnRegister />;
  if (locale === "kk") return <PageKkRegister />;
  return <PageRuRegister />;
}
