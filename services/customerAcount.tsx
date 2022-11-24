import { userModel } from "../models/userModel";

export const createUser = async (body: userModel) => {
  console.log("data", body);
  const rawResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ body }),
  });
  const content = await rawResponse.json();

  console.log(content);
};
