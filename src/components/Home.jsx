export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-800 w-full h-full">
      <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
      <p className="text-xl mb-5">
        This is the home page of our React application.
      </p>
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueGZ3bmZ3bmZ3bmZ3bmZ3bmZ3/3o7TKMGpxx660738P6/giphy.gif"
        alt="Castle"
        className="rounded-2xl shadow-2xl w-96"
      />
    </div>
  );
}
