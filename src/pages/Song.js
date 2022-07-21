import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Song() {
  const params = useParams();
  const navigate = useNavigate();
  const [song, setSong] = useState({});
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/songs/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setSong(data);
      });
  }, []);
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => navigate(`/artist/${params.id}`)}
      >
        back
      </button>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={song.imageUrl} class="img-fluid rounded-start" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{song.title}</h5>
              <p class="card-text">{song.lyrics}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Song;
