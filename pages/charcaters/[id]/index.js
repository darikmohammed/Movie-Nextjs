function Character({ character }) {
  return (
    <div>
      <p> character : {character.char_id}</p>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  console.log("context", context.params);
  const res = await fetch(`https://www.breakingbadapi.com/api/characters/1`);

  const character = await res.json();

  return {
    props: {
      character,
    },
  };
};

export default Character;
