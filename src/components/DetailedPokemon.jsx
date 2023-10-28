import React, { useState, useEffect } from "react";
import classes from "../styles/detailedPokemon.module.css";
import missingNo from "../sprites/0.png";

export default function DetailedPokemon({ data }) {
  const [baseInfo, setBaseInfo] = useState(data || "");
  const [sprite, setSprite] = useState(
    <img className={classes.pokeImg} src={missingNo} alt="sprite" />
  );
  const [detailedInfo, setDetailedInfo] = useState("");
  const [visible, setVisible] = useState("none");

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

  function showAditionalDetails() {
    setVisible("block");
  }
  function removeAditionalDetails() {
    setVisible("none");
  }

  return (
    <div className={classes.info}>
      <div className={classes.name}>
        <div className={classes.innerBorder}>
          {(baseInfo && baseInfo.capName) || "MissingNo"}
        </div>
      </div>
      <div className={classes.imgWrapper} onClick={showAditionalDetails}>
        <div className={classes.background}>{sprite}</div>
        <p className={classes.imgDescr}>More info!</p>
      </div>
      <div className={classes.details}>
        <div className={classes.innerBorder}>
          {detailedInfo?.flavor_text_entries
            ?.find((i) => i.language.name === "en")
            ?.flavor_text?.replaceAll("\f", " ") || "No details yet"}
        </div>
      </div>

      <div className={classes.popup} style={{ display: visible }}>
        <div className={classes.popupContent}>
          <h1>{detailedInfo.name}</h1>
          <p>
            <span>{"Color: "}</span>
            {detailedInfo?.color?.name || "Unknown"}
          </p>
          <p>
            <span>{"Generation: "}</span>
            {detailedInfo?.generation?.name || "Unknown"}
          </p>
          <p>
            <span>{"Habitat: "}</span>
            {detailedInfo?.habitat?.name || "Unknown"}
          </p>
          <p>
            <span>{"Shape: "}</span>
            {detailedInfo?.shape?.name || "Unknown"}
          </p>
          <p>
            <span>{"Flavor text: "}</span>
            {detailedInfo?.flavor_text_entries
              ?.find((i) => i.language.name === "en")
              ?.flavor_text?.replaceAll("\f", " ") || "Unknown"}
          </p>
          <button
            className={classes.removeBtn}
            onClick={removeAditionalDetails}
          >
            Close
          </button>
        </div>
      </div>

      <div
        className={classes.backdrop}
        style={{ display: visible }}
        onClick={removeAditionalDetails}
      ></div>
    </div>
  );
}

/*
info
name
color.name
generation.name
habitat.name
shape.name

flavor_text_entries
detailedInfo?.flavor_text_entries
            ?.find((i) => i.language.name === "en")
            ?.flavor_text?.replaceAll("\f", " ") || "No details yet"
*/
