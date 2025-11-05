import React from "react";
import { useState } from "react";

function ToyForm() {

  const [newName, setNewName] = useState("")
  const [newImage, setNewImage] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    console.log("submit button pushed")
    console.log(newName);
    console.log(newImage);
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e) => setNewName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(e) => setNewImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
