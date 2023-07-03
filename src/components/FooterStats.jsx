export default function FooterStats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

    const packedItems = items.filter((item) => item.packed).length;
    const totalItems = items.length;
    const percentagePacked = Math.trunc((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You got everything! Ready to go ✈️"
          : ` 💼 You have ${totalItems} items on your list, and you already packed ${packedItems} (${percentagePacked}%)`}
      </em>
    </footer>
  );
}
