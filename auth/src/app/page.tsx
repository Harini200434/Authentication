import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-white bg-black">
      {session && (
        <>
          <p className="text-xl font-bold">Hello {session.user?.name}!</p>
          <img
            src={session.user?.image || ""}
            alt="profile"
            className="rounded-full w-64 h-64 border-4 mt-4"
          />
        </>
      )}
      <p className="mt-4">Home Page!</p>
    </main>
  );
}
