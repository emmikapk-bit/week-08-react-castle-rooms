import Tower from "./02_Tower";

export default function Castle() {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-red-500 w-full">
      <h1 className="text-3xl">Castle</h1>
      <Tower />
    </div>
  );
}
