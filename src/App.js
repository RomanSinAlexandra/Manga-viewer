import React, { useState } from "react";
import MangaList from "./MangaList";
import MangaReader from "./MangaReader";
import "./App.css";

const mangaData = [
  { id: 1, title: "Chainsaw man", preview: "/images/preview/chainsawman.jpg", pages: ["/images/chainsawman1.jpg", "/images/chainsawman2.jpg"] },
  { id: 2, title: "Sousou no Frieren", preview: "/images/preview/friren.jpg", pages: ["/images/friren1.jpg", "/images/friren2.jpg"] },
  { id: 3, title: "Persona 5", preview: "/images/preview/persona5.jpg", pages: ["/images/persona5-1.jpg", "/images/persona5-2.jpg"] },
];

function App() {
  const [selectedManga, setSelectedManga] = useState(null);

  return (
    <div className="App">
      <h1>Переглядання манги</h1>
      {selectedManga ? (
        <MangaReader manga={selectedManga} goBack={() => setSelectedManga(null)} />
      ) : (
        <MangaList mangas={mangaData} selectManga={setSelectedManga} />
      )}
    </div>
  );
}

export default App;
