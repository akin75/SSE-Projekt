import Link from "next/link";
import { RegisterForm } from "./form";

export default function RegisterPage() {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
            <div className="shadow-xl p-4 bg-white rounded-xl">
                <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary pb-5 text-indigo-700">
                    Register
                </h1>
                <RegisterForm></RegisterForm>
                <p className="text-center">
                    Have an account? <Link href="api/auth/signin" className="text-indigo-500 hover:underline">Sign in</Link>{' '}
                </p>
            </div>
        </div>
    )
}
