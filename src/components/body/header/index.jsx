import { BiPencil } from "react-icons/bi";
const Header = () => {
  return (
    <div className="w-full relative rounded-b-md bg-indigo-500 h-44">
      <span className="absolute top-2.5 right-2.5 rounded-full bg-white p-1.5" >
        <BiPencil className="text-black pointer"/>
      </span>
    </div>
  );
};

export default Header;
