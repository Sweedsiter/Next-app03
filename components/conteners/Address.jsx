import { GiHawkEmblem } from "react-icons/gi";

export default function Address() {
  return (
    <div className="p-3 w-80 my-1 ">
      <h1 className="underline underline-offset-[6px] decoration-sky-500 text-2xl text-bold font-black">
        Address
      </h1>
      <h3 className="flex flex-row items-center pl-0 p-3 text-lg text-orange-300 font-medium">
        <GiHawkEmblem className="mr-2 text-3xl" />
        Dx-emb.com
      </h3>
      <span className="text-sm">
        ซอยเพชรเกษม 106 แขวงหนองค้างพลู เขตหนองแขม กรุงเทพมหานคร 10160 Nong
        <br />
        <br />
        Phet Kasem 106 Nong Khang Phlu, Nong Khaem, Bangkok Thailand 10160
      </span>
    </div>
  );
}
