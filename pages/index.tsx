import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../components/Layout";
import { useTranslation } from "react-i18next";
import { Section } from "../components/Section";

export async function getStaticProps({ locale }: GetServerSidePropsContext) {
  return ({
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  });
}
export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>Alexandre Cochet | Accueil</title>
      </Head>
      <Section>
        <h1 className="font-bold text-8xl animate-appear">{t("name")}</h1>
        <h3 className="text-2xl font-bold">{t("tagline")}</h3>
      </Section>
      <Section color="secondary">
        <h1>{t("websites")}</h1>
      </Section>
      <Section color="tertiary">
        <h1>{t("games")}</h1>
      </Section>
      <Section>
        <h1>{t("experiments")}</h1>
      </Section>
    </Layout>
  )
}
