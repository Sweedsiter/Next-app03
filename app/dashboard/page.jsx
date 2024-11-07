import Link from "next/link";

export default function dashboard() {
  return (
    <div className=" w-full relative border p-3">
      <h1 className="p-2">dashboard</h1>

      <Link href="/" className=" p-2 ">
        <span className="p-1 border"> กลับหน้าเเรก</span>
      </Link>

      <div className=" flex flex-col desktop:flex-row w-full items-center">
        <div className="desktop:p-3 p-2">
          <iframe
            title="T-Shirt"
            allow="autoplay;fullscreen;"
            width="400"
            height="400"
            src="https://sketchfab.com/models/a8e5fb89e3104f4fb61a222063afc8f7/embed"
          ></iframe>
        </div>

        <div className="desktop:p-3 p-2">
          <iframe
            title="Polo"
            allow="autoplay;fullscreen;"
            width="400"
            height="400"
            src="https://sketchfab.com/models/8bcc849495c34a96882420f3fd98329a/embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
