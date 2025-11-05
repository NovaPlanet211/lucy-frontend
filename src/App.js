import { useEffect, useState } from "react";
import Tile from "./Tile";

function App() {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    fetch("https://twoj-backend.vercel.app/api/tiles")
      .then(res => res.json())
      .then(data => setTiles(data));
  }, []);

  return (
    <div className="grid">
      {tiles.map((t, i) => <Tile key={i} {...t} />)}
    </div>
  );
}

export default App;
