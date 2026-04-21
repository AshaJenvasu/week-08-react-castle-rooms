export default function SecretRoom({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-gray-700 w-[90%]">
      <h1 className="font-bold text-4xl p-5">SecretRoom</h1>
      <p>
        <span> {question ? question : " ⏳ Waiting for a message..."}</span>
      </p>
      <p className="py-5">Reply to the outside 👨‍💻:</p>
      <textarea
        value={answer}
        onChange={handleAnswer}
        className="bg-white text-black rounded px-2 py-1"
        placeholder="Type your reply here..."
      />
      <p className="py-5">
        <span className="text-yellow-300">
          {answer ? answer : "⏳ Waiting for a message..."}
        </span>
      </p>
    </div>
  );
}
