import { defineLive } from "next-sanity";
import { client } from "./client";

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    // Use a recent API version
    apiVersion: "2024-01-01",
    // stega encodes source maps into strings so the Presentation Tool
    // can draw click-to-edit overlays. The studioUrl tells the overlay
    // where to send editors when they click.
    stega: {
      studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "/studio",
    },
  }),
  // Server token: lets sanityFetch read draft content when Draft Mode is active.
  serverToken: process.env.SANITY_API_READ_TOKEN,
  // Browser token: shared with the browser to enable real-time subscriptions.
  // Viewer-only — it's exposed to the client during Draft Mode.
  browserToken: process.env.SANITY_API_READ_TOKEN,
});
