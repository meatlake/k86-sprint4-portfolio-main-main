"use client";
import React from "react";
import Link from "next/link";

const BeginButton = () => {
  return (
    <Link
      className="mt-8 mx-6 px-2 lg:px-12 py-4 text-center bg-black rounded-lg text-2xl text-white font-semibold hover:text-black hover:bg-white transition-colors duration-200 ease-in-out"
      href="/question"
    >
      Kom achter jouw UX specialisme!
    </Link>
  );
};

export default BeginButton;
