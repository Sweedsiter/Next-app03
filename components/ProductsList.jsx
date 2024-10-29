import Link from "next/link";
import { GiCondorEmblem } from "react-icons/gi";

export default function TopicsList({ topics }) {
  return (
    <>
      <div className="flex flex-wrap w-full p-2 justify-center">
        {!topics ? (
          <span>Please wait...</span>
        ) : (
          topics?.map((t, index) => (
            <div
              className="border border-slate-300 m-1 flex flex-col w-44 h-52  "
              key={index}
            >
              <Link href={`/product/${t._id}`} className="relative">
                <GiCondorEmblem
                  size={24}
                  className="absolute top-1 left-1 text-white"
                />
                <img className="w-full p-0" src={`${t.Image}`} alt={t.title} />
                <div className="flex justify-between p-1">
                  <span className="text-borderase text-red-600">
                    ราคาปกติ :
                    <span className="line-through text-sm">300-.</span>
                  </span>
                  <span>150-.</span>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </>
  );
}
