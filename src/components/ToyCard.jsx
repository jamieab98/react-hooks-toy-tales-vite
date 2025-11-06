import React from "react";

function ToyCard({toyData}) {

  function handleDelete() {
    console.log("Delete button pressed")
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toyData.name}</h2>
      <img
        src={toyData.image}
        alt={`Image of ${toyData.name}`}
        className="toy-avatar"
      />
      <p>{toyData.likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
