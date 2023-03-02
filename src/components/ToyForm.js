import React, {useState} from "react";



function ToyForm({addNewToy}) {

const [nameInput, setNameInput] = useState('')
const [imageInput, setImageInput] = useState('')

const handleNameChange = event => setNameInput(event.target.value)
const handleImageChange = event => setImageInput(event.target.value)

function handleSubmit(e){
  e.preventDefault()
  
  const newToy = {
    name:nameInput,
    image:imageInput
  }
 
  fetch('http://localhost:3001/toys', {method: 'POST',
   body: JSON.stringify(newToy),
   headers: {'Content-Type': 'application/json'}
  })
  .then(response =>response.json())
  .then(addNewToy)
}

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          value={nameInput}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleNameChange}
        />
        <br />
        <input
          value={imageInput}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleImageChange}
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
