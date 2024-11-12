"use client";
import Link from "next/link";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`https://w7nl2c-3000.csb.app/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function OneList({ params}) {
  const { id } = params;
  const { topic } = await getTopicById(id);

  return (
    <div className="w-full  desktop:m-3 p-3 flex flex-col justify-center">
      <div className="flex w-fit justify-center items-center desktop:flex-nowrap flex-wrap desktop:mx-56 ">
        <Link
          href={`${topic.Image}`}
          className="relative border "
          target="_blank"
        >
          <img src={`${topic.Image}`} alt={topic.title} />
        </Link>
        <Link
          href={`${topic.Image}`}
          className="desktop:ml-3 relative border"
          target="_blank"
        >
          <img src={`${topic.Image}`} alt={topic.title} />
        </Link>
      </div>

      <div className="border mt-3  desktop:mx-56 p-3 flex flex-col">
        <h1 className="pl-0 py-4 text-2xl font-extrabold duration-300 hover:text-orange-600 underline underline-offset-8">
          ข้อมูล-เกี่ยวกับ
        </h1>
        <br />
        <div className="text-lg duration-300 hover:text-orange-600 ">
          ชื่อ - {""}
          {topic.title}
        </div>
        <div className="text-lg duration-300 hover:text-orange-600 ">
          ข้อมูล - {""}
          {topic.description}
        </div>
        <br />
        <div className="text-lg duration-300 hover:text-orange-600 ">
          ราคา - {""}
          {topic.description}
        </div>
        <div className=" py-4">
          <div className="border px-2 py-1 w-fit">add</div>
        </div>
        <br />
        <Link href="/" className="border px-3 py-1 w-fit">
          กลับน้าแรก
        </Link>
      </div>
    </div>
  );
}
