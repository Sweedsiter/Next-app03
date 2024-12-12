import Link from "next/link";
import DShirts from "@/components/conteners/3DShirts";

export default function dashboard() {
  return (
    <div className=" w-full flex flex-col items-center justify-center p-3 conteners">
      <h1 className="p-2">Sublimation Designs</h1>
      <DShirts />
      <Link href="/" className=" p-5 ">
        <span className="p-1 border"> กลับหน้าเเรก</span>
      </Link>
    </div>
  );
}
