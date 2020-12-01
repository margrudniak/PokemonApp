import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CardList.scss";

const CardList = (props) => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    axios.get(props.url).then((res) => {
      setHeight(res.data.height);
      setWeight(res.data.weight);
      setPhoto(res.data.sprites.front_default);
    });
  }, [props.url]);
  return (
    <div className="pokemonElement" key={props.name}>
      <img src={photo} alt={photo} />
      <strong>
        <p>{props.name.toUpperCase()}</p>
      </strong>
      <p>Height: {height / 10}m</p>
      <p>Weight: {weight / 10}kg</p>
    </div>
  );
};

export default CardList;
