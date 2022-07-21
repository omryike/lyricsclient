import React from "react";
import { Link } from "react-router-dom";
function SongCard({ song }) {
  return (
    <div class="card">
      <img src={song.imageUrl} class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{song.title}</h5>
        <Link to={"/song/" + song.id} class="btn btn-primary">
          לצפייה בשיר
        </Link>
      </div>
    </div>
  );
}

export default SongCard;
