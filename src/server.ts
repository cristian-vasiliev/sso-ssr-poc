import { NextConfig } from "next";
import NextServer from "next/dist/server/next-server";
import serverless from "serverless-http";
// @ts-ignore
import { config } from "./.next/required-server-files.json";

const nextServer = new NextServer({
    hostname: "localhost",
    port: 3000,
    dir: __dirname,
    dev: false,
    conf: {
        ...(config as NextConfig),
    },
});

// Create a custom request handler
const customHandler = (req:any, res:any) => {
    // Prepend base path to request URL
    req.url = config.basePath + (req.url || '');
    return nextServer.getRequestHandler()(req, res);
};

export const handler = serverless(customHandler, {
    binary: ["*/*"],
});