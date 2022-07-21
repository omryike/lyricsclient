import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artists from "./pages/Artists";
import CreateSong from "./pages/CreateSong";
import OneArtist from "./pages/OneArtist";
import Song from "./pages/Song";
// const data = [
//   {
//     id: 1,
//     name: "מרסדס בנד",
//     imageUrl:
//       "https://th.bing.com/th/id/R.eb855eb7f1a63c66c2508bbe7ca67aec?rik=MkYrJvvkxxydyQ&pid=ImgRaw&r=0",
//   },
//   {
//     id: 2,
//     name: "אהוד בנאי",
//     imageUrl:
//       "https://th.bing.com/th/id/R.eb855eb7f1a63c66c2508bbe7ca67aec?rik=MkYrJvvkxxydyQ&pid=ImgRaw&r=0",
//   },
// ];
function App() {
  const fetchArtists = () => {
    fetch("http://127.0.0.1:8000/api/artists/")
      .then((res) => res.json())
      .then((data) => {
        setArtists(data);
      });
  };
  const addSong = (song) => {
    fetch("http://127.0.0.1:8000/api/songs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(song),
    }).then((res) => {});
  };
  useEffect(() => {
    fetchArtists();
  }, []);

  const [artists, setArtists] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Artists artistList={artists} />} />
        <Route path="artist/:id" element={<OneArtist />} />
        <Route path="song/:id" element={<Song />} />
        <Route
          path="songadd"
          element={<CreateSong artists={artists} addFn={addSong} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
