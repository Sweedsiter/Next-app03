

import ProductsList from "@/components/ProductsList";
import MenuList from "@/components/conteners/MenuList";

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

export default async function Home() {
  const { topics } = await getTopics();


  return (
    <>
      <div className="body ">
        <div className="L_detail border border-slate-300 flex flex-col">
          <MenuList topics={topics} />
        </div>

        <ProductsList topics={topics} />
      </div>
    </>
  );
}
