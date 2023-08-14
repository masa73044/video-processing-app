import styles from "./page.module.css";
import { getVideos } from "./firebase/functions";
import Link from "next/link";
import Image from "next/image";
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/css/style.css";

export default async function Home() {
  const videos = await getVideos();

  return (
    <main>
      <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
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
      {videos.map((video) => (
        <Link href={`/watch?v=${video.filename}`}>
          <Image
            src={"/thumbnail.png"}
            alt="video"
            width={120}
            height={80}
            className={styles.thumbnail}
          />
        </Link>
      ))}
      <Link href={`/new-app`}></Link>
    </main>
  );
}
