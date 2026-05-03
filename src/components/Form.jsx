import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleName = (e) => {
    console.log(e);
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    console.log(e);
    setEmail(e.target.value);
  };
  const handleSubmit = () => {
    if (name && email) {
      setSubmittedData({ name: name, email: email });
      setName("");
      setEmail("");
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-700 p-8 rounded-2xl shadow-lg gap-3 w-80">
      <h1 className="text-2xl font-bold">FORM</h1>
      <input
        value={name}
        onChange={handleName}
        className="bg-gray-500 text-gray-200 rounded-lg p-2 w-full"
        type="text"
        placeholder="Name"
      />
      <input
        value={email}
        onChange={handleEmail}
        className="bg-gray-500 text-gray-200 rounded-lg p-2 w-full"
        type="email"
        placeholder="Email"
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 hover:bg-blue-600 py-2"
      >
        Submit
      </button>
      {submittedData && (
        <div className="mt-4 p-4 bg-gray-600 rounded-lg w-full border-l-4 border-blue-500">
          <p className="text-sm text-gray-300">Submitted Info:</p>
          <p className="font-bold">
            Name: <span className="text-yellow-300">{submittedData.name}</span>
          </p>
          <p className="font-bold">
            Email:{" "}
            <span className="text-yellow-300">{submittedData.email}</span>
          </p>
        </div>
      )}
    </div>
  );
}
