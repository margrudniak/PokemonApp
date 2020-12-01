import React, { useState, useEffect } from "react";
import axios from "axios";
import CardList from "../CardList/CardList";
import LoadMore from "../LoadMore/LoadMore";
import "./Card.scss";

const Card = () => {
  const [data, setData] = useState([]);
  const [holdData, setHoldData] = useState([]);
  const [pageUrl, setPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8"
  );
  const [loadMore, setLoadMore] = useState();

  useEffect(() => {
    axios.get(pageUrl).then((res) => {
      setData(res.data.results);
      setLoadMore(res.data.next);
    });
    concatData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageUrl]);

  const concatData = () => {
    setHoldData((holdData) => [...holdData, ...data]);
  };

  const getNextValues = () => {
    setPageUrl(loadMore);
  };

  return (
    <div>
      <div className="pokemon">
        {holdData.length ? (
          holdData.map((item) => (
            <CardList key={item.name} name={item.name} url={item.url} />
          ))
        ) : (
          <p>Click the button below to load data</p>
        )}
      </div>
      <LoadMore getNextValues={loadMore ? getNextValues : null} />
    </div>
  );
};

export default Card;
