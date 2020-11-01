import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";
import products from "./db/products.json";

export const getProductById: APIGatewayProxyHandler = async (
  event,
  _context
) => {
  console.log("Request received", event);
  const { productId } = event.pathParameters;
  console.log("Requested product with id", productId);
  const product = products.find((product) => product.id === productId);
  console.log("Founded product", productId);
  const statusCode = product ? 200 : 404;
  const body = product ?? { reason: "Product not found" };

  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(body),
  };
};
