"use client";

import Link from "next/link";

export default function MenuList(props) {
  const { topics } = props;

  const Group = topics
    .map((e) => e.Group)
    .filter((e, i, a) => a.indexOf(e) === i);

  return (
    <div className="flex flex-wrap w-full p-2 flex-col cursor-default">
      <h1 className="text-xl duration-150 hover:text-orange-600 hover:text-2xl py-4 font-bold hover:bg-slate-100 hover:px-2">
        Groups
      </h1>
      {Group.map((e, index) => (
        <Link
          href={`/group/e`}
          key={index}
          className="flex w-full flex-row justify-between items-center duration-150 hover:bg-slate-100 py-1  hover:px-2 hover:text-lg hover:font-bold hover:text-orange-600"
        >
          <span>{e}</span>
          <span>Total {topics?.filter((f) => f.Group === e).length}</span>
        </Link>
      ))}

      <div className="flex flex-row justify-between items-center mt-8 duration-150 hover:text-lg hover:bg-slate-100 py-1 hover:px-2 hover:font-bold hover:text-orange-600">
        <span>All</span>
        <div className="Total">
          <span>Total {topics.length}</span>
        </div>
      </div>
    </div>
  );
}
