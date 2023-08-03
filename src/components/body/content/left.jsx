import { BsPeople } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillDribbbleCircle,
} from "react-icons/ai";
import ToggleButton from "../../ui/toggleButton";
import DonutChart from "../../ui/chart";
const BodyLeft = () => {
  return (
    <div className="w-1/4 shadow-xl bg-white bg-white mt-[-50px] flex flex-col items-center justify-center">
      <img
        className="rounded-full z-10 w-40 h-40 p-1 bg-white"
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        loading="lazy"
        alt="Aman Dixit"
      />
      <p className="text-center text-purple-950 font-bold">Aman Dixit</p>
      <p className="text-center text-gray-300">Web Dev</p>
      <p className="text-xs flex items-center justify-center">
        <BsPeople className="inline-block text-purple-950 text-lg font-bold" />
        &nbsp; 21 followers 43 following
      </p>
      <div className="flex items-center justify-center p-1">
        <p className="text-xs antialiased text-purple-950 mt-1.5 font-bold mr-3">
          Make my profile visible to employers
        </p>
        <ToggleButton />
      </div>
      <p className="text-xs text-gray-300">
        Your profile and career goals will appear when employers searches
      </p>
      <br />
      <div className="w-full px-4">
        <p className="text-indigo-600 font-semibold relative text-left">
          Online Links{" "}
          <IoMdAdd className="absolute rounded-full bg-indigo-600 right-0 top-1 text-white" />
          <p className="text-xs text-gray-300">
            {" "}
            Add your online profile links to increase your portfolio strength
          </p>
        </p>
        <div className="bg-gray-100 p-2 my-2 flex items-center justify-center text-xl">
          <AiFillGithub className="rounded-full mx-1" />
          <AiFillLinkedin className="rounded-full mx-1" />
          <AiFillDribbbleCircle className="rounded-full mx-1" />
        </div>
      </div>
      <div
        className="border-2 bg-gray-50 border-gray w-10/12 p-3 mb-32 mt-10 rounded-2xl"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p className="text-purple-950 font-semibold">Wheel of opportunities</p>
        <DonutChart />
        <p className="">360 Sphere Rating</p>
      </div>
    </div>
  );
};

export default BodyLeft;
