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
