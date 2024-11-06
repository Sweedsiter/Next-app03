import Link from "next/link";

export default function dashboard() {
  return (
    <div className="h-full w-full m-5 p-5">
      <h1 className="py-3">dashboard</h1>

      <Link href="/" className=" py-2">
        <span className="p-1 border"> กลับหน้าเเรก</span>
      </Link>
    </div>
  );
}
