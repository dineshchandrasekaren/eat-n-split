import { useState } from "react";
import AddFriend from "./AddFriend";

const reset = {
  name: "",
  balance: 0,
  image: `https://i.pravatar.cc/${Date.now()}`,
};
export default function FriendList({ children, onAddFriend }) {
  const [isAddFriend, setIsAddFriend] = useState(false);
  const [newFriend, setNewFriend] = useState(reset);

  const handleIsAddFriend = () => {
    setIsAddFriend((p) => !p);
  };

  const handleAddFriend = (e) => {
    e.preventDefault();
    if (newFriend.name && newFriend.image) {
      onAddFriend(newFriend);
      setNewFriend(reset);
      setIsAddFriend(false);
    }
  };
  return (
    <div className="sidebar">
      <ul>{children}</ul>
      {isAddFriend && (
        <form className="form-add-friend" onSubmit={handleAddFriend}>
          <AddFriend newFriend={newFriend} setNewFriend={setNewFriend} />
        </form>
      )}

      <button className="button" onClick={handleIsAddFriend}>
        {isAddFriend ? "Close" : "Add Friend"}
      </button>
    </div>
  );
}
