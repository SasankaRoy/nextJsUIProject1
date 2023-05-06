import Image from "next/image";
// import { Inter } from 'next/font/google'
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Main } from "@/components/Main";
import { SideBar } from "@/components/SideBar";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-screen h-screen ">
        <Hero />
        <div className="max-w-6xl mx-auto py-5 px-0">
          {/* link div */}
          <div className="w-full flex justify-around items-center py-3 border-b-2 border-[#E0E0E0]">
            <div className=" w-[60%]">
              <ul className="md:flex hidden justify-start items-start space-x-5">
                {["All Posts(32)", "Article", "Events", "Education", "Job"].map(
                  (cur, id) => (
                    <li key={id} className="cursor-pointer ">
                      <a
                        className={`font-[IBM Plex Sans] capitalize ${
                          cur === "All Posts(32)"
                            ? "text-[#000000]"
                            : "text-[#8A8A8A]"
                        }  font-medium text-[16px] `}
                        href="#"
                      >
                        {cur}
                      </a>
                    </li>
                  )
                )}
              </ul>
              {/* for mobile */}
              <div className="flex justify-between items-center md:hidden">
                <h1>All Posts(32)</h1>
                <button className=" flex  items-center justify-center  text-[#000000] bg-[#EDEEF0] rounded px-3 py-2 font-medium text-[15px]">
                  Filter:All
                  <span className="ml-2">
                    <svg
                      width="10"
                      height="5"
                      viewBox="0 0 10 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.416626 0.166626L4.99996 4.74996L9.58329 0.166626H0.416626Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className=" justify-evenly items-center w-[30%] md:flex hidden">
              <button className=" flex  items-center justify-center  text-[#000000] bg-[#EDEEF0] rounded px-3 py-2 font-medium text-[15px]">
                Write a Post
                <span className="ml-2">
                  <svg
                    width="10"
                    height="5"
                    viewBox="0 0 10 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.416626 0.166626L4.99996 4.74996L9.58329 0.166626H0.416626Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </button>
              <button className="flex text-white items-center rounded px-3 py-2 justify-center  bg-[#2F6CE5] font-medium text-[15px]">
                <span className="mr-2">
                  <svg
                    width="22"
                    height="13"
                    viewBox="0 0 22 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.33333 5.16671H4.58333V2.41671H2.75V5.16671H0V7.00004H2.75V9.75004H4.58333V7.00004H7.33333V5.16671ZM16.5 6.08337C18.0217 6.08337 19.2408 4.85504 19.2408 3.33337C19.2408 1.81171 18.0217 0.583374 16.5 0.583374C16.2067 0.583374 15.9225 0.629207 15.6658 0.711707C16.1883 1.45421 16.4908 2.35254 16.4908 3.33337C16.4908 4.31421 16.1792 5.20337 15.6658 5.95504C15.9225 6.03754 16.2067 6.08337 16.5 6.08337ZM11.9167 6.08337C13.4383 6.08337 14.6575 4.85504 14.6575 3.33337C14.6575 1.81171 13.4383 0.583374 11.9167 0.583374C10.395 0.583374 9.16667 1.81171 9.16667 3.33337C9.16667 4.85504 10.395 6.08337 11.9167 6.08337ZM17.985 8.06337C18.7458 8.73254 19.25 9.58504 19.25 10.6667V12.5H22V10.6667C22 9.25504 19.8275 8.38421 17.985 8.06337ZM11.9167 7.91671C10.0833 7.91671 6.41667 8.83337 6.41667 10.6667V12.5H17.4167V10.6667C17.4167 8.83337 13.75 7.91671 11.9167 7.91671Z"
                      fill="white"
                    />
                  </svg>
                </span>
                Join Group
              </button>
            </div>
          </div>

          {/* content starts here */}

          <div className="w-full flex justify-around items-start py-3">
            <Main />
            <SideBar />
          </div>
        </div>
      </main>
    </>
  );
}

// <main
//   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
// >
//   <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//       Get started by editing&nbsp;
//       <code className="font-mono font-bold">pages/index.tsx</code>
//     </p>
//     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//       <a
//         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//         href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         By{' '}
//         <Image
//           src="/vercel.svg"
//           alt="Vercel Logo"
//           className="dark:invert"
//           width={100}
//           height={24}
//           priority
//         />
//       </a>
//     </div>
//   </div>

//   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
//     <Image
//       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//       src="/next.svg"
//       alt="Next.js Logo"
//       width={180}
//       height={37}
//       priority
//     />
//   </div>

//   <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
//     <a
//       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className={`mb-3 text-2xl font-semibold`}>
//         Docs{' '}
//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//         Find in-depth information about Next.js features and API.
//       </p>
//     </a>

//     <a
//       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className={`mb-3 text-2xl font-semibold`}>
//         Learn{' '}
//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//         Learn about Next.js in an interactive course with&nbsp;quizzes!
//       </p>
//     </a>

//     <a
//       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className={`mb-3 text-2xl font-semibold`}>
//         Templates{' '}
//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//         Discover and deploy boilerplate example Next.js&nbsp;projects.
//       </p>
//     </a>

//     <a
//       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className={`mb-3 text-2xl font-semibold`}>
//         Deploy{' '}
//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//         Instantly deploy your Next.js site to a shareable URL with Vercel.
//       </p>
//     </a>
//   </div>
// </main>
