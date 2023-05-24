import { useEffect, useState } from "react";

function FooterElem(props) {
  const [inputValue, SetInputValue] = useState("");

  //Function Onchange Input
  const handleInput = (e) => {
    SetInputValue(e.target.value);
  };

  const handleAdd = () => {
    const newPlayer = {
      name: inputValue,
    };
    props.onAddPlayer(newPlayer);
    SetInputValue("");
  };

  //   useEffect(()=>{
  //      SetInputValue()
  //   })

  return (
    <footer>
      <input
        id="add-new-player"
        type="text"
        placeholder="Enter a players name"
        className="text-white"
        onChange={handleInput}
        value={inputValue}
      />
      <button onClick={handleAdd}>Add Player</button>
    </footer>
  );
}

export default FooterElem;
