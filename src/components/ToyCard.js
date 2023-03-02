import React from "react";

function ToyCard({name,toyId,image,likes, removeToyfromCollection, patchNewLike}) {

 function handleDelete(){
  fetch(`http://localhost:3001/toys/${toyId}`, {method: 'DELETE'})
  removeToyfromCollection(toyId)
 }

 function handleLike(){
  const updatedObj = {
    likes: likes + 1,
  }
  fetch(`http://localhost:3001/toys/${toyId}`, {method: 'PATCH',
   headers: {'Content-Type': 'application/json'},
   body: JSON.stringify(updatedObj)
  })
  .then((response)=>response.json())
  .then(patchNewLike)
 }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn"onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
