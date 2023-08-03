import { useState, useCallback } from "react";
import About from "./rightUtil/about";
import Skill from "./rightUtil/skill";
import Post from "./rightUtil/post";
import Space from "./rightUtil/space";
const menuItems = [
  { title: "About", id: 0 },
  { title: "Skill and Certificates", id: 1 },
  { title: "Posts", id: 2 },
  { title: "Spaces", id: 3 },
];
const BodyRight = () => {
  const [active, updateActive] = useState(0);
  const handleToggleBtnClick = useCallback(
    (ev) => {
      const currentIndex = ev?.currentTarget?.dataset?.idx;
      if (currentIndex === active) return;
      else updateActive(Number(currentIndex));
    },
    [active]
  );

  const findItem = useCallback(() => {
    if (active === 0) return <About />;
    else if (active === 1) return <Skill />;
    else if (active === 2) return <Post />;
    else if (active === 3) return <Space />;
    else return null;
  }, [active]);

  return (
    <div className="w-8/12 border-2 bg-white bg-white shadow-xl ml-9 mt-2">
      <div className="shadow flex items-end justify-between h-12">
        {menuItems?.map((item, index) => {
          return (
            <p
              key={item?.id}
              data-idx={index}
              onClick={handleToggleBtnClick}
              className={`text-gray-700 pointer border-b-4 p-1 font-semibold px-4 ${
                index === active
                  ? "border-indigo-700 font-bold"
                  : "border-white"
              }`}
            >
              {item?.title}
            </p>
          );
        })}
      </div>
      <div>{findItem()}</div>
    </div>
  );
};
export default BodyRight;
