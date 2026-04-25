import SecretRoom from "./09_SecretRoom";

export default function Nook() {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-violet-500 w-[90%]">
      <h1 className="text-3xl">Nook</h1>

      <SecretRoom />
    </div>
  );
}
