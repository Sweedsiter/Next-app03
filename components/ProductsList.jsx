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
      <div className="flex flex-wrap w-full p-2 justify-center">
        {!topics ? (
          <span>Please wait...</span>
        ) : (
          topics?.map((t, index) => (
            <div
              className="border border-slate-300 m-1 flex flex-col w-44 h-52  "
              key={index}
            >
              <Link href={`/product/${t._id}`} className="relative">
                <GiCondorEmblem
                  size={24}
                  className="absolute top-1 left-1 text-white"
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
    </>
  );
}
