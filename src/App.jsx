import React, { useState } from "react";
import Header from "./components/Header";
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
      <Pokemons updateData={updateSelectedDetails} />
      <DetailedPokemon data={selectedDetails} />
    </div>
  );
}

export default App;
