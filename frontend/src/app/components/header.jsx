"use client";

import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <p className="text-2xl font-bold">Orientalize</p>

      <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-lg w-[90%]"
      />
      {/* Aqui vai entrar o userMenu */}
    </header>
  );
};

export default Header;
