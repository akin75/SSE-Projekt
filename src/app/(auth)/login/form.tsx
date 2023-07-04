'use client'

import { Alert } from "@/components/alert/index"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export const LoginForm = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    // TODO: LEAD USER TO HIS PAGE WITH NOTES
    const callbackUrl = searchParams.get('callbackUrl') || '/'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await signIn('credentials',{
                redirect: false,
                email,
                password,
                callbackUrl
            })
            if (!res?.error) {
                router.push(callbackUrl)
            } else {
                setError('Invalid email or password')
            }
        } catch (error: any) {}
        
    }


    return (
        <div className="w-full max-w-xs">
            <form  onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input required value={email} onChange={(e) => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="user@example.com" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input required value={password} onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter Password" />
                </div>
                {error && <Alert>{error}</Alert>}
                <div className="flex items-center justify-center">
                    <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded" type="submit">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    )
}