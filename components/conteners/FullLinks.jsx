import { GiHawkEmblem } from "react-icons/gi";
import {
  FaLine,
  FaFacebookSquare,
  FaYoutube,
  FaMailBulk,
} from "react-icons/fa";

export default function FullLinks() {
  return (
    <div className="p-3 w-80 my-1 ">
      <h1 className="underline underline-offset-[6px] decoration-sky-500 text-2xl text-bold font-black ease-in duration-150 hover:text-orange-300">
        UseFull Links
      </h1>
      <h3 className="flex flex-row items-center pl-0 p-3 text-lg text-orange-300 font-medium">
        <GiHawkEmblem className="mr-2 text-3xl" />
        Dx-emb Links
      </h3>
      <div className="py-5 flex flex-col ">
        <span className="pb-5  ease-in duration-150 hover:text-orange-300 hover:text-xl flex felx-row items-center">
          <FaLine className="text-2xl" />
          <span className="text-sm pl-3"> Line ID : Sweedsiter</span>
        </span>
        <span className="pb-5 ease-in duration-150 hover:text-orange-300 hover:text-xl flex felx-row items-center">
          <FaFacebookSquare className="text-2xl" />
          <span className="text-sm pl-3">www.facebook.com/DxEMB</span>
        </span>
        <span className="pb-5 ease-in duration-150 hover:text-orange-300 hover:text-xl flex felx-row items-center">
          <FaYoutube className="text-2xl" />
          <span className="text-sm pl-3">www.youtube.com/@saitunlu</span>
        </span>
        <span className="pb-5 ease-in duration-150 hover:text-orange-300 hover:text-xl flex felx-row items-center">
          <FaMailBulk className="text-2xl" />
          <span className="text-sm pl-3">D27saitunlu@gmaul.com</span>
        </span>
      </div>
    </div>
  );
}
