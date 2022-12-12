import React from "react";
import Head from "next/head";
import DefaultLayout from "../app/components/layouts/default";
import HomePage from "../app/components/templates/homePage";

export default function Homes() {
  return (
    <div>
      <Head>Marketplace</Head>
      <DefaultLayout>
        <HomePage />
      </DefaultLayout>
    </div>
  );
}
