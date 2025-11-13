import { useState } from "react";
import SplitBill from "./components/SplitBill";
import FriendList from "./components/FriendList";
import Friend from "./components/Friend";

const initialFriends = [
  {
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [friendList, setFriendList] = useState(initialFriends);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelectFriend = (index) => {
    setSelectedIndex((i) => (i === index ? null : index));
  };
  const calculate = (amount) => {
    friendList[selectedIndex].balance =
      friendList[selectedIndex].balance + amount;
    setFriendList([...friendList]);
    setSelectedIndex(null);
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
            selectedIndex={selectedIndex}
            onSelectFriend={handleSelectFriend}
          />
        ))}
      </FriendList>
      {selectedIndex !== null && (
        <SplitBill
          friend={friendList[selectedIndex].name}
          calculate={calculate}
        />
      )}
    </div>
  );
}

export default App;
