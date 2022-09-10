function Character({ character }) {
  return (
    <div>
      <p> character : {character[0].name}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://www.breakingbadapi.com/api/characters/${context.params.id}`
  );

  const character = await res.json();
  return {
    props: { character }, // will be passed to the page component as props
  };
}

export default Character;
