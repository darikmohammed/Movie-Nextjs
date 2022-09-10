import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="flex justify-between px-6 py-4 bg-neutral-800 text-white ">
      <h1>Logo</h1>
    
      <ul className="hidden md:flex gap-x-3 ">
        <li className="hover:text-sky-600">
          <Link href='/'>Home</Link>
        </li>
        <li className="hover:text-sky-600">
          <Link href='/characters'>Characters</Link>
        </li>
        <li className="hover:text-sky-600">
          <Link href='/episodes'>Episodes</Link>
        </li>
        <li className="hover:text-sky-600">
          <Link href='/quotes'>Quotes</Link>
        </li>
        <li className="hover:text-sky-600">
          <Link href='/deaths'>Deaths</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
