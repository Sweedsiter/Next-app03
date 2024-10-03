import ProductsList from "@/components/ProductsList";

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-wrap h-max">
        <ProductsList />
      </div>
    </>
  );
}
