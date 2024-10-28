import ProductsList from "@/components/ProductsList";
import MenuList from "@/components/conteners/MenuList";
import { group } from "console";

export default function Home() {
  return (
    <>
      <div className="body ">
        <div className="L_detail border border-slate-300 flex flex-col">
          <MenuList />
        </div>
        <ProductsList />
      </div>
    </>
  );
}
