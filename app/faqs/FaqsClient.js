"use client";
import { useState, useRef, useEffect } from "react";

const TABS = [
  { id: "general", label: "General", eyebrow: "General Questions" },
  { id: "lodging", label: "Lodging", eyebrow: "Lodging & Accommodations" },
  { id: "experiences", label: "Experiences", eyebrow: "Experiences & Activities" },
  { id: "facilities", label: "Facilities", eyebrow: "Facilities & Spaces" },
  { id: "kosher", label: "Kosher & Dining", eyebrow: "Kosher & Dining" },
];

const FAQ_DATA = {
  general: [
    {
      question: "Where is Attesi located?",
      answer:
        "Attesi is located in the highlands of the State of Mexico, about 1.5 hours from Mexico City. Nestled among mountains, gardens, and open skies, it offers a peaceful retreat from urban life.",
    },
    {
      question: "What is Attesi?",
      answer:
        "Attesi is a nature retreat and intentional community rooted in permaculture, Jewish life, and sustainable living. It is home to a community of families, a retreat space for guests, a kosher restaurant, and a market café.",
    },
    {
      question: "Is Attesi open to non-Jewish guests?",
      answer:
        "Absolutely. Attesi welcomes guests of all backgrounds. While Jewish tradition is woven into the rhythm of the community, the retreat is open to anyone seeking connection with nature, wellness, and meaningful experiences.",
    },
    {
      question: "What is the best time of year to visit?",
      answer:
        "Attesi is beautiful year-round. The dry season (November through April) offers clear skies and mild temperatures. The rainy season (May through October) brings lush greenery and the famous Monarch butterfly migration in late October and November.",
    },
    {
      question: "How do I get to Attesi?",
      answer:
        "Attesi is approximately 1.5 hours from Mexico City by car. We recommend renting a car or arranging private transport. Detailed directions and transportation recommendations are provided upon booking.",
    },
    {
      question: "Is Attesi child-friendly?",
      answer:
        "Yes, families are warmly welcomed. The open land, gardens, farm animals, and natural spaces make Attesi a wonderful environment for children. Many of our experiences are suitable for all ages.",
    },
    {
      question: "Can I visit Attesi for a day trip?",
      answer:
        "Day visits may be arranged for specific experiences or events. Please contact us to inquire about day trip availability and options.",
    },
    {
      question: "What languages are spoken at Attesi?",
      answer:
        "Our team speaks Spanish, English, and Hebrew. We are happy to accommodate guests in any of these languages.",
    },
  ],
  lodging: [
    {
      question: "What lodging options are available?",
      answer:
        "Attesi offers three lodging options: Glamping (comfortable tented accommodations in nature), Villas Norte (private villas with mountain views), and Villas Paz (secluded villas designed for rest and reflection).",
    },
    {
      question: "What is included in a lodging stay?",
      answer:
        "All lodging includes access to the Attesi grounds, common areas, and gardens. Meals, experiences, and additional services can be added to your stay. Please contact us for current packages and pricing.",
    },
    {
      question: "Is the lodging kosher?",
      answer:
        "Yes. All food served at Attesi — including in-room dining options — is strictly kosher under rabbinical supervision.",
    },
    {
      question: "What is the minimum stay?",
      answer:
        "We typically recommend a minimum of two nights to fully experience the rhythm of Attesi. Longer stays are encouraged for those seeking a deeper retreat experience.",
    },
    {
      question: "Is WiFi available in the lodging?",
      answer:
        "WiFi is available in common areas. Lodging accommodations are intentionally designed to encourage disconnection from devices and reconnection with nature.",
    },
    {
      question: "Can I bring my own food?",
      answer:
        "To maintain the kosher integrity of the property, outside food is not permitted in the lodging or dining areas. All meals are prepared on-site using our farm-to-table approach.",
    },
    {
      question: "Are pets allowed?",
      answer:
        "We love animals, but for the comfort of all guests and the integrity of our farm ecosystem, pets are not permitted at Attesi.",
    },
  ],
  experiences: [
    {
      question: "What experiences are available at Attesi?",
      answer:
        "We offer a wide range of experiences including guided mountain hikes, temazcal ceremonies, yoga and meditation, breathwork, farm tours, natural spring cold plunge, apiary visits, farm-to-table cooking, bonfires, and the Migrating Monarchs butterfly experience (seasonal).",
    },
    {
      question: "Do I need to book experiences in advance?",
      answer:
        "Yes, we recommend booking experiences in advance, especially during peak seasons. Some experiences have limited capacity to ensure quality and intimacy.",
    },
    {
      question: "Are experiences included in the lodging price?",
      answer:
        "Experiences are generally offered as add-ons to lodging. Some packages include selected experiences. Please contact us for current offerings and pricing.",
    },
    {
      question: "When is the best time to see the Monarch butterflies?",
      answer:
        "The Monarch butterfly migration typically peaks between late October and mid-November. This is one of the most spectacular natural events in the region and a highlight of the Attesi calendar.",
    },
    {
      question: "What is a temazcal ceremony?",
      answer:
        "A temazcal is a traditional Mesoamerican sweat lodge ceremony. At Attesi, it is led by an experienced guide and offers a deeply grounding and purifying experience for body, mind, and spirit.",
    },
    {
      question: "Are experiences suitable for all fitness levels?",
      answer:
        "Most experiences are accessible to guests of varying fitness levels. Guided hikes range from gentle walks to more challenging trails. Our team will help you choose experiences that match your preferences and abilities.",
    },
    {
      question: "Can groups book private experiences?",
      answer:
        "Yes. Private group experiences can be arranged for retreats, corporate events, family gatherings, and more. Contact us to discuss your group's needs.",
    },
  ],
  facilities: [
    {
      question: "What facilities are available at Attesi?",
      answer:
        "Attesi features a range of facilities including the Midrash (gathering and study space), Sabata (Shabbat hall), the kosher restaurant (Attesi Kitchen), the Market Café, central gardens, outdoor spaces, a retreat center, the farm, huertos (vegetable gardens), and a natural spring mikvah.",
    },
    {
      question: "What is the Midrash?",
      answer:
        "The Midrash is a multi-purpose gathering and study space at the heart of Attesi. It hosts learning sessions, community events, Shabbat gatherings, and retreat programming.",
    },
    {
      question: "Is the natural spring mikvah available to guests?",
      answer:
        "The natural spring mikvah is available to guests. Please contact us in advance to arrange access and scheduling.",
    },
    {
      question: "Can I use the facilities if I am not staying overnight?",
      answer:
        "Access to facilities is generally reserved for overnight guests and retreat participants. Day access may be arranged for specific events or experiences. Please contact us to inquire.",
    },
    {
      question: "Are the facilities accessible for guests with mobility needs?",
      answer:
        "We are committed to making Attesi as accessible as possible. Please contact us before your visit to discuss your specific needs and we will do our best to accommodate you.",
    },
    {
      question: "Can I host a private event or retreat at Attesi?",
      answer:
        "Yes. Attesi's facilities are available for private retreats, corporate events, weddings, and family gatherings. Our team will work with you to create a tailored experience. Contact us to begin planning.",
    },
  ],
  kosher: [
    {
      question: "Is all food at Attesi kosher?",
      answer:
        "Yes. All food served at Attesi — in the restaurant, café, and for in-room dining — is strictly kosher under rabbinical supervision. We take great pride in maintaining the highest kosher standards.",
    },
    {
      question: "What is Attesi Kitchen?",
      answer:
        "Attesi Kitchen is our kosher restaurant, offering farm-to-table meals made with ingredients grown on our land and sourced from trusted local producers. The menu reflects the seasons and our commitment to slow, intentional food.",
    },
    {
      question: "What is the Attesi Market Café?",
      answer:
        "The Attesi Market Café is a gathering place for the community and guests, offering kosher light meals, coffee, and market products. It is a warm and welcoming space to relax and connect.",
    },
    {
      question: "Is Shabbat observed at Attesi?",
      answer:
        "Yes. Shabbat is observed throughout Attesi. The community gathers for Kabbalat Shabbat, Shabbat meals, and Havdalah. Guests are warmly invited to participate in these traditions.",
    },
    {
      question: "Are there options for guests with dietary restrictions?",
      answer:
        "Our kitchen can accommodate a range of dietary needs within the framework of kosher law, including vegetarian and gluten-free options. Please inform us of any dietary requirements when booking.",
    },
    {
      question: "Can I bring outside food onto the property?",
      answer:
        "To maintain the kosher integrity of the property, outside food is not permitted in dining areas or lodging. All meals are prepared on-site with care and intention.",
    },
  ],
};

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(open ? bodyRef.current.scrollHeight : 0);
    }
  }, [open]);

  return (
    <div className={`exp-detail-faq${open ? " exp-detail-faq--open" : ""}`}>
      <button
        className="exp-detail-faq__question"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        type="button"
      >
        <div className="exp-detail-faq__question-left">
          <span className="exp-detail-faq__question-text">{question}</span>
        </div>
        <span className="exp-detail-faq__icon" aria-hidden="true">
          <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 5l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        className="exp-detail-faq__body"
        ref={bodyRef}
        style={{
          maxHeight: `${height}px`,
          overflow: "hidden",
          transition: "max-height 0.42s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <p className="exp-detail-faq__answer">{answer}</p>
      </div>
    </div>
  );
}

export default function FaqsClient() {
  const [activeTab, setActiveTab] = useState("general");
  const faqs = FAQ_DATA[activeTab] || [];
  const activeTabData = TABS.find((t) => t.id === activeTab);

  return (
    <section className="faqs-tabs section">
      <div className="container">
        {/* Tab Navigation */}
        <div className="faqs-tabs__nav" role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`faqs-tabs__tab${activeTab === tab.id ? " faqs-tabs__tab--active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="faqs-tabs__panel" role="tabpanel">
          {activeTabData && (
            <span className="faqs-tabs__eyebrow">{activeTabData.eyebrow}</span>
          )}
          <div className="exp-detail-faqs__list">
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* Still have questions */}
        <div className="faqs-tabs__footer">
          <p className="faqs-tabs__footer-text">
            Still have questions? We&apos;re happy to help.
          </p>
          <a href="/contact" className="btn-primary">Contact Us</a>
        </div>
      </div>
    </section>
  );
}
