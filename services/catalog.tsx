import { Catalog } from "../types";

export const getCatalog = async () => {
  console.log("data");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/Catalog`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  const content = await response.json();
  console.log(content);
  return content;
};
