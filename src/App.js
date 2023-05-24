import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import BodyContent from "./component/Body";
import FooterElem from "./component/Footer";

function App() {
  const [listPlayers, setListPlayers] = useState([]);
  const [player, setPlayer] = useState({
    name: "",
    mark: 0,
    id: "",
  });
  // const [mark, setMark] = useState(0);

  //Xử lý khi thêm người chơi
  const handleAddPlayer = (player) => {
    if (listPlayers.length > 0) {
      player.id = listPlayers[listPlayers.length - 1].id + 1;
    } else {
      player.id = 1;
    }
    player.mark = 0;

    setListPlayers([...listPlayers, player]);
  };

  //Xử lý khi xóa người chơi
  const handleRemove = (id) => {
    setListPlayers(listPlayers.filter((player) => player.id !== id));
  };

  //Xử lý khi tăng/ giảm điểm người chơi
  const handleMark = (listNewPlayers) => {
    setListPlayers([...listNewPlayers]);
  };

  return (
    <div className="wrapper">
      <Header listPlayers={listPlayers} />
      <BodyContent
        listPlayers={listPlayers}
        onRemove={handleRemove}
        onChangeMark={handleMark}
      />
      <FooterElem onAddPlayer={handleAddPlayer} />
    </div>
  );
}

export default App;
