import AuthGuard from "@/components/AuthGuard";
import Navbar from "@/components/Navbar";
import SpaceCard from "@/components/SpaceCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <AuthGuard>
      <div>
        <Navbar />
        <div className="w-full bg-gradient-to-r from-indigo-600 to-violet-600">
          <div className="p-16 flex justify-center items-center">
            <p className="font-bold text-4xl text-white ">Spaces</p>
          </div>
        </div>
        <main className="container px-8 md:px-16 py-12">
          <h2 className="text-3xl font-bold text-center pb-8 text-purple-800">
            Create a Space
          </h2>
          <div className="flex items-center gap-2 w-full justify-center">
            <Input
              className="border-black/40 bg-white/10 text-black placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
              placeholder="Enter the name of space"
            />
            <Input
              className="border-black/40 bg-white/10 text-black placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
              placeholder="Enter the Subject/Exam"
            />
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Create
            </Button>
          </div>
          <h2 className="text-3xl font-bold text-purple-800 text-center pt-8">
            Or <br />
            Join One
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            <SpaceCard />
          </div>
        </main>
      </div>
    </AuthGuard>
  );
}
