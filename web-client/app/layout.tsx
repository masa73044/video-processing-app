import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import Navbar from "./navbar/navbar";
import Navbar from "./navbarNew/navbar";
import Features from "./features/features";
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/css/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Video Processing",
  description: "Video processing app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <section id="hero" className="d-flex align-items-center">
          <div className="container" data-aos-delay="100">
            <h1>
              Welcome to <span>MediaMonkey</span>
            </h1>
            <h2>Empowering Stories, One Video at a Time</h2>
            <div className="d-flex">
              <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a>
              <a href="" className="glightbox btn-watch-video">
                <i className="bi bi-play-circle"></i>
                <span>Tutorial</span>
              </a>
            </div>
          </div>
        </section>
        {children}
        <Features />
      </body>
    </html>
  );
}
