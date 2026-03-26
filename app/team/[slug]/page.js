import "../../team.css";
import "../../experiences/experiences-detail.css";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";
import ClientAnimations from "../../components/ClientAnimations";
import { client } from "../../../sanity/lib/client";
import { teamBySlugQuery, teamSlugsQuery } from "../../../sanity/lib/queries";
import { urlFor } from "../../../sanity/lib/image";

/* ─── Static params for ISR ──────────────────────────────────────────────── */
export async function generateStaticParams() {
  try {
    const slugs = await client.fetch(teamSlugsQuery);
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
    const member = await client.fetch(teamBySlugQuery, { slug });
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
  try {
    member = await client.fetch(teamBySlugQuery, { slug });
  } catch (e) {
    // Sanity unavailable
  }
  if (!member) notFound();

  const photoUrl = member.photo
    ? urlFor(member.photo).width(800).height(960).fit("crop").url()
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
          <div className="team-member-hero__bg" />
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
              <div className="team-member-profile__meta">
                <p className="team-member-profile__name">{member.name}</p>
                {member.role && (
                  <p className="team-member-profile__role">{member.role}</p>
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
              <div className="team-member-profile__cta">
                <Link href="/team" className="btn-secondary">
                  ← All Team Members
                </Link>
                <Link href="/contact" className="btn-primary">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
      <ClientAnimations />
    </>
  );
}
