"use client";

import React from "react";

import { FaInstagram, FaFacebook, FaGithub, FaBehance } from "react-icons/fa";

//absolute bottom-0

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 flex w-full items-center justify-center grid-cols-2">
      <div className="flex flex-col flex-grow items-center">
        <p className="text-3xl font-bold text-center m-auto text-white ">
          Orientalize Store
        </p>
        <p className="text-sm font-medium text-white">
          © 2025 Lucas Oriental - All rights reserved
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-center text-white ml-8 flex-grow">
        <span className="text-lg font-semibold mb-2">Follow us on:</span>
        <div className="flex flex-col justify-start">
          <a
            className="flex gap-3 items-center"
            href="https://www.instagram.com/orientalize_oficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
            <span>@orientalize_oficial</span>
          </a>
          <a
            className="flex gap-3 items-center"
            href="https://www.facebook.com/orientalize_oficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
            <span>@orientalize_oficial</span>
          </a>
          <a
            className="flex gap-3 items-center"
            href="https://github.com/lucasoriental"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span>@lucasoriental</span>
          </a>
          <a
            className="flex gap-3 items-center"
            href="https://behance.net/lucasoriental"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance />
            <span>@lucasoriental</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
