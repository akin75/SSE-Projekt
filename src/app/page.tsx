import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/buttons.components";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { User } from "./user";


export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <main style={{display: "flex", justifyContent: "center", alignItems:"center", height:"70vh"}}>
      <div className="w-screen h-screen">
        //TODO: FIX HOMEPAGE SCREEN - doesnt show Hello message and Username 
        <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary pb-5 text-indigo-700"> Hello <pre>{JSON.stringify(session?.user?.name)}</pre></h1>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
        <h2>Server Session</h2>
        <pre>{JSON.stringify(session)}</pre>
        <h2>Client Call</h2>
        <User />
      </div>
    </main>
  );
}
