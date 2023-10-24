import React, { useEffect, useState } from "react";
import classes from "../styles/pokemons.module.css";
import pokeLogo from "../sprites/pokeball_logo.png";

export default function Pokemons({ updateData }) {
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
        {data.map((item) => {
          let name = item.pokemon_species.name;
          let upperName = name.charAt(0).toUpperCase() + name.slice(1);

          let id = String(item.entry_number).padStart(4, "0");

          return (
            <li
              key={item.entry_number}
              onClick={() => updateData({ item, capName: upperName })}
            >
              <img src={pokeLogo} alt="logo" />
              <span>{id}</span>
              <span>{upperName}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

//add click event for the logo and li
