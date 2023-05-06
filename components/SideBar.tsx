import React from "react";

export const SideBar = () => {
  return (
    <div className="w-[30%] hidden md:inline">
      <div className="top flex justify-between items-center border-b-2 border-[#B8B8B8] px-2 py-1">
        <h1 className="flex justify-center items-center font-medium text-[16px] text-black">
          <span className="pr-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_842)">
                <path
                  d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z"
                  fill="black"
                />
                <path
                  d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_842">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          Noida, India
        </h1>
        <h3>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 12.375V15.5H3.625L12.8417 6.28334L9.71667 3.15834L0.5 12.375ZM15.2583 3.86667C15.5833 3.54167 15.5833 3.01667 15.2583 2.69167L13.3083 0.741675C12.9833 0.416675 12.4583 0.416675 12.1333 0.741675L10.6083 2.26667L13.7333 5.39167L15.2583 3.86667Z"
              fill="black"
            />
          </svg>
        </h3>
      </div>
      <div className="flex justify-start items-center mt-5 space-x-3">
        <span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.33337 9.00004H7.66671V10.3334H6.33337V9.00004ZM6.33337 3.66671H7.66671V7.66671H6.33337V3.66671ZM6.99337 0.333374C3.31337 0.333374 0.333374 3.32004 0.333374 7.00004C0.333374 10.68 3.31337 13.6667 6.99337 13.6667C10.68 13.6667 13.6667 10.68 13.6667 7.00004C13.6667 3.32004 10.68 0.333374 6.99337 0.333374ZM7.00004 12.3334C4.05337 12.3334 1.66671 9.94671 1.66671 7.00004C1.66671 4.05337 4.05337 1.66671 7.00004 1.66671C9.94671 1.66671 12.3334 4.05337 12.3334 7.00004C12.3334 9.94671 9.94671 12.3334 7.00004 12.3334Z"
              fill="black"
            />
          </svg>
        </span>
        <p className="font-normal text-[12px] text-[#000000]">
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>
    </div>
  );
};
