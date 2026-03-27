import { defineLocations } from "sanity/presentation";

/**
 * Maps Sanity document types to their corresponding frontend URLs.
 * This powers two things in the Presentation Tool:
 *  1. When you select a document, the iframe navigates to the right page.
 *  2. Documents show location badges linking to their frontend URLs.
 */
export const resolve = {
  locations: {
    // ── Singleton pages ──────────────────────────────────────────────
    siteSettings: defineLocations({
      select: { title: "siteTitle" },
      resolve: () => ({
        locations: [{ title: "Home", href: "/" }],
      }),
    }),
    homePage: defineLocations({
      select: { title: "introHeading" },
      resolve: () => ({
        locations: [{ title: "Home", href: "/" }],
      }),
    }),
    globalImpactPage: defineLocations({
      select: { title: "heroHeading" },
      resolve: () => ({
        locations: [{ title: "Global Impact", href: "/global-impact" }],
      }),
    }),
    retreatsPage: defineLocations({
      select: { title: "heroHeading" },
      resolve: () => ({
        locations: [{ title: "Retreats", href: "/retreats" }],
      }),
    }),
    contactPage: defineLocations({
      select: { title: "heroHeading" },
      resolve: () => ({
        locations: [{ title: "Contact", href: "/contact" }],
      }),
    }),
    // ── Repeatable content ───────────────────────────────────────────
    heroSlide: defineLocations({
      select: { title: "title" },
      resolve: () => ({
        locations: [{ title: "Home", href: "/" }],
      }),
    }),
    stat: defineLocations({
      select: { title: "label" },
      resolve: () => ({
        locations: [{ title: "Home", href: "/" }],
      }),
    }),
    testimonial: defineLocations({
      select: { title: "author" },
      resolve: () => ({
        locations: [{ title: "Home", href: "/" }],
      }),
    }),
    findYourWayCard: defineLocations({
      select: { title: "title" },
      resolve: () => ({
        locations: [{ title: "Home", href: "/" }],
      }),
    }),
    whyChooseItem: defineLocations({
      select: { title: "title" },
      resolve: () => ({
        locations: [{ title: "Home", href: "/" }],
      }),
    }),
    lodging: defineLocations({
      select: { title: "title", slug: "slug.current" },
      resolve: (doc) => ({
        locations: [
          { title: doc?.title || "Lodging", href: `/lodging/${doc?.slug}` },
          { title: "All Lodging", href: "/lodging" },
        ],
      }),
    }),
    experience: defineLocations({
      select: { title: "title", slug: "slug.current" },
      resolve: (doc) => ({
        locations: [
          { title: doc?.title || "Experience", href: `/experiences/${doc?.slug}` },
          { title: "All Experiences", href: "/experiences" },
        ],
      }),
    }),
    facility: defineLocations({
      select: { title: "title", slug: "slug.current" },
      resolve: (doc) => ({
        locations: [
          { title: doc?.title || "Facility", href: `/facilities/${doc?.slug}` },
          { title: "All Facilities", href: "/facilities" },
        ],
      }),
    }),
    teamMember: defineLocations({
      select: { title: "name", slug: "slug.current" },
      resolve: (doc) => ({
        locations: [
          { title: doc?.title || "Team Member", href: `/team/${doc?.slug}` },
          { title: "Team", href: "/team" },
        ],
      }),
    }),
  },
};
