import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="h-[10rem] bg-pink-500 flex flex-col justify-center">
      <h1 className="text-4xl text-white font-bold text-center pt-3 pb-2">
        Checkpoint : frontend
      </h1>
      <Link
        className="text-2xl text-white text-center font-semibold w-auto"
        to="/"
      >
        Countries
      </Link>
    </header>
  );
}
