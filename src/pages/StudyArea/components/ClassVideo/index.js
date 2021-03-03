import React from "react";
import getYouTubeID from "get-youtube-id";
import { YouTubePlayer, Container } from "./style";

export default function ClassVideo({ link }) {
  const videoID = getYouTubeID(link);
  const videoLink = `https://www.youtube.com/embed/${videoID}`;

  return (
    <Container>
      <YouTubePlayer
        src={videoLink}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </Container>
  );
}
