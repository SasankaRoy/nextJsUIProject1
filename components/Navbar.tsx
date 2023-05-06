import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav className="w-screen py-5  md:flex justify-around items-center hidden">
        {/* logo */}
        <div className="cursor-pointer">
          <img src="/logo.svg" alt="logo" />
        </div>
        {/* input */}
        <div className="bg-[#F2F2F2] input__div p-2 w-[25%] flex justify-center items-center space-x-2">
          <span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2083 10.8333H11.4842L11.2275 10.5858C12.1258 9.54083 12.6667 8.18417 12.6667 6.70833C12.6667 3.4175 9.99917 0.75 6.70833 0.75C3.4175 0.75 0.75 3.4175 0.75 6.70833C0.75 9.99917 3.4175 12.6667 6.70833 12.6667C8.18417 12.6667 9.54083 12.1258 10.5858 11.2275L10.8333 11.4842V12.2083L15.4167 16.7825L16.7825 15.4167L12.2083 10.8333ZM6.70833 10.8333C4.42583 10.8333 2.58333 8.99083 2.58333 6.70833C2.58333 4.42583 4.42583 2.58333 6.70833 2.58333C8.99083 2.58333 10.8333 4.42583 10.8333 6.70833C10.8333 8.99083 8.99083 10.8333 6.70833 10.8333Z"
                fill="#7A7A7A"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search for your favorite groups in ATG"
            className="bg-transparent font-[
          IBM Plex Sans] text-[#5C5C5C] flex-1  border-none outline-none font-[500] text-[14px]"
          />
        </div>

        {/* buttons */}

        <h1
          className="font-[
IBM Plex Sans] text-[#2E2E2E] font-[500] text-[16px]"
        >
          Create account.
          <span className="text-[#2F6CE5] cursor-pointer"> It’s free!</span>
        </h1>
      </nav>
      <div className="w-full bg-[#F8F9FA] flex justify-end items-center md:hidden py-3">
        <span>
          <svg
            width="51"
            height="10"
            viewBox="0 0 51 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="-0.00012207" width="10" height="10" fill="#868E96" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26 9.99988C28.7614 9.99988 31 7.7613 31 4.99988C31 2.23845 28.7614 -0.00012207 26 -0.00012207C23.2386 -0.00012207 21 2.23845 21 4.99988C21 7.7613 23.2386 9.99988 26 9.99988Z"
              fill="#868E96"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M39 -0.00012207H51L45 9.99988L39 -0.00012207Z"
              fill="#868E96"
            />
          </svg>
        </span>
      </div>
    </>
  );
};
