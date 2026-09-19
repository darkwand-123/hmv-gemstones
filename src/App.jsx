import { useState } from "react";

import {
  ArrowRight,
  Menu,
  X,
  MessageCircle,
  Phone,
  MapPin,
  Gem,
  Globe2,
  Award,
  ShieldCheck,
  Truck,
  Handshake,
  Factory,
  Check,
} from "lucide-react";

import {
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

import "./App.css";

const whatsappNumber = "919999999999";
const phoneNumber = "+919999999999";

const createWhatsAppLink = (message) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const bulkInquiryMessage =
  "Hello HMV Gems, I would like to enquire about bulk emerald supply, pricing, and long-term business partnership.";

function App() {
  return (
    <div className="site">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/craftsmanship" element={<Craftsmanship />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">HMV</span>
          <span className="brand-subtitle">GEMS</span>
        </Link>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/collection"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            Collection
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/craftsmanship"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            Craftsmanship
          </NavLink>

          <NavLink
            to="/exhibitions"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            Exhibitions
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="eyebrow">
            SINCE 1990 • JAIPUR, INDIA
          </p>

          <h1>
            Wholesale Emerald Supplier
            <br />
            <span>from Jaipur</span>
            <br />
            <small>| Certified Emeralds Since 1990</small>
          </h1>

          <p className="hero-description">
            HMV Gems is a leading wholesale emerald supplier and
            exporter based in Jaipur, India. With over 30 years of
            expertise, we provide certified Colombian, Zambian,
            Russian, and Ethiopian emeralds to jewelers, retailers,
            and gemstone traders worldwide.
          </p>

          <div className="hero-actions">
            <Link to="/collection" className="primary-button">
              Explore Emerald Collection
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <AboutPreview />
      <BusinessSection />
      <CollectionPreview />
      <WhyChooseUs />
      <CertificationSection />
      <ExhibitionsPreview />
      <ExportSection />
      <FinalCTA />
    </>
  );
}

function AboutPreview() {
  return (
    <section className="about-preview section-light">
      <div className="section-container about-grid">
        <div className="section-label-column">
          <span className="section-number">01</span>
          <p className="eyebrow dark">
            ABOUT HMV GEMS
          </p>
        </div>

        <div className="about-main">
          <h2>
            Trusted Emerald Manufacturer
            <br />
            & Exporter from <em>Jaipur</em>
          </h2>

          <p>
            Founded in 1990 by Hari Mohan and Vishnu, HMV Gems is
            a trusted name in wholesale emerald trading and
            manufacturing. Based in Jaipur, India—the global hub
            for gemstones—we specialize in sourcing, cutting, and
            exporting high-quality emeralds to international
            markets.
          </p>

          <p>
            With Arya Gupta now part of the business, we continue
            to expand globally while maintaining our legacy of
            trust, quality, and long-term relationships with
            clients.
          </p>

          <Link to="/about" className="text-link">
            Discover our story
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function BusinessSection() {
  return (
    <section className="business-section">
      <div className="business-image">
        <img
          src="/images/hero.jpeg"
          alt="HMV Gems emerald collection"
        />
      </div>

      <div className="business-content">
        <p className="eyebrow dark">
          GLOBAL B2B SUPPLY
        </p>

        <h2>
          Wholesale Emerald Supplier
          <br />
          for Global <em>B2B Clients</em>
        </h2>

        <p className="business-description">
          We specialize in bulk supply of emeralds for jewelers,
          gemstone dealers, and retailers across international
          markets.
        </p>

        <p className="business-description">
          As a direct manufacturer and exporter, we offer:
        </p>

        <div className="business-points">
          <BusinessPoint
            icon={<Gem size={20} />}
            text="Competitive wholesale pricing"
          />

          <BusinessPoint
            icon={<ShieldCheck size={20} />}
            text="Consistent quality in bulk orders"
          />

          <BusinessPoint
            icon={<Truck size={20} />}
            text="Reliable international shipping"
          />

          <BusinessPoint
            icon={<Handshake size={20} />}
            text="Long-term business partnerships"
          />
        </div>

        <Link
          to="/contact"
          className="primary-button dark-button"
        >
          Discuss Your Requirements
          <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}

function BusinessPoint({ icon, text }) {
  return (
    <div className="business-point">
      <span>{icon}</span>
      <p>{text}</p>
    </div>
  );
}

function CollectionPreview() {
  const gemstones = [
    {
      image: "/images/gemstone-1.jpg",
      number: "01",
      title: "Colombian Emeralds",
      description:
        "Premium Colombian emeralds known for their vivid green color, high transparency, and global demand in luxury jewelry.",
    },
    {
      image: "/images/gemstone-2.jpg",
      number: "02",
      title: "Zambian Emeralds",
      description:
        "Zambian emeralds with deep green tones, excellent clarity, and durability—ideal for modern jewelry manufacturing.",
    },
    {
      image: "/images/gemstone-3.jpg",
      number: "03",
      title: "Russian Emeralds",
      description:
        "Rare Russian emeralds with unique color tones, offering exclusivity for high-end gemstone collections.",
    },
    {
      image: "/images/gemstone-1.jpg",
      number: "04",
      title: "Ethiopian Emeralds",
      description:
        "Ethiopian emeralds with vibrant hues and increasing demand in global gemstone markets.",
    },
    {
      image: "/images/gemstone-2.jpg",
      number: "05",
      title: "Rubylite",
      description:
        "Vibrant rubylite gemstones with rich pink to reddish tones, offering a distinctive look for contemporary jewelry and gemstone collections.",
    },
    {
      image: "/images/gemstone-3.jpg",
      number: "06",
      title: "Tourmaline",
      description:
        "Exceptional tourmalines in a spectrum of captivating colors, valued for their natural beauty, individuality, and versatility in fine jewelry.",
    },
  ];

  return (
    <section className="collection-section section-stone">
      <div className="section-container">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow dark">
              THE COLLECTION
            </p>

            <h2>
              Our Emerald Collection
              <br />
              <em>by Origin</em>
            </h2>

            <p className="section-intro">
              We offer a wide range of natural emeralds sourced
              from the world’s most renowned mines.
            </p>
          </div>

          <Link to="/collection" className="text-link">
            View complete collection
            <ArrowRight size={16} />
          </Link>
        </div>

        <div
          className="collection-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3, minmax(0, 1fr))",
            gap: "28px",
            alignItems: "start",
            width: "calc(100% - 100px)",
            maxWidth: "1450px",
            margin: "0 auto",
          }}
        >
          {gemstones.map((gemstone) => (
            <GemstoneCard
              key={gemstone.number}
              {...gemstone}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function GemstoneCard({
  image,
  number,
  title,
  description,
}) {
  return (
    <article
      className="gemstone-card"
      style={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        className="gemstone-image"
        style={{
          width: "100%",
          height: "280px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#eeeae1",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>

      <div className="gemstone-card-content">
        <div className="card-number">{number}</div>

        <h3>{title}</h3>

        <p>{description}</p>

        <Link to="/contact" className="card-link">
          Enquire
          <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
}

function WhyChooseUs() {
  const points = [
    "30+ years of experience in emerald trading",
    "Trusted wholesale emerald exporter from Jaipur",
    "Certified gemstones from top laboratories",
    "Wide variety of emeralds in bulk quantities",
    "Strong global client network",
    "Custom sourcing as per business requirements",
  ];

  return (
    <section className="why-section section-light">
      <div className="section-container why-grid">
        <div className="why-heading">
          <p className="eyebrow dark">
            WHY HMV GEMS
          </p>

          <h2>
            Why Choose HMV Gems
            <br />
            as Your <em>Emerald Supplier</em>
          </h2>

          <p>
            Our business is built around experience, consistency,
            trusted sourcing and long-term relationships with
            clients across international markets.
          </p>
        </div>

        <div className="why-points">
          {points.map((point, index) => (
            <div className="why-point" key={point}>
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <Check size={17} />

              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificationSection() {
  const laboratories = [
    "GIA (Gemological Institute of America)",
    "IGI (International Gemological Institute)",
    "Gübelin Gem Lab",
    "SSEF (Swiss Gemmological Institute)",
    "GRS (GemResearch Swisslab)",
    "CD Lab and other reputed labs",
  ];

  return (
    <section className="certification-section">
      <div className="section-container certification-grid">
        <div className="certification-content">
          <div className="certification-icon">
            <Award size={30} />
          </div>

          <p className="eyebrow">
            AUTHENTICITY & QUALITY
          </p>

          <h2>
            Certified Emeralds from
            <br />
            International <em>Laboratories</em>
          </h2>

          <p>
            We provide certified emeralds from globally recognized
            gemological laboratories, ensuring authenticity and
            quality for every stone.
          </p>
        </div>

        <div className="laboratory-list">
          <p className="lab-heading">
            CERTIFICATIONS AVAILABLE
          </p>

          {laboratories.map((lab, index) => (
            <div className="laboratory-item" key={lab}>
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <p>{lab}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExhibitionsPreview() {
  const exhibitions = [
    "JJS (Jaipur Jewellery Show)",
    "JAS (Jewellery & Gem ASIA Show)",
    "IIJS Signature",
    "IIJS Premiere",
    "BOJ Hyderabad",
    "Hong Kong Jewellery & Gem Fair (September & March)",
    "Bangkok Gems & Jewelry Fair (September & March)",
  ];

  return (
    <section className="exhibitions-section section-stone">
      <div className="section-container">
        <div className="section-heading-row exhibitions-heading">
          <div>
            <p className="eyebrow dark">
              GLOBAL PRESENCE
            </p>

            <h2>
              International Gemstone
              <br />
              Exhibitions We <em>Participate In</em>
            </h2>

            <p className="section-intro">
              HMV Gems actively participates in leading
              international gemstone and jewelry exhibitions,
              connecting with global buyers and industry
              professionals.
            </p>
          </div>

          <Globe2 size={70} strokeWidth={1} />
        </div>

        <div className="exhibition-grid">
          {exhibitions.map((exhibition, index) => (
            <div
              className="exhibition-card"
              key={exhibition}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{exhibition}</h3>
            </div>
          ))}
        </div>

        <div className="exhibition-link-wrap">
          <Link to="/exhibitions" className="text-link">
            Explore exhibitions
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ExportSection() {
  return (
    <section className="export-section">
      <div className="export-overlay" />

      <div className="section-container export-content">
        <p className="eyebrow">
          GLOBAL EXPORT
        </p>

        <h2>
          Global Export
          <br />
          of <em>Emeralds</em>
        </h2>

        <p>
          We export emeralds to clients across multiple countries,
          ensuring secure packaging, timely delivery, and smooth
          international transactions.
        </p>

        <p>
          Our experience in global trade allows us to maintain
          consistency and reliability for long-term B2B
          partnerships.
        </p>

        <div className="export-features">
          <div>
            <Truck size={21} />
            <span>Secure Packaging</span>
          </div>

          <div>
            <Globe2 size={21} />
            <span>Global Markets</span>
          </div>

          <div>
            <Handshake size={21} />
            <span>Long-Term Partnerships</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta-inner">
        <p className="eyebrow dark">
          HMV GEMS • JAIPUR • INDIA
        </p>

        <h2>
          Looking for a
          <br />
          Reliable <em>Emerald Supplier?</em>
        </h2>

        <p>
          Get in touch with us for bulk emerald inquiries,
          pricing, and long-term business partnerships.
        </p>

        <div className="final-actions">
          <Link
            to="/contact"
            className="outline-button dark-outline"
          >
            Contact HMV Gems
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Collection() {
  const gemstones = [
    {
      image: "/images/gemstone-1.jpg",
      number: "01",
      title: "Colombian Emeralds",
      description:
        "Premium Colombian emeralds known for their vivid green color, high transparency, and global demand in luxury jewelry.",
    },
    {
      image: "/images/gemstone-2.jpg",
      number: "02",
      title: "Zambian Emeralds",
      description:
        "Zambian emeralds with deep green tones, excellent clarity, and durability—ideal for modern jewelry manufacturing.",
    },
    {
      image: "/images/gemstone-3.jpg",
      number: "03",
      title: "Russian Emeralds",
      description:
        "Rare Russian emeralds with unique color tones, offering exclusivity for high-end gemstone collections.",
    },
    {
      image: "/images/gemstone-1.jpg",
      number: "04",
      title: "Ethiopian Emeralds",
      description:
        "Ethiopian emeralds with vibrant hues and increasing demand in global gemstone markets.",
    },
    {
      image: "/images/gemstone-2.jpg",
      number: "05",
      title: "Rubylite",
      description:
        "Vibrant rubylite gemstones with rich pink to reddish tones, offering a distinctive look for contemporary jewelry and gemstone collections.",
    },
    {
      image: "/images/gemstone-3.jpg",
      number: "06",
      title: "Tourmaline",
      description:
        "Exceptional tourmalines in a spectrum of captivating colors, valued for their natural beauty, individuality, and versatility in fine jewelry.",
    },
  ];

  return (
    <PageShell
      eyebrow="THE COLLECTION"
      title={
        <>
          Our Emerald Collection
          <br />
          <em>by Origin</em>
        </>
      }
      description="We offer a wide range of natural emeralds sourced from the world’s most renowned mines."
    >
      <section className="collection-page">
        <div
          className="collection-page-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3, minmax(0, 1fr))",
            gap: "28px",
            alignItems: "start",
            width: "calc(100% - 100px)",
            maxWidth: "1450px",
            margin: "0 auto",
          }}
        >
          {gemstones.map((gemstone) => (
            <GemstoneCard
              key={gemstone.number}
              {...gemstone}
            />
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function About() {
  return (
    <PageShell
      eyebrow="ABOUT HMV GEMS"
      title={
        <>
          Trusted Emerald
          <br />
          Manufacturer & <em>Exporter</em>
        </>
      }
      description="Founded in 1990 by Hari Mohan and Vishnu, HMV Gems is a trusted name in wholesale emerald trading and manufacturing."
    >
      <section className="about-page-content">
        <div className="about-page-main">
          <p className="eyebrow dark">
            ESTABLISHED IN 1990
          </p>

          <h2>
            From Jaipur to
            <br />
            <em>international markets.</em>
          </h2>

          <p>
            Founded in 1990 by Hari Mohan and Vishnu, HMV Gems is
            a trusted name in wholesale emerald trading and
            manufacturing. Based in Jaipur, India—the global hub
            for gemstones—we specialize in sourcing, cutting, and
            exporting high-quality emeralds to international
            markets.
          </p>

          <p>
            With Arya Gupta now part of the business, we continue
            to expand globally while maintaining our legacy of
            trust, quality, and long-term relationships with
            clients.
          </p>
        </div>

        <div className="about-stat">
          <span>30+</span>
          <p>Years of expertise</p>
          <small>
            Wholesale Emerald Trading & Manufacturing
          </small>
        </div>
      </section>

      <section className="about-b2b">
        <div>
          <p className="eyebrow dark">
            GLOBAL B2B
          </p>

          <h2>
            Wholesale Emerald Supplier
            <br />
            for Global <em>B2B Clients</em>
          </h2>
        </div>

        <div>
          <p>
            We specialize in bulk supply of emeralds for jewelers,
            gemstone dealers, and retailers across international
            markets.
          </p>

          <p>
            As a direct manufacturer and exporter, we offer:
          </p>

          <ul>
            <li>Competitive wholesale pricing</li>
            <li>Consistent quality in bulk orders</li>
            <li>Reliable international shipping</li>
            <li>Long-term business partnerships</li>
          </ul>
        </div>
      </section>
    </PageShell>
  );
}

function Craftsmanship() {
  return (
    <PageShell
      eyebrow="CRAFTSMANSHIP"
      title={
        <>
          From sourcing
          <br />
          to <em>finished stone.</em>
        </>
      }
      description="Our expertise covers sourcing, selection, cutting and preparation of gemstones for international B2B markets."
    >
      <section className="craft-page">
        <div className="craft-page-image">
          <img
            src="/images/hero.jpeg"
            alt="HMV Gems gemstone craftsmanship"
          />
        </div>

        <div className="craft-page-content">
          <p className="eyebrow dark">
            OUR APPROACH
          </p>

          <h2>
            Experience behind
            <br />
            every <em>stone.</em>
          </h2>

          <p>
            HMV Gems combines more than three decades of gemstone
            experience with a detailed understanding of sourcing,
            cutting, quality and international wholesale
            requirements.
          </p>

          <div className="craft-points">
            <CraftPoint
              number="01"
              title="Sourcing"
              text="We source natural gemstones through established relationships and international networks."
            />

            <CraftPoint
              number="02"
              title="Selection"
              text="Every stone is considered for its colour, clarity, character, origin and intended application."
            />

            <CraftPoint
              number="03"
              title="Cutting"
              text="Our manufacturing approach focuses on bringing out the natural character and beauty of each gemstone."
            />

            <CraftPoint
              number="04"
              title="Export"
              text="Selected stones are prepared for reliable international B2B supply and export."
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function CraftPoint({ number, title, text }) {
  return (
    <div className="craft-point">
      <span>{number}</span>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function Exhibitions() {
  const exhibitions = [
    "JJS (Jaipur Jewellery Show)",
    "JAS (Jewellery & Gem ASIA Show)",
    "IIJS Signature",
    "IIJS Premiere",
    "BOJ Hyderabad",
    "Hong Kong Jewellery & Gem Fair (September & March)",
    "Bangkok Gems & Jewelry Fair (September & March)",
  ];

  return (
    <PageShell
      eyebrow="EXHIBITIONS"
      title={
        <>
          International
          <br />
          <em>Gemstone Exhibitions</em>
        </>
      }
      description="HMV Gems actively participates in leading international gemstone and jewelry exhibitions, connecting with global buyers and industry professionals."
    >
      <section className="exhibitions-page">
        <div className="exhibitions-page-intro">
          <p>
            HMV Gems actively participates in leading
            international gemstone and jewelry exhibitions,
            connecting with global buyers and industry
            professionals.
          </p>
        </div>

        <div className="exhibitions-page-list">
          {exhibitions.map((exhibition, index) => (
            <div
              className="exhibitions-page-item"
              key={exhibition}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{exhibition}</h3>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function Gallery() {
  return (
    <PageShell
      eyebrow="GALLERY"
      title={
        <>
          A closer look at
          <br />
          <em>HMV Gems.</em>
        </>
      }
      description="Explore a selection of imagery representing our gemstones, origins and business."
    >
      <section
        className="gallery-page"
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(3, minmax(0, 1fr))",
          gap: "24px",
          alignItems: "start",
        }}
      >
        <div
          className="gallery-item"
          style={{
            width: "100%",
            height: "300px",
            overflow: "hidden",
          }}
        >
          <img
            src="/images/hero.jpeg"
            alt="HMV Gems"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        <div
          className="gallery-item"
          style={{
            width: "100%",
            height: "300px",
            overflow: "hidden",
          }}
        >
          <img
            src="/images/gemstone-1.jpg"
            alt="Colombian Emeralds"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        <div
          className="gallery-item"
          style={{
            width: "100%",
            height: "300px",
            overflow: "hidden",
          }}
        >
          <img
            src="/images/gemstone-2.jpg"
            alt="Zambian Emeralds"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        <div
          className="gallery-item"
          style={{
            width: "100%",
            height: "300px",
            overflow: "hidden",
          }}
        >
          <img
            src="/images/gemstone-3.jpg"
            alt="Fine Gemstones"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>
      </section>
    </PageShell>
  );
}

function Contact() {
  return (
    <PageShell
      eyebrow="CONTACT HMV GEMS"
      title={
        <>
          Looking for a
          <br />
          Reliable <em>Emerald Supplier?</em>
        </>
      }
      description="Get in touch with us for bulk emerald inquiries, pricing, and long-term business partnerships."
    >
      <section className="contact-page">
        <div className="contact-page-main">
          <p className="eyebrow dark">
            BULK & WHOLESALE ENQUIRIES
          </p>

          <h2>
            Let&apos;s discuss
            <br />
            your <em>requirements.</em>
          </h2>

          <p>
            Get in touch with us for bulk emerald inquiries,
            pricing, and long-term business partnerships.
          </p>

          <div className="contact-buttons">
            <a
              href={createWhatsAppLink(bulkInquiryMessage)}
              target="_blank"
              rel="noreferrer"
              className="primary-button dark-button"
            >
              Request Bulk Inquiry
              <MessageCircle size={18} />
            </a>

            <a
              href={`tel:${phoneNumber}`}
              className="outline-button dark-outline"
            >
              Call HMV Gems
              <Phone size={18} />
            </a>
          </div>
        </div>

        <div className="contact-information">
          <ContactInfo
            icon={<MapPin size={22} />}
            label="LOCATION"
            value="Jaipur, Rajasthan, India"
          />

          <ContactInfo
            icon={<Phone size={22} />}
            label="PHONE"
            value={phoneNumber}
            href={`tel:${phoneNumber}`}
          />

          <ContactInfo
            icon={<MessageCircle size={22} />}
            label="WHATSAPP"
            value="Start a conversation"
            href={createWhatsAppLink(bulkInquiryMessage)}
            external
          />

          <ContactInfo
            icon={<Factory size={22} />}
            label="BUSINESS"
            value="Wholesale Emerald Manufacturer & Exporter"
          />
        </div>
      </section>
    </PageShell>
  );
}

function ContactInfo({
  icon,
  label,
  value,
  href,
  external,
}) {
  return (
    <div className="contact-info">
      <span className="contact-info-icon">
        {icon}
      </span>

      <div>
        <span className="contact-label">{label}</span>

        {href ? (
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
          >
            {value}
          </a>
        ) : (
          <p>{value}</p>
        )}
      </div>
    </div>
  );
}

function PageShell({
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <div className="page">
      <section
        className="page-hero"
        style={{
          minHeight: "420px",
          height: "420px",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="page-hero-content">
          <p className="eyebrow">{eyebrow}</p>

          <h1>{title}</h1>

          <p className="page-description">
            {description}
          </p>
        </div>
      </section>

      <div className="page-content">
        {children}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            HMV
            <span>GEMS</span>
          </Link>

          <p>
            HMV Gems is a Jaipur-based wholesale emerald
            manufacturer and exporter, supplying certified
            Colombian, Zambian, Russian and Ethiopian emeralds to
            global B2B clients.
          </p>
        </div>

        <div className="footer-column">
          <span>NAVIGATE</span>

          <Link to="/collection">
            Collection
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/craftsmanship">
            Craftsmanship
          </Link>

          <Link to="/exhibitions">
            Exhibitions
          </Link>

          <Link to="/gallery">
            Gallery
          </Link>

          <Link to="/contact">
            Contact
          </Link>
        </div>

        <div className="footer-column">
          <span>BUSINESS</span>

          <p>Wholesale Emerald Supplier</p>

          <p>Manufacturer & Exporter</p>

          <p>Jaipur, Rajasthan, India</p>

          <a href={`tel:${phoneNumber}`}>
            {phoneNumber}
          </a>

          <a
            href={createWhatsAppLink(
              bulkInquiryMessage
            )}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} HMV Gems
        </span>

        <span>
          Fine Emeralds Since 1990
        </span>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={createWhatsAppLink(
        bulkInquiryMessage
      )}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp"
      aria-label="Contact HMV Gems on WhatsApp"
    >
      <MessageCircle size={23} />
    </a>
  );
}

export default App;