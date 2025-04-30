import React, { useState } from "react";

const VotingApp = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();


    if (!trimmed || items.some((item) => item.name.toLowerCase() === trimmed.toLowerCase())) {
      alert("Item is either empty or already exists!");
      return;
    }

    setItems([...items, { name: trimmed, votes: 0 }]);
    setInputValue(""); 
  };

  const handleVote = (index) => {
    const updatedItems = [...items];
    updatedItems[index].votes += 1;
    setItems(updatedItems);
  };

  const handleRemove = (index) => {
    const filteredItems = items.filter((_, i) => i !== index);
    setItems(filteredItems);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", textAlign: "center" }}>
      <h2>Voting App</h2>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          placeholder="Enter item name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginTop: "10px" }}>
            <span>
              {item.name} ({item.votes} {item.votes === 1 ? "vote" : "votes"})
            </span>
            <div style={{ marginTop: "5px" }}>
              <button onClick={() => handleVote(index)}>Vote</button>
              <button onClick={() => handleRemove(index)} style={{ marginLeft: "10px" }}>
                Remove
              </button> 
            </div> 
          </li> 
        ))}
      </ul>
    </div>
  );
};

export default VotingApp;
