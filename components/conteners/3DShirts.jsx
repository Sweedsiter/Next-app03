import Link from "next/link";
import { ModelViewer } from "@/components/conteners/3Dmodel";

export default function DShirts() {
  return (
    <div className=" flex flex-col desktop:flex-row w-full items-center ">
      {/* 3D Model  */}
      <ModelViewer />
      {/* 3D */}
      <div className="border rounded-lg border-slate-300 m-1 flex flex-col p-1  bg-white desktop:drop-shadow duration-300 hover:p-0 ">
        <iframe
          title="T-Shirt"
          allow="autoplay;fullscreen;"
          width="340"
          height="340"
          src="https://sketchfab.com/models/af05ae6eb5714366a4ee808f15a1b163/embed"
        ></iframe>
        <div className="p-2 w-full flex flex-row justify-between items-cenetr">
          <span>เสื้อคอกลม ไหล่สโลปแขนจ้ำ</span>
          <Link
            className="p-1 border"
            target="_blank"
            href={
              "https://sketchfab.com/models/af05ae6eb5714366a4ee808f15a1b163/embed"
            }
          >
            กดดูจอใหญ่
          </Link>
        </div>
      </div>
      <div className="border rounded-lg border-slate-300 m-1 flex flex-col p-1  bg-white desktop:drop-shadow duration-300 hover:p-0 ">
        <iframe
          title="T-Shirt"
          allow="autoplay;fullscreen;"
          width="340"
          height="340"
          src="https://sketchfab.com/models/a8e5fb89e3104f4fb61a222063afc8f7/embed"
        ></iframe>
        <div className="p-2 w-full flex flex-row justify-between items-cenetr">
          <span>เสื้อคอกลม ตัดต่อไหล่หน้า</span>
          <Link
            className="p-1 border"
            target="_blank"
            href={
              "https://sketchfab.com/models/a8e5fb89e3104f4fb61a222063afc8f7/embed"
            }
          >
            กดดูจอใหญ่
          </Link>
        </div>
      </div>
      <div className="border rounded-lg border-slate-300 m-1 flex flex-col p-1  bg-white desktop:drop-shadow duration-300 hover:p-0 ">
        <iframe
          title="Polo"
          allow="autoplay;fullscreen;"
          width="340"
          height="340"
          src="https://sketchfab.com/models/8bcc849495c34a96882420f3fd98329a/embed"
        ></iframe>
        <div className="p-2 w-full flex flex-row justify-between items-cenetr">
          <span>เสื้อโปโล กระดุม3เม็ด</span>
          <Link
            className="p-1 border"
            target="_blank"
            href={
              "https://sketchfab.com/models/8bcc849495c34a96882420f3fd98329a/embed"
            }
          >
            กดดูจอใหญ่
          </Link>
        </div>
      </div>
      <div className="border rounded-lg border-slate-300 m-1 flex flex-col p-1  bg-white desktop:drop-shadow duration-300 hover:p-0 ">
        <iframe
          title="T-Shirt"
          allow="autoplay;fullscreen;"
          width="340"
          height="340"
          src="https://sketchfab.com/models/cda7bb05a4724e71bff2490b3cc1d248/embed"
        ></iframe>
        <div className="p-2 w-full flex flex-row justify-between items-cenetr">
          <span>เสื้อคอกลม ธรรมดา</span>
          <Link
            className="p-1 border"
            target="_blank"
            href={
              "https://sketchfab.com/models/cda7bb05a4724e71bff2490b3cc1d248/embed"
            }
          >
            กดดูจอใหญ่
          </Link>
        </div>
      </div>
    </div>
  );
}
