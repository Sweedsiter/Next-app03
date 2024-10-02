import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

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
        topics.map((t, index) => (
          <div
            className="p-4 border border-slate-300 m-2 flex justify-between grap-5 items-start"
            key={index}
          >
            <div>
              <h2 className="">{t.title}</h2>
              <div>{t.description}</div>
            </div>

            <div className="flex">
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))
      )}
    </>
  );
}
