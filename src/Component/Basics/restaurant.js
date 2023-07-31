import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./menu.js";
import Navbar from "./Navbar.js";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),"All"
];

console.log(uniqueList);

const Restaurant = () => {
  //hooks
  const [MenuData, setMenuData] = useState(Menu);
  const [MenuList, setMenuList] = useState(uniqueList);

  const filterItems = (category) => {
    if(category==="All"){
      return setMenuData(Menu);
    }
    const updatedlist = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedlist);
  };

  return (
    <>
      <Navbar filterItems={filterItems} MenuList={MenuList} />
      <MenuCard menuData={MenuData} />
    </>
  );
};

export default Restaurant;
