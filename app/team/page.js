import "../team.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import TeamGrid from "../components/TeamGrid";
import CTA from "../components/CTA";
import ClientAnimations from "../components/ClientAnimations";
import { sanityFetch } from "../../sanity/lib/live";
import { teamMembersQuery, teamPageQuery, siteSettingsQuery } from "../../sanity/lib/queries";
import { urlFor } from "../../sanity/lib/image";

export const metadata = {
  title: "Our Team — Attesi Mexico",
  description:
    "Meet the dedicated team behind Attesi Mexico — passionate guides, hosts, and stewards of the land.",
};

/* Fallback team data — replace via Sanity Studio once photos are ready */
const FALLBACK_TEAM = [
  { _id: "1", name: "David Nathan",      role: "Co-Founder",            bio: "" },
  { _id: "2", name: "Hela Zadaka",       role: "Operations Director",   bio: "" },
  { _id: "3", name: "Mike Abadi",        role: "Experience Lead",       bio: "" },
  { _id: "4", name: "Moy Schwartzman",   role: "Retreat Coordinator",   bio: "" },
  { _id: "5", name: "Gabriel Mondlak",   role: "Farm & Land Steward",   bio: "" },
  { _id: "6", name: "Michelle Abadi",    role: "Wellness Guide",        bio: "" },
  { _id: "7", name: "Marion Arouesty",   role: "Community Manager",     bio: "" },
  { _id: "8", name: "Marcos Penhos",     role: "Head of Hospitality",   bio: "" },
];

export default async function TeamPage() {
  const [
    { data: siteSettings },
    { data: page },
    { data: sanityMembersRaw },
  ] = await Promise.all([
    sanityFetch({ query: siteSettingsQuery }).catch(() => ({ data: null })),
    sanityFetch({ query: teamPageQuery }).catch(() => ({ data: null })),
    sanityFetch({ query: teamMembersQuery }).catch(() => ({ data: [] })),
  ]);

  const sanityMembers = sanityMembersRaw || [];
  const members =
    sanityMembers.length > 0
      ? sanityMembers.map((m) => ({
          ...m,
          photoUrl: m.photo
            ? urlFor(m.photo).width(600).height(700).fit("crop").url()
            : null,
        }))
      : FALLBACK_TEAM;

  const heroBg = page?.heroImage?.asset
    ? `url('${urlFor(page.heroImage).width(1800).quality(85).url()}')`
    : "url('/assets/hero-slide-2.avif')";

  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ── */}
        <PageHero
          eyebrow={page?.heroEyebrow || "The People Behind Attesi"}
          title={page?.heroHeading || "Meet Our Team"}
          subtitle={
            page?.heroSubheading ||
            "Passionate guides, stewards of the land, and dedicated hosts — each one committed to creating meaningful experiences rooted in nature and community."
          }
          bgImage={heroBg}
          bgPos="center 40%"
          centered
        />
        <TeamGrid members={members} />
        <CTA settings={siteSettings} />
      </main>
      <Footer />
      <ClientAnimations />
    </>
  );
}
