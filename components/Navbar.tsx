import { useState } from "react";

export const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [switchToSignIn, setSwitchToSignIn] = useState(false);
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

        <h1 className="font-[IBM Plex Sans] text-[#2E2E2E] font-[500] text-[16px]">
          Create account.
          <span
            onClick={() => setShowPopup(true)}
            className="text-[#2F6CE5] cursor-pointer"
          >
            {" "}
            It’s free!
          </span>
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
      {/* popUp */}
      {showPopup && (
        <div className="w-screen h-screen bg-black/60 flex justify-end items-end md:justify-center md:items-center fixed  top-0 z-50 opacity-100 ">
          <div className="w-full h-[80%] md:w-[55%] md:h-[67%] bg-[#FFFFFF] rounded-lg relative">
            <div className="top bg-[#EFFFF4] hidden md:flex justify-center items-center p-2 rounded-lg">
              <p className="font-medium text-[14px] text-[#008A45]">
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </p>
            </div>

            <div className="flex   md:flex-row flex-col justify-center items-center md:justify-start md:items-start">
              {/* inputs and buttons */}
              <div className="md:flex-1 w-full  px-5 py-2 ">
                <h1 className="font-bold text-[24px]">
                  {switchToSignIn ? "Sign In" : "Create Account"}
                </h1>
                <div className="flex flex-col rounded bg-[#F7F8FA] md:mt-5 mt-9">
                  {!switchToSignIn && (
                    <div className="flex items-center ">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="bg-transparent border text-[#8A8A8A] font-medium text-[15px] p-3 outline-[#8A8A8A]"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="bg-transparent border text-[#8A8A8A] font-medium text-[15px] p-3 outline-[#8A8A8A]"
                      />
                    </div>
                  )}
                  <input
                    type="text"
                    placeholder="Email"
                    className="bg-transparent border text-[#8A8A8A] font-medium text-[15px] p-3 outline-[#8A8A8A]"
                  />
                  <input
                    type="text"
                    placeholder="Password"
                    className="bg-transparent border text-[#8A8A8A] font-medium text-[15px] p-3 outline-[#8A8A8A] w-full"
                  />
                  {!switchToSignIn && (
                    <input
                      type="text"
                      placeholder="Confirm Password"
                      className="bg-transparent border text-[#8A8A8A] font-medium text-[15px] p-3 outline-[#8A8A8A]"
                    />
                  )}
                </div>
                <div className=" w-full flex justify-between items-center mt-5">
                  <button className="text-[#FFFFFF] font-semibold text-[14px] bg-[#2F6CE5] w-[40%] md:w-full rounded-3xl py-2 ">
                    {switchToSignIn ? "Sign In" : "Create Account"}
                  </button>
                  <button
                    onClick={() => setSwitchToSignIn(!switchToSignIn)}
                    className="w-[25%] md:hidden text-[13px] font-normal underline decoration-slice py-2"
                  >
                    or, {!switchToSignIn ? "Sign In" : "Create Account"}
                  </button>
                </div>
                <div className="flex flex-col space-y-3 w-full mt-3">
                  <button className="flex justify-evenly items-center border-[#D9D9DB] border py-2 font-normal text-[14px]">
                    <img src="/facebook.png" alt="facebook_logo" />
                    Sign up with Facebook
                  </button>
                  <button className="flex justify-evenly items-center border-[#D9D9DB] border py-2 font-normal text-[14px]">
                    <img src="/search.png" alt="google_logo" />
                    Sign up with Google
                  </button>
                  {switchToSignIn && (
                    <button className="flex justify-evenly items-center   py-2 font-normal text-[14px]">
                      Forgot Password?
                    </button>
                  )}
                </div>
              </div>

              {/* illastration */}
              <div className="flex-1 py-4 px-5">
                <h2 className="text-[13px] font-medium  hidden md:flex justify-end items-end">
                  {switchToSignIn
                    ? "Don’t have an account yet? "
                    : "Already have a account"}{" "}
                  <span
                    onClick={() => setSwitchToSignIn(!switchToSignIn)}
                    className="text-[#2F6CE5] font-medium cursor-pointer"
                  >
                    {switchToSignIn ? "Create new for free!" : "Sign In"}
                  </span>
                </h2>
                <img
                  src="/createAccount.svg"
                  alt="illstration__img"
                  className="hidden md:inline"
                />

                {!switchToSignIn && (
                  <p className="font-normal text-[11px] text-center mt-5">
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </p>
                )}
              </div>
            </div>

            <span
              className="absolute md:-top-7 md:-right-2 top-3 right-12 cursor-pointer "
              onClick={() => {
                setShowPopup(false);
                setSwitchToSignIn(false);
              }}
            >
              <svg
                className="hidden md:inline"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0.333313C5.54838 0.333313 0.333374 5.54831 0.333374 12C0.333374 18.4516 5.54838 23.6666 12 23.6666C18.4517 23.6666 23.6667 18.4516 23.6667 12C23.6667 5.54831 18.4517 0.333313 12 0.333313ZM17.8334 16.1883L16.1884 17.8333L12 13.645L7.81171 17.8333L6.16671 16.1883L10.355 12L6.16671 7.81164L7.81171 6.16665L12 10.355L16.1884 6.16665L17.8334 7.81164L13.645 12L17.8334 16.1883Z"
                  fill="white"
                />
              </svg>
              <svg
                className=" md:hidden"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z"
                  fill="#212529"
                />
              </svg>
            </span>
          </div>
        </div>
      )}
    </>
  );
};
