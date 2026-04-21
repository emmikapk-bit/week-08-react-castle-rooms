import Chamber from "./03_Chamber";

export default function SecretRoom({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center pt-10 bg-gray-800 w-full">
      <h1 className="text-3xl">SecretRoom</h1>
      <p className="text-purple-400 text-2xl">Message from the outside ✉️ :</p>
      <span className="text-yellow-300 text-2xl">
        {question ? question : "⏳ waiting for a massege..."}
      </span>

      <h1 className="text-green-300 text-2xl">Reply to the outside 👨‍💻:</h1>
      <textarea
        value={answer}
        onChange={handleAnswer}
        className="bg-white text-black rounded px-2 py-1"
        placeholder="type your massege here..."
      />
      <p>
        <span className="text-yellow-300 text-2xl">
          {answer ? answer : "⏳  waiting for a massege..."}
        </span>
      </p>

      {/*<Chamber/>*/}
    </div>
  );
}
