import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toysData, removeToyfromCollection, patchNewLike}) {

  const toysCard = toysData.map(toy =>{
    return < ToyCard key={toy.id} toyId={toy.id}
    name={toy.name}
    image={toy.image}
    likes={toy.likes}
    removeToyfromCollection={removeToyfromCollection}
    patchNewLike={patchNewLike}
    />
  })
  return (
    <div id="toy-collection">{toysCard }</div>
  );
}

export default ToyContainer;
