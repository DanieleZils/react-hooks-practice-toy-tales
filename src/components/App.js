import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toysData, setToysData] = useState([])

  function addNewToy(anotherToy){
    setToysData([...toysData, anotherToy]);
  }

  function removeToyfromCollection(anId){
    const filteredArray = toysData.filter(toy => {
      return (toy.id !== anId)
    })
    setToysData(filteredArray)
  }

  function patchNewLike(updatedObj){
  const updatedObjData = toysData.map((toy) => 
    toy.id === updatedObj.id ? updatedObj : toy
  )
  setToysData(updatedObjData)

  }

   useEffect(()=>{
     fetch('http://localhost:3001/toys')
     .then((response)=>response.json())
     .then(setToysData)
   },[])


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toysData={toysData} removeToyfromCollection={removeToyfromCollection} patchNewLike={patchNewLike}/>
    </>
  );
}

export default App;
