import Castle from "./components/01_Castle.jsx";
import { useState } from "react";
import SecretRoom from "./components/09_SecretRoom.jsx";

export default function App() {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  const handleQuestion = (e) => {
    console.log(e);
    setQuestion(e.target.value);
  };

  const handleAnswer = (e) => {
    console.log(e);
    setAnswer(e.target.value);
  };

  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <p className="text-purple-300">Message for JSD12:</p>

      <span className="text-yellow-300">
        {question ? question : "⏳ Waiting for a message..."}
      </span>

      <textarea
        value={question}
        onChange={handleQuestion}
        className="bg-white text-black rounded px-2 py-1"
        placeholder="Type your message here..."
      />
      <p className="text-green-300">
        Reply from Secret Room:
        <span className="text-yellow-300">
          {answer ? answer : " ⏳ Waiting for a reply..."}
        </span>
      </p>
      <Castle question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}
