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
      <section id="team" className="team section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Videos</h2>
            <p></p>
          </div>
          <div className="row">
            {videos.map((video) => (
              <div
                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos-delay="100"
              >
                <div className="member">
                  <div className="member-img">
                    <Link href={`/watch?v=${video.filename}`}>
                      <Image
                        src={"/thumbnail.png"}
                        alt="video"
                        width={120}
                        height={80}
                        className={styles.thumbnail}
                      />
                    </Link>
                    <div className="social"></div>
                  </div>
                  <div className="member-info">
                    <h4>Video 1</h4>
                    <span>User1</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* {videos.map((video) => (
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
      <Link href={`/new-app`}></Link> */}
    </main>
  );
}
