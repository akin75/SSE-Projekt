'use client'

import { Alert } from "@mantine/core"
import { signIn } from "next-auth/react"
import { useState } from "react"

export const RegisterForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [error, setError] = useState<Error | null>(null)

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await fetch('api/register', {
                method: 'POST',
                body: JSON.stringify({
                    username, email, password
                }),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            if (res.ok) {
               signIn()
            } else {
                setError((await res.json()).error)
            }
        } catch (error: any) {
            setError(error.message)
            
        }

        console.log('Register!')
    }


    return (
        <div className="w-full max-w-xs">
            <form  onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input required value={username} onChange={(e) => setUsername(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                </div>
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
                <div className="flex items-center justify-between">
                    <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Register
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
        </div>
    )
}
