import React, { useState } from "react";
import { Card, DownloadIcon } from "project-isaac-components";
import { Catalog } from "../../../types";

type Props = {
  catalog: Catalog | undefined;
};
export default function InformationCard({ catalog }: Props) {

  return (
    <div className=" sm:px-4 border-b-2 border-gray-200 w-screen py-10 px-4">
      <div className="relative w-screen">
        <p className=" text-2xl font-semibold leading-10 text-justify text-gray-900">
          Information
        </p>
        <div className="sm:inline-flex flex flex-wrap sm:space-x-32 items-start justify-between sm:mr-14  mr-8">
          <div className="inline-flex flex-col space-y-12 items-start justify-start">
            <div className="relative">
              <p className="sm:text-xl text-base leading-10 text-justify text-gray-600">
                Developer
              </p>
              <p className="sm:text-xl text-base font-medium leading-10 text-justify text-gray-900">
                {catalog?.developer}.
              </p>
            </div>
            <div className="relative">
              <p className="sm:text-xl text-base leading-10 text-justify text-gray-600">
                Compatibility
              </p>
              <p className="sm:text-xl text-base font-medium leading-10 text-justify text-gray-900">
                {catalog?.techStack}
              </p>
            </div>
            <div className="relative">
              <p className="sm:text-xl text-base leading-10 text-justify text-gray-600">
                Copyright
              </p>
              <p className="sm:text-xl text-base font-medium leading-10 text-justify text-gray-900">
                © {catalog?.developer}
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col space-y-12 items-start justify-start">
            <div className="relative">
              <p className="sm:text-xl text-base leading-10 text-justify text-gray-600">
                Size
              </p>
              <p className="sm:text-xl text-base font-medium leading-10 text-justify text-gray-900">
                {catalog?.size}
              </p>
            </div>
            <div className="relative">
              <p className="sm:text-xl text-base leading-10 text-justify text-gray-600">
                Language
              </p>
              <p className="sm:text-xl text-base font-medium leading-10 text-justify text-gray-900">
                {catalog?.language}
              </p>
            </div>
            <div className="relative">
              <p className="sm:text-xl text-base leading-10 text-justify text-gray-600">
                Category
              </p>
              <p className="sm:text-xl text-base font-medium leading-10 text-justify text-gray-900">
                Point of Sale
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col space-y-12 items-start justify-start">
            <div className="relative">
              <p className="sm:text-xl text-base leading-10 text-justify text-gray-600">
                Rating
              </p>
              <p className="sm:text-xl text-base font-medium leading-10 text-justify text-gray-900">
                {catalog?.rating}
              </p>
            </div>
            <div className="relative">
              <p className="sm:text-xl text-base leading-10 text-justify text-gray-600">
                Release date
              </p>
              <p className="sm:text-xl text-base font-medium leading-10 text-justify text-gray-900">
                January 01, 2022
              </p>
            </div>
            <div className="relative">
              <p className="sm:text-xl text-base leading-10 text-justify text-gray-600">
                Build Version
              </p>
              <p className="sm:text-xl text-base font-medium leading-10 text-justify text-gray-900">
                7.1.1
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col space-y-12 items-start justify-start">
            <div className="relative">
              <p className="sm:text-xl text-base leading-10 text-justify text-gray-600">
                Downloads
              </p>
              <p className="sm:text-xl text-base font-medium leading-10 text-justify text-gray-900">
                401
              </p>
            </div>
            <div className="relative">
              <p className="sm:text-xl text-base leading-10 text-justify text-gray-600">
                Technology Stacks
              </p>
              <p className="sm:text-xl text-base font-medium leading-10 text-justify text-gray-900">
                {catalog?.techStack}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> );
}
