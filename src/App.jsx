import Castle from "./components/01_Castle.jsx";
import { useState } from "react";
import meliodasImg from "./assets/meliodas.jpg";
// import SecretRoom from "./components/09_SecretRoom.jsx";
// import SimpleAsyncAwait from "./example/async/SimpleAsyncAwait.jsx";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function App() {
  const [inputText, setInputText] = useState("");
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  const [isSending, setIsSending] = useState(false);

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
      <div className="flex flex-col items-center gap-2 mb-4">
        <img
          src={meliodasImg}
          alt="Meliodas"
          className="w-75 h-75 rounded-full border-4 border-purple-400 shadow-xl object-cover"
        />
        <p className="text-purple-300 font-semibold text-lg">
          Meliodas is calling:
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

      <p className="text-green-300 mt-4">Reply from Elizabeth:</p>
      <span className="text-white text-lg bg-gray-900 p-4 rounded min-w-[300px] text-center">
        {answer ? ` ${answer}` : " ⏳ Waiting for a reply..."}
      </span>

      <Castle question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}
