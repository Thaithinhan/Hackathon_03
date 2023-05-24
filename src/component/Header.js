import React, { useEffect, useMemo, useState } from "react";

function Header(props) {
  const listPlayers = props.listPlayers;

  const [mark, setMark] = useState(0);

  useEffect(() => {
    const sum = listPlayers.reduce((accumulator, player) => {
      return accumulator + player.mark;
    }, 0);
    setMark(sum);
  }, [props.listPlayers]);

  return (
    <div className="header p-2 d-flex align-items-center">
      <div className="">
        <p className="fw-bold text-white">
          <span className="title">Player :</span>
          <span>{listPlayers.length}</span>
        </p>
        <p className="fw-bold text-white">
          <span className="title">Total Point :</span> <span>{mark}</span>
        </p>
      </div>{" "}
      <h3 className="fw-bold text-white">TRANSCRIPT</h3>
    </div>
  );
}

export default Header;
