"use client";
import { useSearchParams } from "next/navigation";

export default function Watch() {
  const videoPrefix = "http://storage.googleapis.com/mk3-yt-processed-videos";
  const videoSrc = useSearchParams().get("v");
  return (
    <>
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="swiper-wrapper align-items-center">
                {<video controls src={videoPrefix + videoSrc} height={300} />}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-description">
                <h2>Example video title</h2>
                <p>
                  Join us on an enchanting journey through the Pacific Northwest
                  as we uncover its lesser-known wonders. From serene waterfalls
                  tucked away in dense forests to charming coastal towns with
                  rich histories, this video will reveal a side of the Pacific
                  Northwest you've never seen. Whether you're a seasoned
                  traveler or just dreaming of your next adventure, this visual
                  diary is sure to inspire wanderlust. Don't forget to subscribe
                  for more travel diaries and adventures around the world!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
