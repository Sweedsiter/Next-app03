import Link from "next/link";

export default function Groip({ params }) {
  const { id } = params;
  console.log(id);
  return (
    <div>
      <h1>Group {id}</h1>

      <Link href="/">กลับหน้าแรก</Link>
    </div>
  );
}
