import React from "react";
import ToyCard from "./ToyCard";
import { useEffect, useState } from "react";

function ToyContainer({toysData, setToysData}) {  

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then((r) => r.json())
    .then((data) => setToysData(data))
  }, [])


  return (
    <div id="toy-collection">
      {toysData.map((toyData) => (
        <ToyCard key={toyData.id} toyData={toyData} setToysData={setToysData}/>
      ) )}
    </div>
  );
}

export default ToyContainer;
