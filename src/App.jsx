import React, { useState } from "react";
import Header from "./components/Header";
import Scroll from "./components/Scroll";
import Pokemons from "./components/Pokemons";
import DetailedPokemon from "./components/DetailedPokemon";
import "./app.css";

function App() {
  const [selectedDetails, setSelectedDetails] = useState(null);

  function updateSelectedDetails(details) {
    setSelectedDetails(details);
  }

  return (
    <div className="App">
      <Header />
      <Scroll />
      <Pokemons updateData={updateSelectedDetails} />
      <DetailedPokemon data={selectedDetails} />
    </div>
  );
}

export default App;
