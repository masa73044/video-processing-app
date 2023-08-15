"use client";

import { useState, useEffect } from "react";

import "../assets/vendor/aos/aos.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../assets/css/style.css";

export default function Navbar() {
  // Cleanups subscription on unmount

  return (
    <>
      <section id="featured-services" className="featured-services">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos-delay="100">
                <div className="icon">
                  <i className="bx bxl-dribbble"></i>
                </div>
                <h4 className="title">
                  <a href="">Connected Everywhere</a>
                </h4>
                <p className="description">
                  Utilizing Google Cloud's 24 regions and 73 zones, we guarantee
                  seamless streaming globally.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos-delay="200">
                <div className="icon">
                  <i className="bx bx-file"></i>
                </div>
                <h4 className="title">
                  <a href="">Scalable Storage</a>
                </h4>
                <p className="description">
                  With Google Storage Buckets, we optimize storage costs and
                  performance, boasting 11 9's of durability for unmatched
                  content safety.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos-delay="300">
                <div className="icon">
                  <i className="bx bx-tachometer"></i>
                </div>
                <h4 className="title">
                  <a href="">Blazing Fast Performance</a>
                </h4>
                <p className="description">
                  Docker on Google Cloud ensures smooth, containerized
                  applications with Cloud Pub/Sub's million messages per second
                  for instant updates.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos-delay="400">
                <div className="icon">
                  <i className="bx bx-world"></i>
                </div>
                <h4 className="title">
                  <a href="">Global Reach</a>
                </h4>
                <p className="description">
                  Deliver content via Google Cloud's backbone, ensuring
                  consistent, low-latency streaming for audiences worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-title">
            <h2>Pricing</h2>
            <h3>
              Check our <span>Pricing</span>
            </h3>
            <p>Discover the perfect plan tailored for your needs.</p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6" data-aos-delay="100">
              <div className="box">
                <h3>Free</h3>
                <h4>
                  <sup>$</sup>0<span> / month</span>
                </h4>
                <ul>
                  <li>Access basic video streaming in SD</li>
                  <li>Upload up to 5 videos per month</li>
                  <li>Access to basic analytics dashboard</li>
                  <li className="na">Stream in HD or higher</li>
                  <li className="na">Access premium global CDN</li>
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 mt-4 mt-md-0"
              data-aos-delay="200"
            >
              <div className="box featured">
                <h3>Business</h3>
                <h4>
                  <sup>$</sup>19<span> / month</span>
                </h4>
                <ul>
                  <li>Stream in high-definition (HD)</li>
                  <li>Upload up to 50 videos per month</li>
                  <li>Access priority support</li>
                  <li>Monetize content</li>
                  <li className="na">Stream in ultra high-definition (4K)</li>
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 mt-4 mt-lg-0"
              data-aos-delay="300"
            >
              <div className="box">
                <h3>Developer</h3>
                <h4>
                  <sup>$</sup>29<span> / month</span>
                </h4>
                <ul>
                  <li>Access developer tools & API keys</li>
                  <li>Stream in ultra HD (4K)</li>
                  <li>Integrate to advanced third-party tools</li>
                  <li>Use SDKs and coding resources</li>
                  <li>Access premium global CDN</li>
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 mt-4 mt-lg-0"
              data-aos-delay="400"
            >
              <div className="box">
                <span className="advanced">Advanced</span>
                <h3>Ultimate</h3>
                <h4>
                  <sup>$</sup>49<span> / month</span>
                </h4>
                <ul>
                  <li>Direct access to Google Cloud premium</li>
                  <li>Ultimate-tier analytics</li>
                  <li>Comprehensive monetization tools</li>
                  <li>Stream with premium global CDN</li>
                  <li>Unlimited uploads and storage</li>
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">
        <div className="container py-4">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>MediaMonkey</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}
