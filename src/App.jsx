import { useState } from "react";
import Castle from "./components/01_Castle";

export default function App() {
  //creating state veriables
  const [question, setQuestion] = useState("");

  const handleQuestion = (e) => {
    console.log(e);
    setQuestion(e.target.value);
  };

  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <p className="text-purple-300">Massege for JSD12:</p>
      <span className="text-yellow-300">
        {/*Question or waiting for a massege*/}
        {question ? question : "waiting for a massege"}
      </span>
      <textarea
        value={question}
        onChange={handleQuestion}
        className="bg-white text-black rounded px-2 py-1"
        placeholder="type your massege here..."
      />
      <p className="text-green-300">
        Reply from Secret Room :
        <span className="text-yellow-300">
          {/*answer or waiting For a reply*/}
        </span>
      </p>
      <Castle question={question} />
    </div>
  );
}
