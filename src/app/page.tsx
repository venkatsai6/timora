import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-400 to-sky-900 min-h-screen">
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-center">
          Welcome to <span className="text-blue-300">TIMORA</span>
        </h1>
      </div>
    </div>
  );
}
