import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { GiCondorEmblem } from "react-icons/gi";

export default function Navbar() {
  return (
    <>
      <div className="sticky top-0 z-20">
        <nav className="bg-slate-900 text-white py-2 px-4 flex justify-between flex-wrap shadow-lg shadow-zinc-200  ">
          <Link
            href={"/"}
            className="text-xl font-bold  flex flex-row items-center"
          >
            <GiCondorEmblem className="mr-1 text-3xl" />
            <h1 className=" underline underline-offset-[6px] decoration-orange-500 ease-in duration-150 hover:text-orange-300">
              Dx-emb
            </h1>
          </Link>
          <div className="flex justify-between items-center flex-row">
            <input
              type="text"
              placeholder="ค้นหา"
              className="pl-2 rounded-lg text-gray-950 w-40 h-fit text-base"
            />
            <Link href={"/dashboard"} className="pl-5 text-3xl">
              <FaBars className="duration-300 hover:text-orange-600 hover:text-4xl" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
