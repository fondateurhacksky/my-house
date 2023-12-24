'use client'
import { useState, useEffect } from "react";
import List from "../../components/Navbar/List";
import Logo from "../../components/Navbar/Logo";
import HorizontalMenu from "../../components/Navbar/toggle";
import FilterBar from "../../components/blog/filterBar";
import { FilterContext } from "../lib/context";
import AccountPage from "../../components/Navbar/login";

export default function NavBar() {
  const [horiVisible, setHoriVisible] = useState(false);
  const [state, setState] = useState('invisible')

  useEffect(() => {
    window.addEventListener("click", handleClickWindow);
    return () => {
      window.removeEventListener("click", handleClickWindow);
    };
  });

  function handleClickWindow(e: any){
    const width = window.innerWidth;
    if(horiVisible === true){
        setHoriVisible(false)
    }

  };



  return (
    <nav
      className={`flex justify-between bg-white shadow-lg border-b border-slate-500 z-50 w-full fixed sticky top-0`}
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
