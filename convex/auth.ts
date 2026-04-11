import { createClient, type GenericCtx } from "@convex-dev/better-auth";
import { convex } from "@convex-dev/better-auth/plugins";
import { components } from "./_generated/api";
import { DataModel } from "./_generated/dataModel";
import { betterAuth } from "better-auth";
import authConfig from "./auth.config";

// The component client has methods needed for integrating Convex with Better Auth,
// as well as helper methods for general use.
export const authComponent = createClient<DataModel>(components.betterAuth);

export const createAuth = (ctx: GenericCtx<DataModel>) => {
  return betterAuth({
    baseURL: "https://hardy-hamster-460.eu-west-1.convex.site",
    database: authComponent.adapter(ctx),
    secret: process.env.BETTER_AUTH_SECRET || "fallback-secret-key-for-development-only-change-in-production",
    trustedOrigins: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://hardy-hamster-460.eu-west-1.convex.site"
    ],
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
    },
    plugins: [convex({ authConfig })],
    advanced: {
      disableCSRFCheck: true,
    }
  });
};




