'use client'
import React, { useState, useEffect } from "react";
import Article1 from "./articles/article1";
import Article2 from "./articles/article2";
import Article3 from "./articles/article3";

export default function Section2() {
  const [isSectionVisible, setSectionVisible] = useState(true);
  const [isSection2Visible, setSection2Visible] = useState(true);
  const [isSection3And4Visible, setSection3And4Visible] = useState(false);//test

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;

    if (scrollPosition > 200) {
      setSectionVisible(true);
      setSection2Visible(false);
    } else {
      setSectionVisible(false);
      setSection2Visible(true);
    }

    if (scrollPosition + clientHeight >= scrollHeight) {
      setSection3And4Visible(true);
    } else {
      setSection3And4Visible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`flex flex-col justify-evenly	 md:grid md:place-content-center h-screen md:gap-5 md:grid-cols-12 md:grid-rows-layout  ${
        isSectionVisible ? "opacity-100 transition-opacity duration-500" : "opacity-0 transition-opacity duration-500 invisible"
      }`}
    >
      <Article1 isSection2Visible={isSection2Visible} />
      <Article2 isSection3And4Visible={isSection3And4Visible}/>
      <Article3 isSection3And4Visible={isSection3And4Visible}/>
    </section>
  );
}
