export default function NavBar({ setpage }) {
  return (
    <div className="flex justify-center items-center font-bold bg-black gap-4 w-full h-18  ">
      <button
        onClick={() => setpage("Home")} // 2. เมื่อคลิก ให้เซตค่าเป็น 'home'
        className="px-2 py-1 h-9  rounded-xl bg-gray-800 text-white hover:bg-yellow-300 hover:text-black"
      >
        Home
      </button>
      <button
      onClick={() }
      className="px-2 py-1 h-9 rounded-xl bg-gray-800 text-white hover:bg-yellow-300 hover:text-black">
        Castle Rooms
      </button>
      <button className="px-2 py-1 h-9 rounded-xl bg-gray-800 text-white hover:bg-yellow-300 hover:text-black">
        Counter
      </button>
      <button className="px-2 py-1 h-9 rounded-xl bg-gray-800 text-white hover:bg-yellow-300 hover:text-black">
        Toggle
      </button>
      <button className="px-2 py-1 h-9 rounded-xl bg-gray-800 text-white  hover:bg-yellow-300 hover:text-black">
        Form
      </button>
    </div>
  );
}
