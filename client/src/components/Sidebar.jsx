import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen=useSelector(store => store.app.isMenuOpen);
  if(!isMenuOpen)return null;
  return (
    <div className="w-64 h-screen bg-white shadow-xl rounded-2xl p-6 flex flex-col space-y-6">
      {/* Navigation */}
      <div>
        <h2 className="text-gray-500 uppercase text-xs font-semibold mb-3">
          Menu
        </h2>
        <ul className="space-y-2">
          <li className="hover:bg-indigo-50 p-2 rounded-lg cursor-pointer text-gray-700 font-medium">
            🏠 Dashboard
          </li>
          <li className="hover:bg-indigo-50 p-2 rounded-lg cursor-pointer text-gray-700 font-medium">
            📑 Projects
          </li>
          <li className="hover:bg-indigo-50 p-2 rounded-lg cursor-pointer text-gray-700 font-medium">
            💬 Messages
          </li>
          <li className="hover:bg-indigo-50 p-2 rounded-lg cursor-pointer text-gray-700 font-medium">
            ⚙️ Settings
          </li>
        </ul>
      </div>

      {/* Your Section */}
      <div>
        <h2 className="text-gray-500 uppercase text-xs font-semibold mb-3">
          Your Stuff
        </h2>
        <ul className="space-y-2">
          <li className="hover:bg-pink-50 p-2 rounded-lg cursor-pointer text-gray-700 font-medium">
            ⭐ Favorites
          </li>
          <li className="hover:bg-pink-50 p-2 rounded-lg cursor-pointer text-gray-700 font-medium">
            📂 Collections
          </li>
          <li className="hover:bg-pink-50 p-2 rounded-lg cursor-pointer text-gray-700 font-medium">
            🕒 Recent
          </li>
        </ul>
      </div>

      {/* Subscription Section */}
      <div>
        <h2 className="text-gray-500 uppercase text-xs font-semibold mb-3">
          Explore
        </h2>
        <ul className="space-y-2">
          <li className="hover:bg-green-50 p-2 rounded-lg cursor-pointer text-gray-700 font-medium">
            🎵 Music
          </li>
          <li className="hover:bg-green-50 p-2 rounded-lg cursor-pointer text-gray-700 font-medium">
            🎮 Gaming
          </li>
          <li className="hover:bg-green-50 p-2 rounded-lg cursor-pointer text-gray-700 font-medium">
            🎬 Movies
          </li>
          <li className="hover:bg-green-50 p-2 rounded-lg cursor-pointer text-gray-700 font-medium">
            🏀 Sports
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <button className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-2 rounded-xl shadow-md hover:scale-[1.02] transition-transform font-semibold">
          Upgrade 🚀
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
