"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  const [search, setSearch] = useState();
  return (
    <>
      <nav className="bg-slate-900 text-white py-2 px-4 flex justify-between">
        <Link href={"/"} className="text-xl font-bold">
          Dx-emb
        </Link>
        <div className="flex justify-between flex-row ">
          <input
            type="text"
            placeholder="search"
            className="pl-3 rounded-lg text-gray-950"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          {search}
          <div className="pl-5 text-3xl">
            <FaBars />
          </div>
        </div>
      </nav>
    </>
  );
}
