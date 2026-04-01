import "../../team.css";
import "../../experiences/experiences-detail.css";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";
import ClientAnimations from "../../components/ClientAnimations";
import { sanityFetch } from "../../../sanity/lib/live";
import { teamBySlugQuery, teamSlugsQuery, teamMembersQuery, teamPageQuery, siteSettingsQuery } from "../../../sanity/lib/queries";
import { urlFor } from "../../../sanity/lib/image";

/* ─── Static params for ISR ──────────────────────────────────────────────── */
export async function generateStaticParams() {
  try {
    const { data: slugs } = await sanityFetch({ query: teamSlugsQuery });
    return (slugs || []).map((s) => ({ slug: s.slug }));
  } catch {
    return [
      "david-nathan",
      "hela-zadaka",
      "mike-abadi",
      "moy-schwartzman",
      "gabriel-mondlak",
      "michelle-abadi",
      "marion-arouesty",
      "marcos-penhos",
    ].map((slug) => ({ slug }));
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const { data: member } = await sanityFetch({ query: teamBySlugQuery, params: { slug } });
    if (!member) return { title: "Team Member — Attesi Mexico" };
    return {
      title: `${member.name} — Attesi Mexico`,
      description: member.bio
        ? member.bio.slice(0, 155)
        : `Meet ${member.name}, a member of the Attesi Mexico team.`,
    };
  } catch {
    return { title: "Team Member — Attesi Mexico" };
  }
}

export default async function TeamMemberPage({ params }) {
  const { slug } = await params;
  let member = null;
  let teamPage = null;
  let allMembers = [];
  let siteSettings = null;

  try {
    const [
      { data: memberData },
      { data: teamPageData },
      { data: membersData },
      { data: settingsData },
    ] = await Promise.all([
      sanityFetch({ query: teamBySlugQuery, params: { slug } }),
      sanityFetch({ query: teamPageQuery }),
      sanityFetch({ query: teamMembersQuery }),
      sanityFetch({ query: siteSettingsQuery }),
    ]);
    member = memberData;
    teamPage = teamPageData;
    allMembers = membersData || [];
    siteSettings = settingsData;
  } catch (e) {
    // Sanity unavailable
  }
  if (!member) notFound();

  // ── Next / Prev logic (sorted by order field) ──────────────────────────────
  const sortedMembers = [...allMembers].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
  const currentIndex = sortedMembers.findIndex((m) => m.slug === slug);
  const prevMember = currentIndex > 0 ? sortedMembers[currentIndex - 1] : null;
  const nextMember = currentIndex < sortedMembers.length - 1 ? sortedMembers[currentIndex + 1] : null;

  const photoUrl = member.photo
    ? urlFor(member.photo).width(800).height(960).fit("crop").url()
    : null;

  // Use teamPage heroImage so all team member pages share the same header image
  const heroImageUrl = teamPage?.heroImage
    ? urlFor(teamPage.heroImage).width(1600).height(700).fit("crop").url()
    : null;

  // Split bio into paragraphs
  const bioParagraphs = member.bio
    ? member.bio.split(/\n\n+/).filter(Boolean)
    : [];

  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="team-member-hero">
          {heroImageUrl ? (
            <div className="team-member-hero__bg team-member-hero__bg--photo">
              <img src={heroImageUrl} alt="" aria-hidden="true" />
            </div>
          ) : (
            <div className="team-member-hero__bg" />
          )}
          <div className="team-member-hero__overlay" />
          <div className="team-member-hero__content container">
            <Link href="/team" className="exp-detail-hero__back">
              ← Back to Team
            </Link>
            <span className="exp-detail-hero__category">{member.role || "Team Member"}</span>
            <h1 className="team-member-hero__title">{member.name}</h1>
          </div>
        </section>

        {/* ── Profile Section ───────────────────────────────────────────── */}
        <section className="team-member-profile section">
          <div className="container team-member-profile__inner">
            {/* Photo */}
            <aside className="team-member-profile__photo-col">
              <div className="team-member-profile__photo-wrap">
                {photoUrl ? (
                  <Image
                    src={photoUrl}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="team-member-profile__photo"
                  />
                ) : (
                  <div className="team-member-profile__placeholder">
                    <span className="team-member-profile__initials">{initials}</span>
                  </div>
                )}
              </div>
            </aside>

            {/* Bio */}
            <div className="team-member-profile__bio-col">
              <span className="section-tag">About</span>
              <h2 className="team-member-profile__heading">
                Meet {member.name.split(" ")[0]}
              </h2>
              {bioParagraphs.length > 0 ? (
                bioParagraphs.map((para, i) => (
                  <p key={i} className="team-member-profile__para">
                    {para}
                  </p>
                ))
              ) : (
                <p className="team-member-profile__para">
                  {member.name} is a valued member of the Attesi Mexico team, dedicated to creating meaningful experiences for every guest.
                </p>
              )}


              <Link href="/team" className="btn-outline" style={{marginTop:'1.5rem'}}>
                ← Back to Team
              </Link>
            </div>
          </div>
        </section>

        <CTA settings={siteSettings} />
      </main>
      <Footer />
      <ClientAnimations />
    </>
  );
}
