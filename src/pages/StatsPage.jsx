import React from "react";

const people = [
  {
    name: "Lionel Messi",
    role: "GOAT(Greatest-Of-All-Time)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg",
    bio: "Top Scorer with 30 goals this season.",
  },
  {
    name: "Jan Oblak",
    role: "Top Goalkeeper",
    imageUrl:
      "https://i2-prod.dailystar.co.uk/incoming/article24202571.ece/ALTERNATES/s615b/0_GettyImages-1319531678.jpg",
    bio: "Top Goalkeeper with 18 clean sheets.",
  },
  {
    name: "Kevin de Bruyne",
    role: "Assist King",
    imageUrl:
      "https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTAxZGlnaXMucmNzLXJkcy5y/byUyRnN0b3JhZ2UlMkYyMDI0JTJGMDEl/MkYwOCUyRjE4NzQ5NTdfMTg3NDk1N19L/ZXZpbi1kZS1CcnV5bmUuanBnJnc9NzAw/Jmg9NDIwJmhhc2g9ZWRkNjdmNGYxMzQxNzMxN2E2NTZlODhjODRlMmY3Zjk=.thumb.jpg",
    bio: "Most assists in Premier League History",
  },
];

const StatsPage = () => {
  return (
    <div className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Player Stats
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Here are some of the top players and their stats.
          </p>
        </div>
        <ul role="list" className="space-y-12 divide-y divide-gray-200">
          {people.map((person) => (
            <li
              key={person.name}
              className="pt-12 flex flex-col gap-10 sm:flex-row"
            >
              <img
                className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
              />
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.role}
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  {person.bio}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StatsPage;
