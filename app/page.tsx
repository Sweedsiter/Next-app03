import ProductsList from "@/components/ProductsList";

export default function Home() {
  return (
    <>
      <div className="body ">
        <div className="L_detail border border-slate-300 flex flex-col">
          <div className="py-2">01</div>
          <div className="py-2">01</div>
          <div className="py-2">01</div>
        </div>
        <ProductsList />
      </div>
    </>
  );
}
