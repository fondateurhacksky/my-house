import VoirPlus from "../button/voir";
import { useState } from "react";

export default function Articles2({ isSection3And4Visible }: { isSection3And4Visible: boolean }) {
  const blurTransitionClass = isSection3And4Visible
    ? "blur-none transition-blur delay-0 duration-700"
    : "blur-sm transition-blur delay-0 duration-700";

  const translateXTransitionClass = isSection3And4Visible
    ? "translate-x-[0] transition-transform duration-500 delay-0"
    : "translate-x-[-130%] transition-transform duration-500 delay-0";

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
         bg-white border-y-2 border-2 rounded-l-lg p-5 border-slate-700 md:col-start-2 md:col-end-7 
        ${blurTransitionClass} ${translateXTransitionClass}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <div className="">

            <h1 className="text-xl text-center">A propos de nous nous ?</h1>

            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Eos doloribus nesciunt dolor architecto, saepe aut magni et distinctio deserunt quaerat! Quo 
                <VoirPlus isHovered={isHovered}/>
            </p>
            </div>
        </article>
  )
}
