import React, { useState } from "react";
import VoirPlus from "../button/voir";

export default function Article2({ isSection2Visible }: { isSection2Visible: boolean }) {
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(true);
  };

  return (  
    <article
      className={`
      
      bg-white border-2 rounded-t-lg border-slate-700 md:col-start-3 md:col-end-11 p-5 ${
        isSection2Visible ? "blur-sm transition-blur delay-500 duration-500" : "blur-none transition-blur delay-500 duration-500"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      <div className="">
        <h1 className="text-xl text-center">Objectif</h1>
        <p className="text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis impedit praesentium ad numquam! Quam libero obcaecati ab cum qui optio, recusandae cumque eius ipsa possimus maxime perspiciatis minus voluptatum corporis. . . .
         <VoirPlus isHovered={isHovered}/>
          </p>
      </div>
    </article>
  );
}
