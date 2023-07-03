import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "../styles/Form.css";

export default function Form({onAddItem}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const options = [];
  for(let i = 1; i < 20; i++) { 
    options.push(<option key={i} value={i}>{i}</option>);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!description) return; 

    const newItem = {
      id: uuidv4(),
      description: description,
      quantity: quantity,
      packed: false
    };

    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form 
    onSubmit={handleSubmit}
    className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select 
      value={quantity}
      onChange={(e) => setQuantity(e.target.value)}
      >
        {options}
      </select> 
      <button>Add</button>
    </form>
  )
}