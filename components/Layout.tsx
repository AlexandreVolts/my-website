import { ReactNode, Ref } from "react";
import Head from "next/head";
import { Header } from "./Header";

interface LayoutProps
{
  children: ReactNode;
  ref?: Ref<HTMLDivElement>;
}
export const Layout = (props: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen text-white bg-indigo-900">
      <Head>
        <meta name="description" content="Alexandre Cochet's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {props.children}
      </main>
    </div>
  );
};