export default function Friend({
  id,
  name,
  image,
  balance,
  onSelectFriend,
  selectedFriend,
}) {
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className={balance > 0 ? "green" : "red"}>
        {balance > 0
          ? `${name} owes you ${balance}$`
          : `You owe ${name} ${Math.abs(balance)}$`}
      </p>
      <button
        className="button"
        onClick={() => onSelectFriend({ id, name, balance })}
      >
        {selectedFriend.id === id ? "Close" : "Select"}
      </button>
    </li>
  );
}
