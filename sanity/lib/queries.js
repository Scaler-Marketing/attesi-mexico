// ─── Hero Slides ─────────────────────────────────────────────────────────────
export const heroSlidesQuery = `*[_type == "heroSlide" && isActive != false && defined(image.asset)] | order(sortOrder asc) {
  _id,
  title,
  altText,
  image,
  sortOrder
}`;

// ─── Experiences (listing + homepage cards) ──────────────────────────────────
export const experiencesQuery = `*[_type == "experience"] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  tagline,
  category,
  cardImage,
  cardDescription,
  order
}`;

// ─── Single Experience (detail page) ─────────────────────────────────────────
export const experienceBySlugQuery = `*[_type == "experience" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  tagline,
  category,
  cardImage,
  cardDescription,
  heroImage,
  about,
  highlights,
  gallery,
  faqs,
  seoTitle,
  seoDescription,
  order
}`;

// ─── All Experience Slugs (for generateStaticParams) ─────────────────────────
export const experienceSlugsQuery = `*[_type == "experience" && defined(slug.current)] { "slug": slug.current }`;

// ─── Facilities (listing + detail pages) ─────────────────────────────────────
export const facilitiesQuery = `*[_type == "facility"] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  category,
  cardImage,
  cardDescription,
  order
}`;

export const facilityBySlugQuery = `*[_type == "facility" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  category,
  cardImage,
  cardDescription,
  heroImage,
  about,
  highlights,
  gallery,
  faqs,
  seoTitle,
  seoDescription,
  order
}`;

export const facilitySlugsQuery = `*[_type == "facility" && defined(slug.current)] { "slug": slug.current }`;

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
  heroButtonPrimaryLabel,
  heroButtonPrimaryUrl,
  introEyebrow,
  introHeading,
  introBody,
  introButtonLabel,
  introButtonUrl,
  experiencesHeading,
  experiencesSubheading,
  findYourWayHeading,
  findYourWaySubheading,
  testimonialsHeading,
  testimonialsSubheading,
  faqEyebrow,
  faqHeading,
  faqSubheading,
  faqs[] { question, answer },
  ctaHeading,
  ctaSubheading,
  ctaButtonLabel,
  ctaButtonUrl,
  ctaSecondButtonLabel,
  ctaSecondButtonUrl,
  ctaImage
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

// ─── Team Members ─────────────────────────────────────────────────────────────
export const teamMembersQuery = `*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  "slug": slug.current,
  role,
  bio,
  photo,
  order
}`;

export const teamSlugsQuery = `*[_type == "teamMember" && defined(slug.current)]{ "slug": slug.current }`;

export const teamBySlugQuery = `*[_type == "teamMember" && slug.current == $slug][0] {
  _id,
  name,
  "slug": slug.current,
  role,
  bio,
  photo,
  order
}`;

// ─── Lodging ──────────────────────────────────────────────────────────────────
export const lodgingsQuery = `*[_type == "lodging"] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  tagline,
  cardImage,
  cardDescription,
  guestCapacity,
  totalUnits,
  bedTypes,
  order
}`;

export const lodgingBySlugQuery = `*[_type == "lodging" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  tagline,
  cardImage,
  cardDescription,
  heroImage,
  description,
  guestCapacity,
  totalUnits,
  bedTypes,
  amenities,
  gallery,
  faqs,
  seoTitle,
  seoDescription,
  openGraphImage,
  order
}`;

export const lodgingSlugsQuery = `*[_type == "lodging" && defined(slug.current)] { "slug": slug.current }`;

// ─── Home Page (singleton) ────────────────────────────────────────────────────
export const homePageQuery = `*[_type == "homePage"][0] {
  introEyebrow,
  introHeading,
  introBody,
  introButtonLabel,
  introButtonUrl,
  faqEyebrow,
  faqHeading,
  faqSubheading,
  faqs[] {
    question,
    answer
  }
}`;

