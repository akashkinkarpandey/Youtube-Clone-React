import { useState } from "react";
import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeid } from "../utils/Helper";
const LiveChat = () => {
  const [liveUpdate, setLiveUpdate] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("in set");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeid(30) + "🚀",
        })
      );
    }, 1500);
    return () => clearInterval(timer);
  }, []);
  console.log("hello from live");
  return (
    <>
      <div className="ml-2 p-2 w-full h-[600px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((chat, i) => {
            return (
              <ChatMessage key={i} name={chat.name} message={chat.message} />
            );
          })}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Akash Pandeyji",
              message: liveUpdate,
            })
          );
          setLiveUpdate("");
        }}
      >
        <input
          type="text"
          className="w-96 px-3 m-4 border border-black"
          value={liveUpdate}
          onChange={(e) => {
            setLiveUpdate(e.target.value);
          }}
        ></input>
        <button className="px-2 bg-green-200 rounded-lg font-bold cursor-pointer">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
