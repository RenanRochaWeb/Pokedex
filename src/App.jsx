import React from "react";
import Pokemons from "./components/Pokemons";
import Header from "./components/Header";
import Scroll from "./components/Scroll";
import "./app.css";
import DetailedPokemon from "./components/DetailedPokemon";

function App() {
  return (
    <div className="App">
      <Header />
      <Scroll />
      <Pokemons />
      <DetailedPokemon />
    </div>
  );
}

export default App;
