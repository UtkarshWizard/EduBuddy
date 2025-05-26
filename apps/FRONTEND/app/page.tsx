import Navbar from "@/components/Navbar";
import SpaceCard from "@/components/SpaceCard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-gradient-to-r from-indigo-600 to-violet-600">
        <div className="p-16 flex justify-center items-center">
          <p className="font-bold text-4xl text-white ">Spaces</p>
        </div>
      </div>
      <main className="container px-8 md:px-16 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <SpaceCard />
        </div>
      </main>
    </div>
  );
}
