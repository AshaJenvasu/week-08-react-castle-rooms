import { useContext } from "react";
import MessageContext from "../contexts/messageContext/MessageContext.jsx";
import mangaCover from "../assets/manga-cover.jpg";

export default function Home() {
  const { setGameState } = useContext(MessageContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6 bg-gray-900/50 rounded-3xl border-2 border-yellow-600/30 backdrop-blur-sm">
      <h2 className="text-3xl font-bold mb-6 text-yellow-500">
        Welcome to Nanatsu no Taizai React Game
      </h2>

      <div className="group relative mb-8">
        <a
          href="https://www.mebmarket.com/ebook-16262-%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%95%E0%B8%B3%E0%B8%99%E0%B8%B2%E0%B8%99-7-%E0%B8%AD%E0%B8%B1%E0%B8%A8%E0%B8%A7%E0%B8%B4%E0%B8%99-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <img
            src={mangaCover}
            className="w-64 rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105 border-4 border-white/10"
            alt="Manga Cover"
          />
          <div className="mt-4 text-gray-300 italic hover:text-yellow-400 transition-colors">
            "If you enjoy this world, please support the original creator!"
          </div>
        </a>
      </div>

      <p className="max-w-md text-gray-400 mb-8">
        Experience the journey of Meliodas to save the princess. Are you ready
        to use your magic?
      </p>

      <button
        onClick={() => setGameState("playing")}
        className="bg-yellow-600 hover:bg-yellow-500 text-white font-black py-4 px-12 rounded-full text-xl shadow-[0_0_20px_rgba(202,138,4,0.4)] transition-all hover:tracking-widest"
      >
        START MISSION
      </button>
    </div>
  );
}
