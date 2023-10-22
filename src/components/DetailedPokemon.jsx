import React, { useState } from "react";
import classes from "../styles/detailedPokemon.module.css";
import pokeballBack from "../sprites/pokeball_back_edit.png";
import sprite from "../sprites/pokeball_back.png"; //used to overlap the background image

export default function DetailedPokemon(props) {
  const [info, setInfo] = useState(props);

  if (!props) {
    return <p>Loading</p>;
  }
  return (
    <div className={classes.info}>
      <div className={classes.name}>
        <div className={classes.innerBorder}>Charmander</div>
      </div>
      <img className={classes.pokeImg} src={pokeballBack} alt="backdrop" />
      <div className={classes.details}>
        <div className={classes.innerBorder}>Stuff</div>
      </div>
    </div>
  );
}
