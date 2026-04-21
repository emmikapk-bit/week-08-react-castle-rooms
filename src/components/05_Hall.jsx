import Corridor from "./06_Corridor";

export default function Hall({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-green-600 w-[90%]">
      <h1 className="text-3xl">Hall</h1>
      {
        <Corridor
          question={question}
          answer={answer}
          handleAnswer={handleAnswer}
        />
      }
    </div>
  );
}
