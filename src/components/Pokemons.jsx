import React, { useEffect, useState } from "react";
import classes from "../styles/pokemons.module.css";
import pokeLogo from "../sprites/pokeball_logo.png";

export default function Pokemons() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokedex/1/");
    const newData = await res.json();
    setData(newData.pokemon_entries);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={classes.list}>
      <ul>
        {data.map((item) => (
          <li key={item.entry_number}>
            <img src={pokeLogo} alt="logo" />
            <span>{item.entry_number}</span>
            <span>{item.pokemon_species.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

//add click event for the logo and li
