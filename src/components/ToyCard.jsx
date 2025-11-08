import React from "react";

function ToyCard({toyData, setToysData}) {

  function handleDonate() {
    fetch(`http://localhost:3001/toys/${toyData.id}`, {
      method: "DELETE",
    })
    .then((r) => {
      console.log(`Deleting ${toyData.name}`)
      setToysData(prev => prev.filter(toy => toy.id !== toyData.id))
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
      <p>{toyData.likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
