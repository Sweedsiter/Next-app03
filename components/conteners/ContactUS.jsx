"use client";
import { GiHawkEmblem } from "react-icons/gi";

export default function ContactUS() {
  return (
    <div className="p-3 w-80 my-1 ">
      <h1 className="underline underline-offset-[6px] decoration-sky-500 text-2xl text-bold font-black">
        Contact US
      </h1>

      <form className="mt-3 flex flex-col">
        <input type="email" placeholder="Your Email" className="p-1 text-sm " />
        <textarea
          type="text"
          placeholder="Massege"
          className="p-1 mt-3 text-sm"
        />
        <input type="submit" className="px-4 py-1 mt-3 w-fit border" />
      </form>
    </div>
  );
}
