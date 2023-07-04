import Link from "next/link";
import { LoginForm } from "./form";


export default function LoginPage() {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
            <div className="shadow-xl p-4 bg-white rounded-xl">
                <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary pb-5 text-green-700 text-center">
                    Login
                </h1>
                <LoginForm />
                <p className="text-center">
                    Need to create an Account?{' '}
                     <Link href="/register" className="text-green-500 hover:underline">Create Account</Link>{' '}
                </p>
            </div>
        </div>
    )
}
