import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="max-w-full mx-auto bg-purple-600 shadow-xl shadow-purple-600/50">
      <div className="flex justify-around items-center h-14 text-white">
        <Link href={"/"}>
          <h1 className="font-bold text-2xl">UrlShortener</h1>
        </Link>
        <div className="flex justify-evenly items-center gap-x-6">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/generate"}>Generate</Link>
          <div className="flex justify-around items-center gap-x-3">
            <Link href={"/generate"}>
              <button className="bg-blue-500 hover:bg-purple-500 shadow-lg shadow-blue-500/60 rounded py-0.5 px-2">
                Try Now
              </button>
            </Link>
            {/* <Link href={"/generate"}>
              <button className="bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/60 rounded py-0.5 px-2">
                GitHub
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
