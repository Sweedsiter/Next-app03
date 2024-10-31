import ProductsList from "@/components/ProductsList";

const getTopics = async () => {
  try {
    const res = await fetch("https://7vgvmq-3001.csb.app/api/topics", {
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
        <ProductsList topics={topics} />
      </div>
    </>
  );
}
