import { useState } from "react";
const reset = {
  bill: 0,
  your: 0,
  who: 0,
};
export default function SplitBill({ selectedFriend, calculate }) {
  const [newBill, setNewBill] = useState(reset);
  const their = newBill.bill - newBill.your;

  function handleChange({ target }) {
    const { id, value } = target;
    if (id === "your" && newBill.bill === 0) {
      return;
    } else if (id === "your" && value > newBill.bill) {
      return;
    } else if (id === "bill" && newBill.your > value) {
      setNewBill((p) => ({ ...p, your: +value }));
    }
    setNewBill((p) => ({ ...p, [id]: +value }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = 0;
    if (newBill.who === 0) {
      amount = their;
    } else {
      amount = -newBill.your;
    }
    calculate({ amount, index: selectedFriend.index });
    setNewBill(reset);
  };
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split the bill with {selectedFriend.name}</h2>
      <label htmlFor="bill">💰 Bill value</label>
      <input
        type="number"
        id="bill"
        min={0}
        onChange={handleChange}
        value={newBill.bill}
      />
      <label htmlFor="your"> 🧍‍♀️ Your expenses</label>
      <input
        type="number"
        id="your"
        min={0}
        disabled={newBill.bill === 0}
        onChange={handleChange}
        value={newBill.your}
      />{" "}
      <label htmlFor="their">👫 {selectedFriend.name}'s expenses:</label>
      <input type="number" id="their" min={0} disabled value={their} />{" "}
      <label htmlFor="who"> 🤑Who is paying the bill?</label>
      <select onChange={handleChange} id="who" value={newBill.who}>
        <option value="0">You</option>
        <option value="1">{selectedFriend.name}</option>
      </select>
      <input
        type="submit"
        disabled={newBill.bill === 0}
        value="Split Bill"
        className="button"
      />
    </form>
  );
}
