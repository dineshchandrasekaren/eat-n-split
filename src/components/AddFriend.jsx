export default function AddFriend({ setNewFriend, newFriend }) {
  const handleChangeNewFriend = ({ target }) => {
    const { id, value } = target;
    console.log(id, value);

    setNewFriend((p) => ({ ...p, [id]: value }));
  };
  return (
    <>
      <label htmlFor="name">👫 Friend name</label>
      <input
        type="text"
        id="name"
        onChange={handleChangeNewFriend}
        value={newFriend.name}
      />
      <label htmlFor="image"> 🌄 Image URL</label>
      <input
        type="text"
        id="image"
        value={newFriend.image}
        onChange={handleChangeNewFriend}
      />{" "}
      <input type="submit" value="Add" className="button" />
    </>
  );
}
