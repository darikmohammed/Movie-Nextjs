import React from "react";
import Card from "../components/Card";

export default function characters({ moviesCharacters }) {
  return (
    <div className="grid grid-cols-1 gap-5 justify-items-center mt-4 md:grid-cols-3">
      {moviesCharacters.map((movie) => (
        <Card key={movie.char_id} desc={movie} />
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://www.breakingbadapi.com/api/characters`);
  const moviesCharacters = await res.json();

  return {
    props: {
      moviesCharacters,
    },
  };
};
