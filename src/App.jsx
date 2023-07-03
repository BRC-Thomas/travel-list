import Form from "./components/Form";
import ListItem from "./components/ListItem";
import FooterStats from "./components/FooterStats";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: uuidv4(), description: "Pants", quantity: 1, packed: false },
    { id: uuidv4(), description: "T-shirt", quantity: 1, packed: false },
    { id: uuidv4(), description: "Hat", quantity: 1, packed: false },
  ]);

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="App">
      <h1>🏝️ FAR AWAY 🧳</h1>
      <Form onAddItem={handleAddItem} />
      <ListItem
        items={items}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
        onClearList={handleClearList}
      />
      <FooterStats items={items} />
    </div>
  );
}

export default App;
