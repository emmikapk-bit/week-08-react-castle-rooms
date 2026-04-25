import Hall from "./05_Hall";

export default function Room() {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-emerald-500 w-[90%]">
      <h1 className="text-3xl">Room</h1>
      <Hall />
    </div>
  );
}
