"use client";
import {
  FaLine,
  FaFacebookSquare,
  FaYoutube,
  FaMailBulk,
} from "react-icons/fa";
import Link from "next/link";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { GiHawkEmblem } from "react-icons/gi";

export default function ContactUS() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("สวัสดี\n" + "ขอบคุณที่ส่งข้อมูล");
    emailjs
      .sendForm("service_644dvfd", "template_jlxal34", form.current, {
        publicKey: "doJ5WM1xM3AmF3umY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="p-3 w-80 my-1 ">
      <h1 className="underline underline-offset-[6px] decoration-sky-500 text-2xl text-bold font-black ease-in duration-150 hover:text-orange-300">
        Contact US
      </h1>
      <h3 className="flex flex-row items-center pl-0 p-3 text-lg text-orange-300 font-medium">
        <GiHawkEmblem className="mr-2 text-3xl" />
        Dx-emb Contact
      </h3>
      <form className="mt-3 flex flex-col" ref={form} onSubmit={sendEmail}>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-1 text-sm text-black border"
          required
        />
        <textarea
          type="text"
          name="descaption"
          placeholder="Massege"
          className="p-1 mt-3 text-sm text-black border"
          required
        />
        <input
          type="submit"
          className="px-4 py-1 mt-3 w-fit border ease-in duration-150 hover:bg-orange-600 hover:text-white rounded-lg hover:border-none"
        />
      </form>

      <div className="py-5 flex flex-row ">
        <span className="pr-5 text-3xl ease-in duration-150 hover:text-orange-600 hover:text-4xl">
          <Link href={"https://line.me/ti/p/-yPHknooDV"} target="_blank">
            <FaLine />
          </Link>
        </span>
        <span className="pr-5 text-3xl ease-in duration-150 hover:text-orange-600 hover:text-4xl">
          <Link href={"https://www.facebook.com/DxEMB/"} target="_blank">
            <FaFacebookSquare />
          </Link>
        </span>
        <span className="pr-5 text-3xl ease-in duration-150 hover:text-orange-600 hover:text-4xl">
          <Link href={"https://www.youtube.com/@saitunlu"} target="_blank">
            <FaYoutube />
          </Link>
        </span>
        <span className="pr-5 text-3xl ease-in duration-150 hover:text-orange-600 hover:text-4xl">
          <Link href={"mailto:d27saitunlu@gmail.com"} target="_blank">
            <FaMailBulk />
          </Link>
        </span>
      </div>
    </div>
  );
}
