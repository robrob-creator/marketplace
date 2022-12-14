import { useRouter } from "next/router";
import { Catalog } from "../../../types/index";
type Props = {
  catalogDetails: Catalog | undefined;
};

export const AppPreviewBreadCrumb = ({ catalogDetails }: Props) => {
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
