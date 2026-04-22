import Castle from "./components/01_Castle.jsx";
import { useState } from "react";
import meliodasImg from "./assets/meliodas.jpg";
import fullCounterVideo from "./assets/fullcounter.mp4";
import reunitedImg from "./assets/reunited.jpg";

// import SecretRoom from "./components/09_SecretRoom.jsx";
// import SimpleAsyncAwait from "./example/async/SimpleAsyncAwait.jsx";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function App() {
  const [inputText, setInputText] = useState("");
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  const [isSending, setIsSending] = useState(false);
  const [isRescued, setIsRescued] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const handleRescueAction = async () => {
    setIsPlayingVideo(true);
  };

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleAnswer = (e) => {
    console.log(e);
    setAnswer(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!inputText) return;

    setIsSending(true);

    await delay(3000);

    setQuestion(inputText);
    setIsSending(false);
    setInputText("");
  };

  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      {isPlayingVideo ? (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <video
            src={fullCounterVideo}
            autoPlay
            onEnded={() => {
              setIsPlayingVideo(false);
              setIsRescued(true);
            }}
            className="w-full max-w-4xl shadow-[0_0_50px_rgba(255,255,255,0.5)]"
          />
          <p className="absolute bottom-10 text-4xl font-black italic animate-pulse">
            "FULL COUNTER!!!!"
          </p>
        </div>
      ) : !isRescued ? (
        <>
          <h1 className="text-4xl md:text-5xl font-black text-yellow-500  mb-8 tracking-wider italic">
            Nanatsu no Taizai:{" "}
            <span className="text-white">Rescue Elizabeth</span>
          </h1>

          <div className="flex flex-col items-center gap-2 mb-4">
            <img
              src={meliodasImg}
              alt="Meliodas"
              className="w-65 h-65 rounded-full border-4 border-yellow-500 shadow-xl object-cover"
            />
            <p className="text-yellow-400 font-bold text-xl uppercase tracking-widest">
              Meliodas
            </p>
            <p className="text-purple-300 text-sm italic">
              "I'll definitely save you, Elizabeth!"
            </p>
          </div>

          <textarea
            value={inputText}
            onChange={handleInput}
            disabled={isSending}
            className="bg-white text-black rounded px-2 py-1"
            placeholder="Type your message here..."
          />

          <button
            onClick={handleSendMessage}
            disabled={isSending || !inputText}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-1 px-4 rounded "
          >
            {isSending ? "✨ Sending magic..." : "🗡️ Send"}
          </button>

          {answer?.toLowerCase().includes("help") && !isRescued && (
            <button
              onClick={handleRescueAction}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full mt-4 animate-bounce border-2 border-yellow-400 shadow-lg"
            >
              ⚔️ Go Rescue Elizabeth!
            </button>
          )}

          <p className="text-green-300 mt-4">Reply from Elizabeth:</p>

          <span className="text-white text-lg bg-gray-900 p-4 rounded min-w-[300px] text-center">
            {answer ? ` ${answer}` : " ⏳ Waiting for a reply..."}
          </span>

          <Castle
            question={question}
            answer={answer}
            handleAnswer={handleAnswer}
          />
        </>
      ) : (
        <div className="flex flex-col items-center animate-ready">
          <h2 className="text-4xl font-bold text-pink-400 mb-6">
            MISSION CLEAR!
          </h2>
          <img
            src={reunitedImg}
            className="w-80 rounded-lg shadow-2xl border-4 border-white"
          />
          <p className="text-2xl italic font-serif text-gray-200 mt-6">
            "I told you... I'd protect you."
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-full text-sm transition-colors"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
