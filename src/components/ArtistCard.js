import React from "react";

import { Link } from "react-router-dom";
function ArtistCard({ artist }) {
  return (
    <div class="card">
      <img src={artist.imageUrl} class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{artist.name}</h5>
        <Link to={"artist/" + artist.id} class="btn btn-primary">
          לצפייה באומן
        </Link>
      </div>
    </div>
  );
}

export default ArtistCard;
