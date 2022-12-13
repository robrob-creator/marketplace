import React from "react";
import Head from "next/head";
import DefaultLayout from "../components/layouts/default";
import HomePage from "../components/templates/homePage";
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
