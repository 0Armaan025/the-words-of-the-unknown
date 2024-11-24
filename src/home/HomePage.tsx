"use client";
import React from "react";
import "./homepage.css";
import TransparentNavbar from "@/components/transparent-navbar";
import MiddlePart from "./middle/MiddlePart";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <div className="flex flex-col ">
        <TransparentNavbar />
      </div>
      <MiddlePart />
    </>
  );
};

export default HomePage;
