import React, { useState } from "react";
import { Card } from "project-isaac-components";
import { useRouter } from "next/router";
import { Catalog } from "../../types";
import CatalogCard from "../modules/cards/catalogCard";

type HomePageProps = {
  catalog: Catalog[];
};
export default function HomePage({ catalog }: HomePageProps) {
  const router = useRouter();
  const redirect = () => {
    router.push("/product");
  };

  return (
    <div>
      {" "}
      <div className="lg:grid lg:grid-cols-4  flex flex-wrap  ml-4 gap-4 lg:place-items-center justify-center mx-auto">
        {catalog &&
          catalog.map((item, index) => {
            return (
              <div key="" onClick={() => redirect()}>
                <CatalogCard catalog={item} />
              </div>
            );
          })}
      </div>
      <div
        className="grid justify-center mt-8 mb-14
      "
      >
        <div className="sm:inline-flex  block sm:space-x-20 items-center justify-center">
          <div className="flex items-center justify-center sm:w-56 w-full h-8 px-5 py-2 bg-blue-700 rounded-lg">
            <p className="text-xs font-semibold leading-snug text-center text-gray-50">
              Sign up to view more
            </p>
          </div>
          <p className="text-sm text-center leading-tight">
            Already a member? Sign In
          </p>
        </div>
      </div>
    </div>
  );
}
