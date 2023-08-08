"use client";
import { useSearchParams } from "next/navigation";

export default function Watch() {
  const videoPrefix = "http://storage.googleapis.com/mk3-yt-processed-videos";
  const videoSrc = useSearchParams().get("v");
  return (
    <div>
      <h1>watch page</h1>
      {<video controls src={videoPrefix + videoSrc} />}
    </div>
  );
}
