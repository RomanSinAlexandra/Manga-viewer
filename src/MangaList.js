import React from "react";
import "./MangaList.css";

function MangaList({ mangas, selectManga }) {
  return (
    <div className="manga-list">
      <h2>Доступна манга</h2>
      <div className="manga-grid">
        {mangas.map((manga) => (
          <div key={manga.id} className="manga-item" onClick={() => selectManga(manga)}>
            <img src={manga.preview} alt={manga.title} className="manga-preview" />
            <p className="manga-title">{manga.title}</p> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default MangaList;
