import Castle from "./components/castle";

export default function App() {
  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <p className="text-purple-300">Massege for JSD12:</p>
      <span className="text-yellow-300">
        {/*Question or waiting for amassege*/}
      </span>
      <textarea
        value=""
        onChange=""
        className="bg-white text-black rounded px-2 py-1"
        placeholder="type your massege here..."
      />
      <p className="text-green-300">
        Reply from Secret Room :
        <span className="text-yellow-300">
          {/*answer or waiting For a reply*/}
        </span>
      </p>
      <Castle />
    </div>
  );
}
