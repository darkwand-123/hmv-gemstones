import { useState } from "react";
import {
  ArrowRight,
  Menu,
  X,
  MessageCircle,
  Phone,
  MapPin,
  Gem,
} from "lucide-react";
import "./App.css";

const whatsappNumber = "919999999999";
const phoneNumber = "+919999999999";

const createWhatsAppLink = (message) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedGemstone, setSelectedGemstone] = useState("");

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const enquire = (gemstone = "") => {
    const message = gemstone
      ? `Hello, I am interested in ${gemstone}. Please share the available collection, prices and details.`
      : "Hello, I am interested in your gemstones. Please share your available collection, prices and details.";

    window.open(createWhatsAppLink(message), "_blank", "noopener,noreferrer");
  };

  const openEnquiry = (gemstone = "") => {
    setSelectedGemstone(gemstone);
  };

  const sendEnquiry = () => {
    const message = selectedGemstone
      ? `Hello, I am interested in ${selectedGemstone}. Please share the available collection, prices and details.`
      : "Hello, I am interested in your gemstones. Please share your available collection, prices and details.";

    window.open(createWhatsAppLink(message), "_blank", "noopener,noreferrer");
    setSelectedGemstone("");
  };

  return (
    <div className="site">

      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">HMV</span>
          <span className="brand-subtitle">GEMSTONES</span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#collection" onClick={closeMenu}>
            Collection
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <button
          className="nav-enquire"
          onClick={() => openEnquiry()}
        >
          Enquire
        </button>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>


      <main>

        <section id="home" className="hero">

          <div className="hero-image"></div>
          <div className="hero-overlay"></div>

          <div className="hero-content">

            <p className="eyebrow">
              HMV GEMSTONES
            </p>

            <h1>
              The allure
              <br />
              of <em>emeralds.</em>
            </h1>

            <p className="hero-description">
              We deal in the finest gemstones
              <br className="desktop-break" />
              at the finest prices.
            </p>

            <div className="hero-actions">

              <a
                href="#collection"
                className="button button-light"
              >
                Explore Collection
                <ArrowRight size={16} />
              </a>

              <button
                className="button button-outline"
                onClick={() => enquire()}
              >
                WhatsApp Us
              </button>

            </div>

          </div>

          <div className="hero-bottom">
            <span className="hero-line"></span>
            <span>PRECIOUS GEMSTONES</span>
          </div>

        </section>


        <section className="introduction">

          <p className="section-label">
            HMV GEMSTONES
          </p>

          <h2>
            A world of
            <br />
            <em>fine gemstones.</em>
          </h2>

          <p className="introduction-text">
            From exceptional emeralds to a distinguished
            selection of precious gemstones, discover stones
            chosen for their colour, character and beauty.
          </p>

        </section>


        <section id="collection" className="collection">

          <div className="section-heading">

            <div>
              <p className="section-label">
                OUR COLLECTION
              </p>

              <h2>
                Discover
                <br />
                <em>the finest.</em>
              </h2>
            </div>

            <p className="section-heading-text">
              Explore our selection of fine gemstones,
              with emeralds at the heart of our collection.
            </p>

          </div>


          <div className="collection-grid">

            <GemstoneCard
              image="/images/gemstone-1.jpg"
              title="Emeralds"
              number="01"
              onEnquire={() => openEnquiry("Emeralds")}
            />

            <GemstoneCard
              image="/images/gemstone-2.jpg"
              title="Precious Gemstones"
              number="02"
              onEnquire={() => openEnquiry("Precious Gemstones")}
            />

            <GemstoneCard
              image="/images/gemstone-3.jpg"
              title="Fine Collection"
              number="03"
              onEnquire={() => openEnquiry("Fine Gemstones")}
            />

          </div>

        </section>


        <section id="about" className="about">

          <div className="about-image">
            <img
              src="/images/gemstone-2.jpg"
              alt="HMV precious gemstone"
            />
          </div>

          <div className="about-content">

            <p className="section-label">
              ABOUT HMV
            </p>

            <h2>
              Fine gemstones.
              <br />
              <em>Exceptional value.</em>
            </h2>

            <p>
              At HMV, we deal in a diverse selection of precious
              gemstones, with a special focus on emeralds and
              stones of exceptional beauty and character.
            </p>

            <p>
              Our aim is simple — to offer fine gemstones at the
              finest prices while helping you find the stone that
              fits your requirement.
            </p>

            <button
              className="text-link"
              onClick={() => openEnquiry()}
            >
              Enquire about gemstones
              <ArrowRight size={16} />
            </button>

          </div>

        </section>


        <section className="trust">

          <div className="trust-inner">

            <p className="section-label">
              THE HMV APPROACH
            </p>

            <h2>
              Finest gemstones.
              <br />
              <em>Finest prices.</em>
            </h2>

            <p className="trust-text">
              A carefully selected range of gemstones, with a
              straightforward approach to every enquiry.
            </p>


            <div className="trust-grid">

              <div>
                <span>01</span>

                <Gem size={19} strokeWidth={1.4} />

                <h3>
                  Fine Selection
                </h3>

                <p>
                  Explore emeralds and a distinguished
                  selection of fine precious gemstones.
                </p>
              </div>


              <div>
                <span>02</span>

                <Gem size={19} strokeWidth={1.4} />

                <h3>
                  Finest Prices
                </h3>

                <p>
                  We deal in fine gemstones at competitive
                  prices for every requirement.
                </p>
              </div>


              <div>
                <span>03</span>

                <MessageCircle size={19} strokeWidth={1.4} />

                <h3>
                  Direct Enquiry
                </h3>

                <p>
                  Tell us what you are looking for and connect
                  directly with our team.
                </p>
              </div>

            </div>

          </div>

        </section>


        <section id="contact" className="contact">

          <div className="contact-content">

            <p className="section-label">
              GET IN TOUCH
            </p>

            <h2>
              Looking for
              <br />
              <em>the perfect stone?</em>
            </h2>

            <p>
              Tell us what gemstone you are looking for, and
              let us help you explore the available options.
            </p>


            <div className="contact-actions">

              <button onClick={() => enquire()}>
                <MessageCircle size={18} />
                WhatsApp Us
                <ArrowRight size={16} />
              </button>

              <a href={`tel:${phoneNumber}`}>
                <Phone size={18} />
                Call Us
                <ArrowRight size={16} />
              </a>

            </div>


            <div className="contact-location">
              <MapPin size={17} />
              <span>HMV Gemstones</span>
            </div>

          </div>


          <div className="contact-image">
            <img
              src="/images/gemstone-3.jpg"
              alt="HMV gemstone collection"
            />
          </div>

        </section>

      </main>


      <footer className="footer">

        <div className="footer-brand">
          <span className="brand-mark">HMV</span>
          <span className="brand-subtitle">GEMSTONES</span>
        </div>

        <p>
          Finest gemstones. Finest prices.
        </p>

        <div className="footer-links">

          <a href="#home">
            Home
          </a>

          <a href="#collection">
            Collection
          </a>

          <a href="#about">
            About
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} HMV Gemstones
          </span>

          <span>
            Precious Gemstones
          </span>

        </div>

      </footer>


      <button
        className="floating-whatsapp"
        onClick={() => enquire()}
        aria-label="Contact HMV Gemstones on WhatsApp"
      >
        <MessageCircle size={21} />
      </button>


      {selectedGemstone !== "" && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedGemstone("")}
        >
          <div
            className="enquiry-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setSelectedGemstone("")}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <p className="section-label">
              HMV GEMSTONES
            </p>

            <h3>
              Make an
              <br />
              <em>enquiry.</em>
            </h3>

            <p>
              {selectedGemstone
                ? `You are enquiring about ${selectedGemstone}.`
                : "Tell us what gemstone you are looking for."}
            </p>

            <button
              className="modal-whatsapp"
              onClick={sendEnquiry}
            >
              <MessageCircle size={18} />
              Continue on WhatsApp
              <ArrowRight size={16} />
            </button>

          </div>
        </div>
      )}

    </div>
  );
}


function GemstoneCard({
  image,
  title,
  number,
  onEnquire,
}) {
  return (
    <div className="gemstone-card">

      <div className="gemstone-image">

        <img
          src={image}
          alt={title}
        />

        <button
          className="card-enquire"
          onClick={onEnquire}
        >
          Enquire
          <ArrowRight size={15} />
        </button>

      </div>

      <div className="gemstone-info">

        <div>
          <span className="card-number">
            {number}
          </span>

          <h3>
            {title}
          </h3>
        </div>

        <ArrowRight size={17} />

      </div>

    </div>
  );
}


export default App;