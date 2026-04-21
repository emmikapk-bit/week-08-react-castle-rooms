import Chamber from "./03_Chamber";

export default function Tower({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-orange-500 w-[90%]">
      <h1 className="text-3xl">Tower</h1>
      {
        <Chamber
          question={question}
          answer={answer}
          handleAnswer={handleAnswer}
        />
      }
    </div>
  );
}
