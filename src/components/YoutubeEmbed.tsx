import { ReactElement } from "react";

export default function YoutubeEmbed():ReactElement {
  return (
    <div className="w-100 h-52">
      <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
      />
    </div>
  )
}