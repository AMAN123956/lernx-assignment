import { BiPencil } from "react-icons/bi";
import { PiSuitcaseSimple } from "react-icons/pi";
import { AiOutlinePlus } from "react-icons/ai";

const aboutSectionData = [
  {
    title: "Experience",
    desc: "Implemented the Bookmark Timestamp Feature in Live Classes, which enables students to bookmark videos at a specific timestamp and revisit the video in recorded classes—leveraged indexed db for data storage to ensure efficient and reliable performance.",
    location: "Ahemdabad,India",
    name: "Crisis Internation School",
    date: "January 2023 - Present",
  },
  {
    title: "Education",
    desc: "In this course I explored both frontend and backend concepts like Bootstrap,NodeJs,Express,MongoDB,Security and Authentication through NodeJs and last but not least I also got to learn about React",
    location: "New Delhi,India",
    name: "Crisis Internation School",
    date: "April 2020 - Present",
  },
];
const About = () => {
  return (
    <div className="flex-column items-center justify-center p-2">
      <div className="relative">
        <p className="text-gray-700 text-left py-5 px-4 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id quam
          nulla. Sed posuere, tortor eu hendrerit pulvinar, mauris est laoreet
          magna, vel finibus massa erat at metus. Nulla et varius tortor. Nulla
          facilisi. Proin vitae massa enim. Sed a mi nisl. Praesent euismod
          semper ligula ut finibus
        </p>
        <BiPencil className="text-black pointer absolute right-0 top-0 bg-indigo-700 rounded-full p-1 text-white text-xl" />
      </div>
      <hr />
      {/* Experience Sectiom */}
      {aboutSectionData?.map((item, index) => {
        return (
          <>
            <div className="relative py-2 px-4 my-2" key={index}>
              <h3 className="text-left">{item?.title}</h3>
              <div className="flex mt-5">
                <PiSuitcaseSimple className="text-indigo-600 pointer bg-indigo-100 rounded-full p-1.5 text-5xl" />
                <div className="flex-column mx-2 w-11/12">
                  <p className="text-left text-sm mb-4"> 
                    {item?.name} <br />{" "}
                    <span className="text-gray-400">{item?.date}</span> <br />
                    <span className="text-gray-300">{item?.location}</span>
                  </p>
                  <p className="text-left my-2">{item?.desc}</p>
                </div>
              </div>
              <BiPencil className="text-black pointer absolute right-0 top-5 bg-indigo-700 rounded-full p-1 text-white text-xl" />
              <AiOutlinePlus className="text-black pointer absolute right-7 top-5 bg-indigo-700 rounded-full p-1 text-white text-xl" />
            </div>
            {index === 0 ? <hr /> : null}
          </>
        );
      })}
    </div>
  );
};

export default About;
