'use client'
import React, { useState, useEffect } from "react";
import List from "../../components/Navbar/List";
import Logo from "../../components/Navbar/Logo";
import HorizontalMenu from "../../components/Navbar/toggle";
import FilterBar from "../../components/blog/filterBar";
import { FilterContext } from "../lib/context";
import AccountPage from "../../components/Navbar/login";

export default function NavBar() {
  const [isNavVisible, setNavVisible] = useState(true);
  const [horiVisible, setHoriVisible] = useState(false);
  const [state, setState] = useState('invisible')

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickWindow);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickWindow);
    };
  });

  const handleScroll = () => {

    const scrollPosition = window.scrollY;

    if (scrollPosition > 10) {
      setNavVisible(false); // Cacher la barre de navigation
    } else {
      setNavVisible(true); // Afficher la barre de navigation
    }
  };

  function handleClickWindow(e: any){
    const width = window.innerWidth;
    if(horiVisible === true){
        setHoriVisible(false)
    }

  };



  return (
    <nav
      className={`flex justify-between bg-white shadow-lg border-b border-slate-500  z-50 fixed w-full ${
        isNavVisible ? "opacity-100 transition-opacity duration-500" : "opacity-0 transition-opacity duration-500"
      }`}
    >
       <FilterContext.Provider value={state}>
          <Logo setState={setState} />
          <FilterBar />
       </FilterContext.Provider>
       
      <List horiVisible={horiVisible} />
      <AccountPage />
      
      <HorizontalMenu horiVisible={horiVisible} setHoriVisible={setHoriVisible} />
    </nav>
  );
}
