import React from "react";
import { useState, useEffect } from "react";

function ToyCard({toyData, setToysData}) {

  const [toyLikes, setToyLikes] = useState(toyData.likes)

  function handleDonate() {
    fetch(`http://localhost:3001/toys/${toyData.id}`, {
      method: "DELETE",
    })
    .then((r) => {
      setToysData(prev => prev.filter(toy => toy.id !== toyData.id))
    })
  }
  
  function handleLike() {
    const newToyLikes = toyLikes + 1;
    setToyLikes(newToyLikes);
    fetch(`http://localhost:3001/toys/${toyData.id}`, {
      method: "PATCH", 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({likes: newToyLikes})
    })
    .then((response => response.json()))
    .then((updatedData) => {
      console.log(updatedData)
    })
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toyData.name}</h2>
      <img
        src={toyData.image}
        alt={`Image of ${toyData.name}`}
        className="toy-avatar"
      />
      <p>{toyLikes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
