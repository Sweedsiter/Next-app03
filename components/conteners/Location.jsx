import { GiHawkEmblem } from "react-icons/gi";

export default function Location() {
  return (
    <div className="p-3 w-80 my-1 ">
      <h1 className="underline underline-offset-[6px] decoration-sky-500 text-2xl text-bold font-black ease-in duration-150 hover:text-orange-300">
        Location
      </h1>
      <h3 className="flex flex-row items-center pl-0 p-3 text-lg text-orange-300 font-medium">
        <GiHawkEmblem className="mr-2 text-3xl" />
        Dx-emb map
      </h3>
      <div className="Over">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d969.0324836530473!2d100.35417006959997!3d13.710579302058052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29608d64ae187%3A0x19c27861ea1e9c7c!2zMS0xMSDguIvguK3guKIg4LmA4Lie4LiK4Lij4LmA4LiB4Lip4LihIDEwNiDguYHguILguKfguIfguKvguJnguK3guIfguITguYnguLLguIfguJ7guKXguLkg4LmA4LiC4LiV4Lir4LiZ4Lit4LiH4LmB4LiC4LihIOC4geC4o-C4uOC4h-C5gOC4l-C4nuC4oeC4q-C4suC4meC4hOC4oyAxMDE2MA!5e0!3m2!1sth!2sth!4v1708673608017!5m2!1sth!2sth"
        ></iframe>
      </div>
    </div>
  );
}
