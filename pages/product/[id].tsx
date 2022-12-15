import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import {
  ProductBanner,
  InfoBanner,
  DescriptionCard,
  WhatsNewCard,
  SimilarCard,
  MoreCard,
  Footer,
} from "project-isaac-components";
import { useEffect, useState } from "react";
import { getCatalogById } from "../../services/catalog";
import { Catalog } from "../../types";
type Props = {
  catalogDetails: Catalog | undefined;
};

export default function Installation({ catalogDetails }: Props) {
  const [catalog, setCatalog] = useState<Catalog>();

  useEffect(() => {
    setCatalog(catalogDetails);
  }, [catalogDetails]);
  return (
    <div>
      <BreadCrumb catalogDetails={catalog} />
      <ProductBanner
        title={catalog?.name}
        description="This is a product description. This is a product description"
        extra={
          <div className="flex flex-wrap  w-26">
            {" "}
            <div
              className="inline-flex items-center justify-center w-36 px-5 py-2 sm:top-120 top-72 absolute bg-blue-700 rounded-lg"
              style={{ left: 61 }}
            >
              <p className="text-xs font-semibold leading-snug text-center text-gray-50">
                ₱ {catalog?.price}
              </p>
            </div>
            <div
              className="inline-flex items-center justify-center w-36 px-5 py-2 sm:top-120 top-72 absolute bg-gray-900 border rounded-lg border-gray-300"
              style={{ left: 226 }}
            >
              <p className="text-xs font-semibold leading-snug text-center text-gray-50">
                Demo
              </p>
            </div>
          </div>
        }
      />
      <InfoBanner />
      <DescriptionCard
        description={catalog?.description}
        developer={catalog?.developer}
      />
      <WhatsNewCard latestUpdates={catalog?.latestUpdates} />
      {/*<InformationCard />*/}
      <SimilarCard />
      <MoreCard />
      <Footer />
    </div>
  );
}
const BreadCrumb = ({ catalogDetails }: Props) => {
  const router = useRouter();
  return (
    <div className="flex justify-between  py-4 w-full">
      <div className="px-4" onClick={() => router.back()}>
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          id="736d2dce-205b-4e1d-a8de-21d9524ba21c"
          data-name="Livello 1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>prime</title>
          <g id="6037caba-d996-4e01-a295-2e233316e41b" data-name="Arrow Left">
            <path d="M16.23,23.58l2.24-2a0.5,0.5,0,0,0,0-.71L10.57,12,18.5,3.13a0.5,0.5,0,0,0,0-.71l-2.24-2a0.5,0.5,0,0,0-.71,0L5.2,12,15.52,23.54A0.5,0.5,0,0,0,16.23,23.58Z" />
          </g>
        </svg>
      </div>
      <p className="text-base  justify-center font-semibold leading-snug text-center text-gray-700">
        {catalogDetails?.name}
      </p>
      <div className="px-4">
        <div className="inline-flex items-center justify-center  h-9 px-4 py-2 bg-blue-700 rounded-full">
          <p className="text-xs font-semibold leading-snug text-center text-gray-50">
            ₱ {catalogDetails?.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    let id = context.query.id;
    const res = await getCatalogById(`${id}`);
    const catalogDetails = res;

    return {
      props: {
        catalogDetails,
      },
    };
  } catch (err) {
    //catch error incase of fetching errors
    return {
      props: {},
    };
  }
};
