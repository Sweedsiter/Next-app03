"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  const [search, setSearch] = useState();

  const items = (
    <div className="absolute text-white top-15 right-0 bg-slate-900">
      {search ? search : ""}
    </div>
  );
  return (
    <>
      <nav className="bg-slate-900 text-white py-2 px-4 flex justify-between flex-wrap shadow-lg shadow-zinc-200">
        <Link href={"/"} className="text-xl font-bold ">
          Dx-emb
        </Link>
        <div className="flex justify-between flex-row  ">
          <input
            type="text"
            placeholder="search"
            className="pl-2 rounded-lg text-gray-950"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <div className="pl-5 text-3xl">
            <FaBars />
          </div>
        </div>
      </nav>
      <div>{items}</div>
    </>
  );
}
