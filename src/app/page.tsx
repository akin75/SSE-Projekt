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
      <div>
        <h1>Hello</h1>
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
