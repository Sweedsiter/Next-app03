export default function DShirts() {
  return (
    <div className=" flex flex-col desktop:flex-row w-full items-center">
      <div className="border rounded-lg border-slate-300 m-1 flex flex-col w-200 h-200 p-1  bg-white desktop:drop-shadow duration-300 hover:p-0 ">
        <iframe
          title="T-Shirt"
          allow="autoplay;fullscreen;"
          width="400"
          height="400"
          src="https://sketchfab.com/models/a8e5fb89e3104f4fb61a222063afc8f7/embed"
        ></iframe>
      </div>

      <div className="border rounded-lg border-slate-300 m-1 flex flex-col w-200 h-200 p-1  bg-white desktop:drop-shadow duration-300 hover:p-0 ">
        <iframe
          title="Polo"
          allow="autoplay;fullscreen;"
          width="400"
          height="400"
          src="https://sketchfab.com/models/8bcc849495c34a96882420f3fd98329a/embed"
        ></iframe>
      </div>
    </div>
  );
}
