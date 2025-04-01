import React, { useState } from "react";
import "./MangaReader.css";

function MangaReader({ manga, goBack }) {
  const [pageIndex, setPageIndex] = useState(0);

  const nextPage = () => setPageIndex((prev) => Math.min(prev + 1, manga.pages.length - 1));
  const prevPage = () => setPageIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="manga-reader">
      <h2>{manga.title}</h2>
      <img src={manga.pages[pageIndex]} alt={`Page ${pageIndex + 1}`} className="manga-page" />
      <div>
        <button onClick={prevPage} disabled={pageIndex === 0}>Previous</button>
        <button onClick={nextPage} disabled={pageIndex === manga.pages.length - 1}>Next</button>
      </div>
      <button onClick={goBack}>Back to list</button>
    </div>
  );
}

export default MangaReader;
