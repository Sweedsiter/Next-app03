"use client";
import Link from "next/link";
import { useState } from "react";
import { GiCondorEmblem } from "react-icons/gi";

export default function TopicsList({ topics }) {
  const [SeletGr, setSeletGr] = useState();

  const Group = topics
    .map((e) => e.Group)
    .filter((e, i, a) => a.indexOf(e) === i);

  return (
    <div className="flex flex-col desktop:flex-row w-full desktop:mx-10">
      {/* Menu List */}
      <div className=" desktop:w-2/6  border rounded-lg border-slate-300 m-3 cursor-default p-3  bg-white desktop:drop-shadow">
        <h1 className="text-xl duration-150 hover:text-orange-600 hover:text-2xl my-2 font-bold hover:bg-slate-100 hover:px-2">
          Groups List
        </h1>
        {Group.map((e, index) => (
          <div
            key={index}
            onClick={() => setSeletGr(topics?.filter((f) => f.Group === e))}
            className="flex w-full flex-row justify-between items-center duration-150 hover:bg-slate-100 py-1 text-sm hover:px-2 hover:text-base hover:font-bold hover:text-orange-600"
          >
            <span>{e}</span>
            <span>Total {topics?.filter((f) => f.Group === e).length}</span>
          </div>
        ))}
        <div
          onClick={() => setSeletGr()}
          className="flex flex-row justify-between items-center mt-8 duration-150 hover:text-lg hover:bg-slate-100 py-1 hover:px-2 hover:font-bold hover:text-orange-600"
        >
          <span>All</span>
          <div className="Total">
            <span>Total {topics.length}</span>
          </div>
        </div>
        {/* <span>{SeletGr}</span> */}
      </div>

      {/* Products */}
      <div className="flex flex-wrap w-full p-2 justify-center">
        {!topics ? (
          <span>Please wait...</span>
        ) : SeletGr ? (
          SeletGr?.map((t, index) => (
            <div
              className="border rounded-lg border-slate-300 m-1 flex flex-col w-44 h-52 p-1  bg-white desktop:drop-shadow "
              key={index}
            >
              <Link href={`/product/${t._id}`} className="relative">
                <GiCondorEmblem
                  size={24}
                  className="absolute top-1 left-1 text-slate-900"
                />
                <img className="w-full p-0" src={`${t.Image}`} alt={t.title} />
                <div className="flex justify-between p-1">
                  <span className="text-borderase text-red-600">
                    ราคาปกติ :
                    <span className="line-through text-sm">300-.</span>
                  </span>
                  <span>150-.</span>
                </div>
              </Link>
            </div>
          ))
        ) : (
          topics?.map((t, index) => (
            <div
              className="border rounded-lg border-slate-300 m-1 flex flex-col w-44 h-52 p-1   bg-white desktop:drop-shadow"
              key={index}
            >
              <Link href={`/product/${t._id}`} className="relative">
                <GiCondorEmblem
                  size={24}
                  className="absolute top-1 left-1 text-slate-900"
                />
                <img className="w-full p-0" src={`${t.Image}`} alt={t.title} />
                <div className="flex justify-between p-1">
                  <span className="text-borderase text-red-600">
                    ราคาปกติ :
                    <span className="line-through text-sm">300-.</span>
                  </span>
                  <span>150-.</span>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
