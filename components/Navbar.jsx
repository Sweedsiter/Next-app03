"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { GiCondorEmblem } from "react-icons/gi";

export default function Navbar() {
  const [search, setSearch] = useState();

  const items = (
    <div className="text-white top-15 right-0 bg-slate-900">
      {!search ? null : search}
    </div>
  );
  return (
    <>
      <div className="sticky top-0 z-20">
        <nav className="bg-slate-900 text-white py-2 px-4 flex justify-between flex-wrap shadow-lg shadow-zinc-200  ">
          <Link
            href={"/"}
            className="text-xl font-bold  flex flex-row items-center"
          >
            <GiCondorEmblem className="mr-1 text-3xl" />
            <h1 className=" underline underline-offset-[6px]  decoration-orange-500">
              Dx-emb
            </h1>
          </Link>
          <div className="flex justify-between items-center flex-row">
            <input
              type="text"
              placeholder="search"
              className="pl-2 rounded-lg text-gray-950 w-40 h-fit text-base"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <div className="pl-5 text-3xl">
              <FaBars />
            </div>
          </div>
        </nav>
        <div className="w-full text-right">{items}</div>
      </div>
    </>
  );
}
