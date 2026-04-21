import Gallery from "./07_Gallery";

export default function Corridor({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-blue-400 w-[90%]">
      <h1>Corridor</h1>
      {question ? question : "Waiting for a message..."}
      <Gallery
        question={question}
        answer={answer}
        handleAnswer={handleAnswer}
      />
    </div>
  );
}
