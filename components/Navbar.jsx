import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white py-2 px-4 flex justify-between text-xl font-bold">
      <Link href={"/"}>GTcoding</Link>
      <Link
        className="bg-stone-50 py-1 px-2 text-zinc-600 rounded-lg shadow-2xl hover:bg-black hover:text-zinc-50 delay-10"
        href={"/addTopic"}
      >
        Add Topic
      </Link>
    </nav>
  );
}
