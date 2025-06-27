import withPWAInit from "@ducanh2912/next-pwa";
import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const withPWA = withPWAInit({
  dest: "public",
});

const nextConfig: NextConfig = {};
export default withPWA(withFlowbiteReact(nextConfig));