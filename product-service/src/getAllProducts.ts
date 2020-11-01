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
    body: JSON.stringify(products),
  };
};
