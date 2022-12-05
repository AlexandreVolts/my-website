import Head from "next/head";
import { ReactNode } from "react";
import { Header } from "./Header";

export function Layout(props: { children: ReactNode }) {
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
}