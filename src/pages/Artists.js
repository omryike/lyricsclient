import React from "react";
import ArtistCard from "../components/ArtistCard";
function Artists({ artistList }) {
  return (
    <div className="container">
      {artistList.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </div>
  );
}

export default Artists;
