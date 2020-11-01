import type { Serverless } from "serverless/aws";

const serverlessConfiguration: Serverless = {
  org: "alexandrli",
  app: "product-service",
  service: {
    name: "product-service",
    // app and org for use with dashboard.serverless.com
    // app: your-app-name,
    // org: your-org-name,
  },

  frameworkVersion: "2",
  custom: {
    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
    },
  },
  // Add the serverless-webpack plugin
  plugins: ["serverless-webpack"],
  provider: {
    name: "aws",
    stage: "dev",
    runtime: "nodejs12.x",
    region: "eu-west-1",
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
    },
  },
  functions: {
    getAllProducts: {
      handler: "handler.getAllProducts",
      events: [
        {
          http: {
            method: "get",
            path: "products",
          },
        },
      ],
    },
    getProductById: {
      handler: "handler.getProductById",
      events: [
        {
          http: {
            method: "get",
            path: "products/{productId}",
            request: {
              parameters: {
                paths: {
                  productId: true,
                },
              },
            },
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
