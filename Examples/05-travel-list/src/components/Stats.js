export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  }

  const nrItems = items.length;
  const nrPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((nrPacked / nrItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everthing! Read"
          : `You have ${nrItems} items on yout list, and you already packed ${nrPacked}
        (${percentage}%)`}
      </em>
    </footer>
  );
}
