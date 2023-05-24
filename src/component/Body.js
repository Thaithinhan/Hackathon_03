import { useEffect, useState } from "react";

function BodyContent(props) {
  let listPlayers = props.listPlayers;
  const [mark, setMark] = useState(0);
  const [maxMark, setMaxMark] = useState(0);

  //Xoá người chơi lấy dữ liệu
  const handleRemove = (id) => {
    props.onRemove(id);
  };

  //Xử lý khi Tăng điểm
  const handleIncrease = (id) => {
    setMark((prevMark) => prevMark + 1);
    listPlayers.forEach((player, index) => {
      if (player.id === id) {
        listPlayers[index] = { ...listPlayers[index], mark: player.mark + 1 };
      }
    });
    props.onChangeMark(listPlayers);
  };

  //   Xử lý khi Giảm điểm
  const handleDecrease = (id) => {
    setMark((prevMark) => prevMark - 1);
    listPlayers.forEach((player, index) => {
      if (player.id === id && player.mark > 0) {
        listPlayers[index] = { ...listPlayers[index], mark: player.mark - 1 };
      }
    });
    props.onChangeMark(listPlayers);
  };

  //Xử lý điểm cao nhất

  function findHighestScore() {
    let highestScore = 0;

    listPlayers.forEach((player) => {
      if (player.mark > highestScore) {
        highestScore = player.mark;
      }
    });

    return highestScore;
  }
  useEffect(() => {
    const max = findHighestScore();
    setMaxMark(max);
  }, [props.listPlayers]);

  return (
    <div className="my-3">
      {listPlayers.length === 0 ? (
        <h3 className="text-danger">No have Players</h3>
      ) : (
        listPlayers.map((player) => (
          <div
            key={player.id}
            className="body-element d-flex align-items-center border-bottom py-2"
          >
            <button
              className="btn btn-none btn-remove "
              onClick={() => handleRemove(player.id)}
            >
              <i className="fa-solid fa-xmark text-secondary"></i>
            </button>
            <button className="btn btn-none btn-crown">
              <i
                className={
                  player.mark === maxMark
                    ? "fa-solid fa-crown text-warning"
                    : "fa-solid fa-crown text-secondary"
                }
              ></i>
            </button>
            <span className="player-name fw-bold">{player.name}</span>
            <button
              className="btn btn-secondary rounded-0 btn-decrease"
              onClick={() => handleDecrease(player.id)}
            >
              <i className="fa-solid fa-minus text-white"></i>
            </button>
            <span className="mark-player fw-bold">{player.mark}</span>
            <button
              className="btn btn-secondary rounded-0 btn-increase"
              onClick={() => handleIncrease(player.id)}
            >
              <i className="fa-solid fa-plus text-white"></i>
            </button>
          </div>
        ))
      )}

      {/* <div className="body-element d-flex align-items-center border-bottom py-2">
        <button className="btn btn-none btn-remove">
          <i className="fa-solid fa-xmark text-secondary"></i>
        </button>
        <button className="btn btn-none btn-remove">
          <i className="fa-solid fa-crown text-secondary"></i>
        </button>
        <span className="player-name fw-bold">Thái Thị Nhàn</span>
        <button className="btn btn-secondary rounded-0 btn-decrease">
          <i className="fa-solid fa-minus text-white"></i>
        </button>
        <span className="mark-player fw-bold">0</span>
        <button className="btn btn-secondary rounded-0 btn-increase">
          <i className="fa-solid fa-plus text-white"></i>
        </button>
      </div> */}
    </div>
  );
}

export default BodyContent;
