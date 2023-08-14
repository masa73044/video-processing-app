import React from "react";

// Assuming you'll also need CSS imports (adjust paths as needed)
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/css/style.css";

export default function MediaMonkey() {
  return (
    <div>
      <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href="mailto:contact@example.com">contact@mediamonkey.com</a>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <span>+1 123 456 7899</span>
            </i>
          </div>
        </div>
      </section>{" "}
      {/* Remember to replace `class` with `className` for all elements */}
      {/* ======= Top Bar ======= */}
      <section id="topbar" className="d-flex align-items-center">
        {/* ... rest of your code ... */}
      </section>
      {/* ======= Header ======= */}
      <header id="header" className="d-flex align-items-center">
        {/* ... rest of your code ... */}
      </header>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex align-items-center">
        {/* ... rest of your code ... */}
      </section>
      {/* ======= Team Section ======= */}
      <section id="team" className="team section-bg">
        {/* ... rest of your code ... */}
      </section>
      {/* ... continue this for all other sections ... */}
    </div>
  );
}
