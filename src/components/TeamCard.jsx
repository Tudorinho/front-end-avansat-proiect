// src/components/TeamCard.jsx
import React from "react";
import PlayerCard from "./PlayerCard"; // Importăm componenta PlayerCard

const TeamCard = ({ teamName, teamLogo, players, onTeamSelect }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg p-4">
      <img className="w-full" src={teamLogo} alt={`Logo of ${teamName}`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{teamName}</div>
        <p className="text-gray-700 text-base">Players:</p>
        <div className="flex flex-wrap gap-4">
          {/* Iterăm prin lista de jucători și afișăm fiecare PlayerCard */}
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              playerName={player.name}
              playerImage={player.image}
              playerInfo={player.info}
            />
          ))}
        </div>
        <button
          onClick={onTeamSelect}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default TeamCard;
