import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [{ hostname: "img.clerk.com" }],
  },
};

export default withSentryConfig(
  withSentryConfig(nextConfig, {
    org: "amit-biswas-zw",
    project: "javascript-nextjs",

    silent: !process.env.CI,

    widenClientFileUpload: true,

    tunnelRoute: "/monitoring",

    disableLogger: true,

    automaticVercelMonitors: true,
  }),
  {
    org: "amit-biswas-zw",
    project: "javascript-nextjs",

    silent: !process.env.CI,
    widenClientFileUpload: true,
    tunnelRoute: "/monitoring",
    disableLogger: true,
    automaticVercelMonitors: true,
  }
);
