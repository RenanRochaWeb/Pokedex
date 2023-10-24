import React, { useState, useEffect } from "react";
import classes from "../styles/detailedPokemon.module.css";
import missingNo from "../sprites/0.png";
import pokeballBack from "../sprites/pokeball_back_edit.png";

export default function DetailedPokemon({ data }) {
  const [baseInfo, setBaseInfo] = useState(data || "");
  const [sprite, setSprite] = useState(
    <img className={classes.pokeImg} src={missingNo} alt="sprite" />
  );
  const [detailedInfo, setDetailedInfo] = useState("");

  const fetchDetailedInfo = async (url) => {
    const res = await fetch(url);
    const newData = await res.json();
    setDetailedInfo(newData);
  };

  useEffect(() => {
    if (data) {
      setBaseInfo(data);
      setSprite(
        <img
          className={classes.pokeImg}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.item.entry_number}.png`}
          alt="sprite"
        />
      );
      fetchDetailedInfo(data.item.pokemon_species.url);
    }
  }, [data]);

  return (
    <div className={classes.info}>
      <div className={classes.name}>
        <div className={classes.innerBorder}>
          {baseInfo && baseInfo.capName}
        </div>
      </div>
      <div className={classes.background}>{sprite}</div>
      <div className={classes.details}>
        <div className={classes.innerBorder}>
          {detailedInfo &&
            detailedInfo.flavor_text_entries[0].flavor_text.replaceAll(
              "\f",
              " "
            )}
        </div>
      </div>
    </div>
  );
}
