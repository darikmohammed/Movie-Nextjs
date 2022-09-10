import Link from "next/link";

function Card({ desc }) {
  return (
    <div className="rounded-3xl shadow-lg shadow-slate-500/50 p-4 cursor-pointer relative">
      <div className="absolute bg-slate-700 text-white p-1 rounded-xl top-10 right-8">
        {desc.status}
      </div>
      <Link href={`/charcaters/${desc.char_id}`}>
        <div className="mt-3 flex flex-col">
          <img className="w-80 h-80 rounded-2xl" src={desc.img} />
          <div className="flex justify-between">
            <h1 className="mt-3 ">{desc.name}</h1>
            <p className="m-y-2 self-end">{desc.birthday}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
