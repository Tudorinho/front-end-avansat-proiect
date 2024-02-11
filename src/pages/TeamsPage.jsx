import React from "react";
import TeamCard from "../components/TeamCard";

const TeamsPage = () => {
  const teams = [
    {
      id: 1,
      name: "FC Barcelona",
      logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
      details:
        "Founded in 1899, FC Barcelona is a professional football club based in Barcelona, Catalonia, Spain.",
      players: [
        {
          id: 1,
          name: "Lionel Messi",
          image:
            "data:image/jpeg;base64,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",
          info: "GOAT",
        },
        {
          id: 2,
          name: "Andres Iniesta",
          image:
            "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/INIESTA%202017-18.jpg",
          info: "Maestro in Midfield",
        },
      ],
    },
    {
      id: 2,
      name: "Arsenal",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
      details:
        "Founded in 1886, Arsenal Football Club is a professional football club based in Islington, London, England.",
      players: [
        {
          id: 1,
          name: "Thierry Henry",
          image:
            "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt847ece6b29100c94/60db78a2cbc6070f5c3bc1e4/7181c68c167015a870d2c531b5eb703227cc0055.jpg?auto=webp&format=pjpg&width=3840&quality=60",
          info: "The French GOAT",
        },
        {
          id: 2,
          name: "Patrick Vieira",
          image:
            "https://tmssl.akamaized.net/images/foto/galerie/patrick-vieira-fc-arsenal-1504638348-11820.jpg?lm=1504638361",
          info: "The Engine",
        },
      ],
    },
    // Add two more teams here
    {
      id: 3,
      name: "Real Madrid",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
      details:
        "Real Madrid Club de Fútbol, commonly referred to as Real Madrid, is a professional football club based in Madrid, Spain.",
      players: [
        {
          id: 1,
          name: "Cristiano Ronaldo",
          image:
            "https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTAxdHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMTgl/MkYwNyUyRjEwJTJGOTM2NTA3XzkzNjUw/N19jcmlzdGlhbm8tcm9uYWxkby5qcGcm/dz03MDAmaD00MjAmaGFzaD02NDVkODQ3/M2JmNTQ4ZWYwY2JjYThiMzc4ZDRkNTgzYg==.thumb.jpg",
          info: "One of the greatest goal-scorers of all time",
        },
        {
          id: 2,
          name: "Sergio Ramos",
          image:
            "https://i.eurosport.com/2023/09/04/3778333-76856588-2560-1440.jpg?w=1300",
          info: "Captain Fantastic",
        },
      ],
    },
  ];

  return (
    <div className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Teams
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Here are some of the top football teams and their players.
          </p>
        </div>
        <ul role="list" className="space-y-12 divide-y divide-gray-200">
          {teams.map((team) => (
            <li
              key={team.name}
              className="pt-12 flex flex-col gap-10 sm:flex-row"
            >
              <img
                className="w-52 h-52 rounded-md object-cover"
                src={team.logo}
                alt=""
              />
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {team.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {team.details}
                </p>
                <div className="mt-6 space-y-4 flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4">
                  {team.players.map((player) => (
                    <div key={player.id} className="flex items-center">
                      <img
                        className="w-16 h-16 rounded-full object-cover"
                        src={player.image}
                        alt=""
                      />
                      <div className="ml-3">
                        <p className="text-base font-semibold">{player.name}</p>
                        <p className="text-sm text-gray-600">{player.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamsPage;
