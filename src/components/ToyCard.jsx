import React from "react";

function ToyCard({toyData}) {

  function handleDonate() {
    console.log(`Donating ${toyData.name}`)
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
      <button className="del-btn" onClick={handleDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