// ─── Global Impact Page (singleton) ──────────────────────────────────────────
export const globalImpactPageQuery = `*[_type == "globalImpactPage"][0] {
  heroEyebrow,
  heroHeading,
  heroSubheading,
  heroImage,
  philosophyEyebrow,
  philosophyHeading,
  philosophyBody,
  practicesEyebrow,
  practicesHeading,
  practicesBody,
  practiceCards[] {
    icon,
    title,
    body
  },
  practicesTagline,
  impactStats[] {
    value,
    label
  },
  visionEyebrow,
  visionHeading,
  visionBody
}`;

// ─── Retreats Page (singleton) ────────────────────────────────────────────────
export const retreatsPageQuery = `*[_type == "retreatsPage"][0] {
  heroEyebrow,
  heroHeading,
  heroSubheading,
  heroImage,
  introEyebrow,
  introHeading,
  introBody,
  typesHeading,
  retreatTypes[] {
    title,
    description,
    image
  },
  itineraryEyebrow,
  itineraryHeading,
  itinerarySubheading,
  itineraryDays[] {
    day,
    title,
    activities
  }
}`;

// ─── Contact Page (singleton) ─────────────────────────────────────────────────
export const contactPageQuery = `*[_type == "contactPage"][0] {
  heroEyebrow,
  heroHeading,
  heroSubheading,
  heroImage,
  formHeading,
  formSubheading,
  mapEyebrow,
  mapHeading,
  mapAddress,
  mapDirectionsUrl,
  mapEmbedUrl
}`;

// ─── Blog Posts ───────────────────────────────────────────────────────────────
export const blogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  category,
  coverImage,
  excerpt,
  author,
  authorRole,
  featured
}`;

export const featuredBlogPostsQuery = `*[_type == "blogPost" && featured == true] | order(publishedAt desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  category,
  coverImage,
  excerpt,
  author,
  authorRole,
  featured
}`;

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  category,
  coverImage,
  excerpt,
  body,
  author,
  authorRole,
  seoTitle,
  seoDescription,
  openGraphImage,
  featured
}`;

export const blogPostSlugsQuery = `*[_type == "blogPost" && defined(slug.current)] { "slug": slug.current }`;

export const relatedBlogPostsQuery = `*[_type == "blogPost" && slug.current != $slug && category == $category] | order(publishedAt desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  category,
  coverImage,
  excerpt
}`;

// ─── Static page hero queries ─────────────────────────────────────────────────
export const aboutPageQuery = `*[_type == "aboutPage"][0] {
  heroEyebrow,
  heroHeading,
  heroSubheading,
  heroImage
}`;

export const historyPageQuery = `*[_type == "historyPage"][0] {
  heroEyebrow,
  heroHeading,
  heroSubheading,
  heroImage
}`;

export const philosophyPageQuery = `*[_type == "philosophyPage"][0] {
  heroEyebrow,
  heroHeading,
  heroSubheading,
  heroImage
}`;

export const faqsPageQuery = `*[_type == "faqsPage"][0] {
  heroEyebrow,
  heroHeading,
  heroSubheading,
  heroImage
}`;

export const blogListingPageQuery = `*[_type == "blogListingPage"][0] {
  heroEyebrow,
  heroHeading,
  heroSubheading,
  heroImage
}`;

export const experiencesListingPageQuery = `*[_type == "experiencesListingPage"][0] {
  heroEyebrow,
  heroHeading,
  heroSubheading,
  heroImage
}`;

export const facilitiesListingPageQuery = `*[_type == "facilitiesListingPage"][0] {
  heroEyebrow,
  heroHeading,
  heroSubheading,
  heroImage
}`;

export const lodgingListingPageQuery = `*[_type == "lodgingListingPage"][0] {
  heroEyebrow,
  heroHeading,
  heroSubheading,
  heroImage
}`;

export const teamPageQuery = `*[_type == "teamPage"][0] {
  heroEyebrow,
  heroHeading,
  heroSubheading,
  heroImage
}`;
