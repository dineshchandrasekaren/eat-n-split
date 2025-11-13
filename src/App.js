import { useState } from "react";
import SplitBill from "./components/SplitBill";
import FriendList from "./components/FriendList";
import Friend from "./components/Friend";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [friendList, setFriendList] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState("");

  const handleSelectFriend = (friend) => {
    setSelectedFriend((p) => (p === "" ? friend : ""));
  };
  const calculate = ({ index, amount }) => {
    friendList[index].balance = friendList[index].balance + amount;
    setFriendList([...friendList]);
    setSelectedFriend("");
  };
  return (
    <div className="app">
      <FriendList
        onAddFriend={(newFriend) => {
          setFriendList((p) => [...p, newFriend]);
        }}
      >
        {friendList.map((friend, i) => (
          <Friend
            {...friend}
            index={i}
            key={friend.name}
            selectedFriend={selectedFriend}
            onSelectFriend={handleSelectFriend}
          />
        ))}
      </FriendList>
      {selectedFriend && (
        <SplitBill selectedFriend={selectedFriend} calculate={calculate} />
      )}
    </div>
  );
}

export default App;
