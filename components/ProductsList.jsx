"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";

const getProducts = async () => {
  try {
    const res = await fetch("https://46t6s8-3000.csb.app/api/products", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading Topic", error);
  }
};

export default async function ProductsList() {
  const [count, setCount] = useState(0);
  const router = useRouter();
  const { topic } = getProducts();
  console.log(topic);

  const handleSubmit = () => {
    router.push("/");
  };
  return (
    <div className="p-5">
      {topic ? <span>yes geted</span> : <span>No product</span>}
      <p>You clicked {count} asdsadsad</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleSubmit} className="px-2 text-red-600">
        Click me Fre
      </button>
      {!topic ? (
        <span>Please wait...</span>
      ) : (
        topic.map((t, index) => (
          <div
            className="p-4 border border-slate-300 m-2 flex justify-between grap-5 items-start"
            key={index}
          >
            <div>
              <h2 className="">{t.title}</h2>
              <div>{t.description}</div>
            </div>

            <div className="flex">
              <div className="cl-red px-2">
                <RemoveBtn id={t._id} />
              </div>
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
