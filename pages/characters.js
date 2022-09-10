import React from "react";
import Link from "next/link";

export default function characters({moviesCharacters}) {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {moviesCharacters.map(movie => (
        <>
           <Link href={`/charcaters/${movie.char_id}`}>
              <div className="mt-3">
                <img className="h-80 w-80" src={movie.img}/>   
                <h1>{movie.name}</h1>
              </div>
           </Link>  
        </>
      ))}
    </div>
  );
}


export const getStaticProps = async () => {
  const res = await fetch(`https://www.breakingbadapi.com/api/characters`);
  const moviesCharacters = await res.json();

  return {
    props: {
      moviesCharacters
    }
  }
}