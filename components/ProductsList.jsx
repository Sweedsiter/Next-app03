import Link from "next/link";
import { GiCondorEmblem } from "react-icons/gi";

const getTopics = async () => {
  try {
    const res = await fetch("https://46t6s8-3000.csb.app/api/topics", {
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

export default async function TopicsList() {
  const { topics } = await getTopics();
  return (
    <>
      {!topics ? (
        <span>Please wait...</span>
      ) : (
        topics?.map((t, index) => (
          <div
            className="border border-slate-300 m-2 flex justify-between flex-col items-center grap-5 items-start w-40"
            key={index}
          >
            <Link href={`/product/${t._id}`} className="relative">
              <GiCondorEmblem size={24} className="absolute top-1 left-1 text-white" />
              <img className="w-full p-0" src={`${t.Image}`} alt={t.title} />
              <span>Price</span>
            </Link>
          </div>
        ))
      )}
    </>
  );
}
