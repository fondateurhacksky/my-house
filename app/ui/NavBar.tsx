'use client'
import { useState, useEffect } from "react";
import List from "@/app/components/Navbar/List";
import Logo from "@/app/components/Navbar/Logo";
import HorizontalMenu from "@/app/components/Navbar/toggle";
import LogBtn from "@/app/components/Navbar/login";

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
      className={`flex justify-between bg-white shadow-lg border-b border-slate-500 z-50 w-full h-[60px]`}
    //  le navbar contient trois element : le logo, le menu, les bouton login/sign
    >
        {/* <div className="relative"> */}
       {/* <FilterContext.Provider value={state}> */}
          <Logo setState={setState} />
          {/* <FilterBar /> */}
          {/* placeholder de bare qui devrais servie de flitrage a revoire non seulement pour ca position mais aussi pour le design */}
       {/* </FilterContext.Provider> */}
       {/* </div> */}

       
      <List horiVisible={horiVisible} />
      <LogBtn />      
      <HorizontalMenu horiVisible={horiVisible} setHoriVisible={setHoriVisible} />
      {/* permet de mettre le menu en horizontale pour ecran de petite taille  */}
    </nav>
  );
}
