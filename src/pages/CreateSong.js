import React, { useState } from "react";

function CreateSong({ artists, addFn }) {
  const [form, setForm] = useState({
    title: "",
    imageUrl: "",
    lyrics: "",
    artist: null,
  });
  const handleForm = (e) => {
    setForm((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <div className="container">
      <h1>יצירת שיר</h1>
      <div>
        <input
          type="text"
          class="form-control"
          name="title"
          placeholder="שם השיר"
          onChange={handleForm}
        />
      </div>
      <div>
        <input
          type="text"
          class="form-control"
          name="imageUrl"
          placeholder="כתובת תמונה"
          onChange={handleForm}
        />
      </div>
      <div>
        <textarea
          class="form-control"
          name="lyrics"
          placeholder="מילות השיר"
          onChange={handleForm}
        />
      </div>
      <div>
        <select className="form-control" name="artist" onChange={handleForm}>
          <option>בחר אומן</option>
          {artists.map((artist) => (
            <option value={artist.id} key={artist.id}>
              {artist.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => {
            addFn(form);
          }}
        >
          הוסף שיר
        </button>
      </div>
    </div>
  );
}

export default CreateSong;
