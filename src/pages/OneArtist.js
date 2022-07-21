import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SongCard from "../components/SongCard";
function OneArtist() {
  const params = useParams();
  const [songs, setSongs] = useState([]);
  const [artist, setArtist] = useState({});
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/songs/?artist=${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setSongs(data);
      });
    fetch(`http://127.0.0.1:8000/api/artists/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setArtist(data);
      });
  }, []);
  return (
    <div>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={artist.imageUrl} class="img-fluid rounded-start" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{artist.name}</h5>
            </div>
          </div>
        </div>
      </div>
      {songs.map((song) => (
        <SongCard song={song} />
      ))}
    </div>
  );
}

export default OneArtist;
