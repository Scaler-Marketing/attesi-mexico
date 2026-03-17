// ─── Hero Slides ─────────────────────────────────────────────────────────────
export const heroSlidesQuery = `*[_type == "heroSlide"] | order(order asc) {
  _id,
  title,
  subtitle,
  image,
  order
}`;

// ─── Experiences ─────────────────────────────────────────────────────────────
export const experiencesQuery = `*[_type == "experience"] | order(order asc) {
  _id,
  title,
  description,
  image,
  ctaLabel,
  ctaUrl,
  order
}`;

// ─── Stats ────────────────────────────────────────────────────────────────────
export const statsQuery = `*[_type == "stat"] | order(order asc) {
  _id,
  value,
  suffix,
  label,
  order
}`;

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc) {
  _id,
  text,
  author,
  location,
  order
}`;

// ─── Site Settings (singleton) ────────────────────────────────────────────────
export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  siteTitle,
  tagline,
  heroHeading,
  heroSubheading,
  introHeading,
  introBody,
  aboutHeading,
  aboutBody,
  aboutImage,
  ctaHeading,
  ctaSubheading,
  ctaButtonLabel,
  ctaButtonUrl
}`;

// ─── Find Your Way Cards ──────────────────────────────────────────────────────
export const findYourWayQuery = `*[_type == "findYourWayCard"] | order(order asc) {
  _id,
  title,
  description,
  image,
  ctaLabel,
  ctaUrl,
  order
}`;

// ─── Why Choose Items ─────────────────────────────────────────────────────────
export const whyChooseQuery = `*[_type == "whyChooseItem"] | order(order asc) {
  _id,
  title,
  description,
  order
}`;
