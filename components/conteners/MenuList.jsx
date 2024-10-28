"use client";

const getTopics = async () => {
  try {
    const res = await fetch("https://gsql99-3000.csb.app/api/topics", {
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

export default async function MenuList() {
  const { topics } = await getTopics();
  const Group = topics
    .map((e) => e.Group)
    .filter((e, i, a) => a.indexOf(e) === i);

  return (
    <div className="flex flex-wrap w-full p-2 flex-col cursor-default">
      <h1 className="text-xl duration-150 hover:text-orange-600 hover:text-2xl py-4 font-bold hover:bg-slate-100 hover:px-2">
        Groups
      </h1>
      {Group.map((e, index) => (
        <div
          key={index}
          onClick={() => console.log(e)}
          className="flex w-full flex-row justify-between items-center duration-150 hover:bg-slate-100 py-1  hover:px-2 hover:text-lg hover:font-bold hover:text-orange-600"
        >
          <span>{e}</span>
          <span>Total {topics?.filter((f) => f.Group === e).length}</span>
        </div>
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
