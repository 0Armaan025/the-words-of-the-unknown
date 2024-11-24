"use client";
import React, { useEffect, useState } from "react";
import "./transparent-navbar.css";

type Props = {};

const TransparentNavbar = (props: Props) => {
  const [count, setCount] = useState(0);

  const handleClick = (e: any) => {
    e.preventDefault();
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (count == 3) {
      setCount(0);
      window.location.href = "/say";
    }
    const timer = setTimeout(() => setCount(0), 2000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-[95%] bg-white/20 cursor-pointer hover:bg-white/50 transition-all hover:scale-105 backdrop-blur-xl rounded-lg mx-8 my-2  border-2 border-gray-500 z-50"
        onClick={handleClick}
      >
        <div className="w-full m-1 p-1 flex flex-row justify-center items-center">
          <h2
            className="text-2xl font-semibold"
            style={{ fontFamily: "Delius, cursive" }}
          >
            The Words of the Unknown
          </h2>
        </div>
      </nav>
    </>
  );
};

export default TransparentNavbar;
