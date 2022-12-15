export const getCatalog = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Catalog`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  const content = await response.json();
  return content;
};
export const getCatalogById = async (id: string) => {
  console.log("data");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/Catalog/${id}`,
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
  return content;
};
