"use client";
import {
  FaLine,
  FaFacebookSquare,
  FaYoutube,
  FaMailBulk,
} from "react-icons/fa";
import { GiHawkEmblem } from "react-icons/gi";

export default function ContactUS() {
  return (
    <div className="p-3 w-80 my-1 ">
      <h1 className="underline underline-offset-[6px] decoration-sky-500 text-2xl text-bold font-black ease-in duration-150 hover:text-orange-300">
        Contact US
      </h1>
      <h3 className="flex flex-row items-center pl-0 p-3 text-lg text-orange-300 font-medium">
        <GiHawkEmblem className="mr-2 text-3xl" />
        Dx-emb Contact
      </h3>
      <form className="mt-3 flex flex-col">
        <input
          type="email"
          placeholder="Your Email"
          className="p-1 text-sm text-black"
        />
        <textarea
          type="text"
          placeholder="Massege"
          className="p-1 mt-3 text-sm text-black"
        />
        <input
          type="submit"
          className="px-4 py-1 mt-3 w-fit border ease-in duration-150 hover:bg-orange-300 hover:text-black rounded-lg hover:border-none"
        />
      </form>

      <div className="py-5 flex flex-row ">
        <span className="pr-5 text-3xl ease-in duration-150 hover:text-orange-300 hover:text-4xl">
          <FaLine />
        </span>
        <span className="pr-5 text-3xl ease-in duration-150 hover:text-orange-300 hover:text-4xl">
          <FaFacebookSquare />
        </span>
        <span className="pr-5 text-3xl ease-in duration-150 hover:text-orange-300 hover:text-4xl">
          <FaYoutube />
        </span>
        <span className="pr-5 text-3xl ease-in duration-150 hover:text-orange-300 hover:text-4xl">
          <FaMailBulk />
        </span>
      </div>
    </div>
  );
}
