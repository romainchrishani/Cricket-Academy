import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypingEffect = () => {
  const [texts] = useTypewriter({
    words: ["Our academy offers:","Youth Development Programs","Advanced Coaching","Team Tournaments","Fitness &amp; Conditioning","Mental Wellness"],
    loop: {},
    typeSpeed: 300,
    delaySpeed: 80,
  });
  return (
    <div className="text-white">
      <h2 className="md:text-6xl text-4xl font-bold">
        Western Cricket Academy
      </h2>
      <div className="md:text-3xl text-2xl font-semibold">
        <span>{texts}</span>
        <Cursor cursorStyle="." cursorColor="white" />
      </div>
      <p className="my-3">
        Welcome to Western Cricket Academy, where passion for cricket meets
        professional training! Located in the heart of London, Ontario, our
        academy is dedicated to nurturing young talent, enhancing skills, and
        promoting the love for cricket across all age groups.
      </p>
      <button className="btn bg-transparent border-2 border-custom-blue text-white px-5 transition-all hover:scale-95 hover:custom-blue hover:border-custom-blue">
        Learn More
      </button>
    </div>
  );
};

export default TypingEffect;
