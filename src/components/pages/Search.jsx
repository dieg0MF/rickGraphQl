import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../AppProvider";

import Cards from "../../components/shared/Card";
import "./Search.css";

import notFound from "../../assets/images/NotFoundImage.png";
import { EpisodeGraph } from "../../helpers/graphQl";

export default function Search() {
  const { episode, setEpisode } = useContext(AppContext);
  const { search, setSearch } = useContext(AppContext);
  

  setEpisode(EpisodeGraph(search))

  console.log("episode", episode);

  let load;
  if (episode !== null) {
    load = (
      <Cards
        episodeName={episode.name}
        image={`https://rickandmortyapi.com/api/character/avatar/${episode.id}.jpeg`}
        date={episode.air_date}
        key={episode.id}
      ></Cards>
    );
  } else {
    load = (
      <div className="notFoundContainer">
        <img src={notFound} alt="notFound"></img>
        <span>Not Found</span>
      </div>
    );
  }

  return <div className="ContainerSearch">{load}</div>;
}
