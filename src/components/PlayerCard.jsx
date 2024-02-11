// src/components/PlayerCard.jsx
import React from "react";

const PlayerCard = ({ playerName, playerImage, playerInfo }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-2">
      <img
        className="w-full h-40 object-cover"
        src={playerImage}
        alt={`Avatar of ${playerName}`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{playerName}</div>
        <p className="text-gray-700 text-base">{playerInfo}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
