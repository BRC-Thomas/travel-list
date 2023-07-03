export default function Item({ item, onToggleItem, onDeleteItem }) {

  return (
    <li>
      <input 
      onChange={() => onToggleItem(item.id)} 
      value={item.packed}
      type="checkbox" />

      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
