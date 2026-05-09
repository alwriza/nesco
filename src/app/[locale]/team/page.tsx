import PageRuTeam from "@/components/PageRuTeam";
import PageEnTeam from "@/components/PageEnTeam";
import PageKkTeam from "@/components/PageKkTeam";

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === "en") return <PageEnTeam />;
  if (locale === "kk") return <PageKkTeam />;
  return <PageRuTeam />;
}
