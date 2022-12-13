import { useRef } from "react";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../components/Layout";
import { useTranslation } from "react-i18next";
import { Section } from "../components/Section";
import { useScrollState } from "../hooks/useScrollState";

export async function getStaticProps({ locale }: GetServerSidePropsContext) {
  return ({
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  });
}
export default function Home() {
  const { scroll, change } = useScrollState(4);
  const { t } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>Alexandre Cochet | Accueil</title>
      </Head> 
      <Section display={scroll === 0}>
        <h1 className="mt-32 font-bold text-center text-8xl animate-appear">{t("name")}</h1>
        <h3 className="text-2xl font-bold text-center animate-appear-250">{t("tagline")}</h3>
      </Section>
      <Section display={scroll === 1} color="secondary">
        <h3 className="text-2xl font-bold animate-appear-250">{t("websites")}</h3>
      </Section>
      <Section display={scroll === 2} color="tertiary">
        <h3 className="text-2xl font-bold animate-appear-250">{t("games")}</h3>
      </Section>
      <Section display={scroll === 3}>
        <h3 className="text-2xl font-bold animate-appear-250">{t("experiments")}</h3>
      </Section>
    </Layout>
  )
}
