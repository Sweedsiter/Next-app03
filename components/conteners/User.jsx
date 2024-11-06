import Link from "next/link";
import { BsBasket3Fill } from "react-icons/bs";

export default function User() {
  const Basket = 9;
  return (
    <div>
      <Link href={"/api/topics"}>
        <h1 className="duration-150 hover:bg-slate-100 hover:pl-2 py-1 text-xl font-bold">
          User Status
        </h1>
        <div className="text-sm py-1">
          <div className="duration-150 hover:bg-slate-100 hover:pl-2 py-1">
            ชื่อ : exsample
          </div>
          <div className="duration-150 hover:bg-slate-100 hover:pl-2 py-1">
            เมล์ : exsample@mail.com
          </div>
        </div>
        <Link
          href={"/api/topics"}
          className="flex flex-row items-center justify-between text-sm py-1 duration-150 hover:bg-slate-100 hover:px-2 "
        >
          <div>ยอด : 300-.</div>
          <div className="relative p-2">
            <div className="absolute text-xs bg-red-600 text-white px-1 top-0 right-0 h-fit w-fit rounded-md">
              {Basket && Basket}
            </div>
            <BsBasket3Fill className="text-2xl " />
          </div>
        </Link>
      </Link>
      <div className="flex flex-row justify-between my-5">
        <Link
          href="/"
          className="text-indigo-700 underline-offset-8 underline duration-300 hover:text-red-600 hover:pl-1 hover:text-lg hover:font-bold"
        >
          Log-out
        </Link>
      </div>
    </div>
  );
}
