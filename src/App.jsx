import { useContext } from "react";
import Castle from "./components/01_Castle";
import { MessageContext } from "./context/message-context/MessageContext";
import NavBar from "./components/NavBar";

export default function App() {
  const { question, handleQuestion, answer } = useContext(MessageContext);

  return (
    <>
      <NavBar />
      <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
        <h1 className="text-5xl">🚩 Learn React with Castle Rooms 🏰</h1>
        <p className="text-white text-5xl">Massege for JSD12:</p>
        <p className="text-purple-400 text-2xl">
          Message for the Secret Room 🐎 🥷 ✉️ :
        </p>
        <span className="text-yellow-300 text-2xl">
          {question ? question : "⏳ waiting for a massege..."}
        </span>
        <textarea
          value={question}
          onChange={handleQuestion}
          className="bg-white text-black rounded px-2 py-1"
          placeholder="type your massege here..."
        />
        <p className="text-green-300 text-2xl">Reply from Secret Room :</p>
        <span className="text-yellow-300  text-2xl">
          {answer ? answer : "⏳ waiting for a massege..."}
        </span>
        <Castle />
      </div>
    </>
  );
}
