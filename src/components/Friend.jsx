import Button from "./Button";

export default function Friend({
  index,
  name,
  image,
  balance,
  onSelectFriend,
  selectedIndex,
}) {
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className={balance === 0 ? "" : balance > 0 ? "green" : "red"}>
        {balance === 0
          ? `You and ${name} are even `
          : balance > 0
          ? `${name} owes you ${balance}$`
          : `You owe ${name} ${Math.abs(balance)}$`}
      </p>
      <Button onClick={() => onSelectFriend(index)}>
        {selectedIndex === index ? "Close" : "Select"}
      </Button>
    </li>
  );
}
