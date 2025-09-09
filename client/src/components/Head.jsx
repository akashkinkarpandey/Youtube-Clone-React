import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    if (!searchQuery) return;
    try {
      const res = await fetch(
        `${VITE_BACKEND_URL}/api/search?q=${searchQuery}`
      );
      const json = await res.json();
      console.log("Suggestions:", json);
      setSuggestion(json[1]);
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };



  const toggleMenuHandeler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          src="https://www.flowmatters.com/wp-content/uploads/2022/09/Hamburger-menu-1024x512.png"
          alt="menu"
          className="h-8 cursor-pointer"
          onClick={() => toggleMenuHandeler()}
        ></img>
        <a href="/">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Symbol.png"
            alt="Mr.Youtube"
            className="h-10 mx-2"
          ></img>
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            className="w-1/2  border border-gray-400 p-2 rounded-l-full px-5"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          ></input>
          <button className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className="absolute bg-white px-2 py-2 w-[33rem] shadow-lg border border-gray-100 ">
            <ul>
              {suggestion?.map((suggest, index) => {
                return (
                  <li
                    className=" py-2 shadow-sm hover:bg-gray-100 px-3"
                    key={index}
                  >
                    🔍 {suggest}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
          className="h-8"
        ></img>
      </div>
    </div>
  );
};

export default Head;
