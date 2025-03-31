import type { NextConfig } from "next";
import type { Redirect } from "next/dist/lib/load-custom-routes";

const redirects = async (): Promise<Redirect[]> => {
  return [
    {
      source: "/:path*",
      has: [
        {
          type: "host",
          value: "comic-tsukuba.com",
        },
      ],
      destination: "https://www.comic-tsukuba.com/:path*",
      permanent: true,
    },
  ];
};

const nextConfig: NextConfig = {
  redirects,
};

export default nextConfig;
