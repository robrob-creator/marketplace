import React, { useEffect, useState } from "react";
import Head from "next/head";
import DefaultLayout from "../components/layouts/default";
import HomePage from "../components/templates/homePage";
import { getCatalog } from "../services/catalog";
import { Catalog } from "../types";

export default function Homes() {
  const [catalog, setCatalog] = useState<Catalog[]>([]);
  const fetchCatalog = async () => {
    let res = await getCatalog();
    setCatalog(res);
  };

  useEffect(() => {
    fetchCatalog();
  });
  return (
    <div>
      <Head>Marketplace</Head>
      <DefaultLayout>
        <HomePage catalog={catalog} />
      </DefaultLayout>
    </div>
  );
}
