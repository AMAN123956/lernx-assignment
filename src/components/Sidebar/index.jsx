import React from "react";
// import PropTypes from 'prop-types';
import { BiSolidDashboard, BiLogoGmail, BiChart, BiUser } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import MenuItem from "./util/menuItem";
const sidebarItems = [
  [
    {
      id: "0",
      title: "Home",
      notifications: false,
      icon: "BiSolidDashboard",
    },
    {
      id: "1",
      title: "Job Invites",
      notifications: false,
      icon: "BiLogoGmail",
    },
    {
      id: "2",
      title: "Analytics",
      notifications: 6,
      icon: "BiChart",
    },
    {
      id: "3",
      title: "Profile",
      notifications: false,
      icon: "BiUser",
    },
  ],
  [
    {
      id: "4",
      title: "Indonesia UI Designer",
      notifications: false,
      icon: "BsFillPeopleFill",
    },
    {
      id: "5",
      title: "Prototyping Club",
      notifications: false,
      icon: "BsFillPeopleFill",
    },
    {
      id: "6",
      title: "Web Designer Club",
      notifications: false,
      icon: "BsFillPeopleFill",
    },
  ],
];

const footerItems = ["About", "People", "Help", "Privacy", "Advertise", "More"];

const Sidebar = () => {
  const getIconComponent = (iconName) => {
    const classes = "mr-2 text-xl text-indigo-600";
    switch (iconName) {
      case "BiSolidDashboard":
        return <BiSolidDashboard className={classes} />;
      case "BiLogoGmail":
        return <BiLogoGmail className={classes} />;
      case "BiChart":
        return <BiChart className={classes} />;
      case "BiUser":
        return <BiUser className={classes} />;
      case "BsFillPeopleFill":
        return <BsFillPeopleFill className={classes} />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed top-0 left-0 w-64 h-screen border-2 border-gray shadow-2xl">
      <div className="h-16 border-b text-center flex items-center justify-center shadow">
        <h2 className="font-bold text-3xl">Sphere</h2>
      </div>
      <div className="flex-column p-3">
        {sidebarItems[0].map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            getIconComponent={getIconComponent}
          />
        ))}
        <hr className="mt-4" />
        <div className="mt-8 mb-0 text-left text-indigo-600 font-bold px-3 block sm:hidden xl:block">
          Communities Feed
        </div>
        {sidebarItems[1].map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            getIconComponent={getIconComponent}
          />
        ))}
      </div>
      <div className="flex flex-wrap w-full absolute bottom-1 items-center justify-center">
        {footerItems?.map((item, index) => {
          return (
            <span key={index} className="text-left text-gray-700 mx-1 pointer">
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
