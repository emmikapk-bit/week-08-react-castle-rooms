export default function SecretRoom({ question }) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-gray-800 w-full">
      <h1 className="text-3xl">SecretRoom</h1>
      {question ? question : "waiting for a massege"}
    </div>
  );
}
