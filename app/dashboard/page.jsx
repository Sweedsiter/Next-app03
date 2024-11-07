import Link from "next/link";
import DShirts from "@/components/conteners/3DShirts";

export default function dashboard() {
  return (
    <div className=" w-full relative border p-3">
      <h1 className="p-2">dashboard</h1>
      <DShirts />
      <Link href="/" className=" p-2 ">
        <span className="p-1 border"> กลับหน้าเเรก</span>
      </Link>
    </div>
  );
}
