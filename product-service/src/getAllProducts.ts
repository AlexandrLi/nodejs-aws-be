import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";
import products from "./db/products.json";

export const getAllProducts: APIGatewayProxyHandler = async (
  event,
  _context
) => {
  console.log("Request received", event);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(products),
  };
};
