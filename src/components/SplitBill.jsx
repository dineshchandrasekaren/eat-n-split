import { useState } from "react";

export default function SplitBill({ selectedFriend }) {
  const [newBill, setNewBill] = useState({
    bill: 0,
    your: 0,
    their: 0,
    who: 0,
  });
  function handleChange({ target }) {
    const { id, value } = target;
    setNewBill((p) => ({ ...p, [id]: value }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split the bill with {selectedFriend.name}</h2>
      <label htmlFor="bill">💰 Bill value</label>
      <input
        type="number"
        id="bill"
        onChange={handleChange}
        value={newBill.bill}
      />
      <label htmlFor="your"> 🧍‍♀️ Your expenses</label>
      <input
        type="number"
        id="your"
        onChange={handleChange}
        value={newBill.your}
      />{" "}
      <label htmlFor="their">👫 {selectedFriend.name}'s expenses:</label>
      <input
        type="number"
        id="their"
        onChange={handleChange}
        value={newBill.their}
      />{" "}
      <label htmlFor="who"> 🤑Who is paying the bill?</label>
      <select onChange={handleChange} id="who" value={newBill.who}>
        <option value="0">You</option>
        <option value="1">{selectedFriend.name}</option>
      </select>
      <input type="submit" value="Split Bill" className="button" />
    </form>
  );
}
