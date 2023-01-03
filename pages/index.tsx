import React, { useEffect, useState } from "react";
import Head from "next/head";
import DefaultLayout from "../components/layouts/default";
import HomePage from "../components/templates/homePage";
import { getCatalog } from "../services/catalog";
import { Catalog } from "../types";
import { GetServerSideProps } from "next";
type Props = {
  catalogList: Catalog[];
};
export default function Homes({ catalogList }: Props) {
  const [catalog, setCatalog] = useState<Catalog[]>([]);
  useEffect(() => {
    setCatalog(catalogList);
  }, [catalogList]);

  return (
    <div>
      <Head>Marketplace</Head>
      <DefaultLayout>
        <HomePage catalog={catalog} />
      </DefaultLayout>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await getCatalog();
  const catalogList = res;

  return {
    props: {
      catalogList,
    },
  };
};
