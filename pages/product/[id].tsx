/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import {
  ProductBanner,
  DescriptionCard,
  WhatsNewCard,
  SimilarCard,
  InfoBanner,
  MoreCard,
  List,
  Footer,
} from "project-isaac-components";
import {
  Ratings,
  Chart,
  Developer,
  Language,
  Size,
} from "../../components/elements/list";
import { useEffect, useState } from "react";
import { getCatalogById } from "../../services/catalog";
import { Catalog } from "../../types";
import { AppPreviewBreadCrumb } from "../../components/modules/breadCrumbs/appPreview";

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
      <AppPreviewBreadCrumb catalogDetails={catalog} />
      <ProductBanner
        title={catalog?.name}
        description={catalog?.summary}
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
              <a href={`${catalog?.demoURL}`} target="blank">
                <p className="text-xs font-semibold leading-snug text-center text-gray-50">
                  Demo
                </p>
              </a>
            </div>
          </div>
        }
      />
      <div className="pb-6 pt-6 bg-gray-300 overflow-x-auto">
        <List
          layout="horizontal"
          data={[
            {
              content: <Ratings />,
            },
            {
              content: <Chart />,
            },
            {
              content: <Developer />,
            },
            {
              content: <Language />,
            },
            {
              content: <Size />,
            },
          ]}
        />
      </div>
      <DescriptionCard />
      <WhatsNewCard />
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
