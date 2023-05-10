import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className="w-screen relative h-[60%] ">
      <Image
        src="/heroBg.png"
        fill
        className="object-cover object-center -z-10"
        priority
        alt="heroBg"
      />

      <div className="w-auto flex flex-col  items-center  z-40 opacity-100  absolute md:bottom-16 md:left-40 bottom-9 left-6">
        <h1 className="text-white capitalize text-[36px] font-[IBM Plex Sans] font-bold">
          Computer Engineering
        </h1>
        <p className="text-white capitalize self-start text-[18px] font-normal font-[IBM Plex Sans]">
          142,765 Computer Engineers follow this
        </p>
      </div>
      <div className="bg-black w-full h-full opacity-30" />
    </div>
  );
};
