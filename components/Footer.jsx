import Address from "./conteners/Address";
import ContactUS from "./conteners/ContactUS";
import FullLinks from "./conteners/FullLinks";
import Location from "./conteners/Location";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-row flex-wrap justify-center bg-slate-900 text-white h-max  w-full p-5 h-max ">
        <Address />
        <ContactUS />
        <FullLinks />
        <Location />
      </footer>
    </>
  );
}
