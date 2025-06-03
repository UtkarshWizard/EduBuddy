import AuthGuard from "@/components/AuthGuard";
import { CreateSpaceForm } from "@/components/CreateSpaceForm";
import Navbar from "@/components/Navbar";
import SpaceList from "@/components/SpaceList";

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
        <main className="w-full px-8 md:px-16 py-12">
          <h2 className="text-3xl font-bold text-center pb-8 text-purple-800">
            Create a Space
          </h2>
          <div className="flex items-center gap-2 w-full justify-center">
            <CreateSpaceForm />
          </div>
          <h2 className="text-3xl font-bold text-purple-800 text-center pt-8">
            Or <br />
            Join One
          </h2>
            <SpaceList />
        </main>
      </div>
    </AuthGuard>
  );
}
