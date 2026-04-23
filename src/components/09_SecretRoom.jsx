import { useContext } from "react";
import elizabethImg from "../assets/elizabeth.jpg";
import MessageContext from "../contexts/messageContext/MessageContext.jsx";

export default function SecretRoom() {
  const { question, handleTypeReply, isTyping, replyText } =
    useContext(MessageContext);

  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-gray-700 w-[90%] pb-10 rounded-lg shadow-2xl border-2 border-pink-500/30">
      <div className="flex flex-col items-center mb-6">
        <img
          src={elizabethImg}
          alt="Elizabeth"
          className="w-32 h-32 rounded-full border-4 border-pink-400 shadow-[0_0_20px_rgba(244,114,182,0.5)] object-cover animate-pulse"
        />
        <h2 className="font-bold text-3xl mt-4 text-pink-300 tracking-wide">
          Elizabeth Liones
        </h2>
        <p className="text-gray-400 text-sm">Third Princess of Liones</p>
      </div>

      <p className="text-white text-lg bg-gray-900 p-4 rounded min-w-[300px] text-center">
        Message:
        <span className="text-yellow-300 ml-2">
          {question ? question : "⏳ Waiting for a message..."}
        </span>
      </p>

      <p className="py-5 text-purple-300">Reply to Meliodas:</p>

      <textarea
        value={replyText}
        onChange={handleTypeReply}
        className="bg-white text-black rounded px-2 py-1 w-64"
        placeholder="Type your reply here..."
      />

      <div className="h-6 mt-4">
        {isTyping && (
          <span className="text-blue-300 animate-pulse">
            ✨ Gathering magic to reply...
          </span>
        )}
      </div>
    </div>
  );
}
