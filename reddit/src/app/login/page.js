'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password === '' || email === '') {
            toast.error("Fill all fields!")
            return
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long")
            return
        }

        try {
            const res = await signIn('credentials', { email, password, redirect: false })

            if (res?.error == null) {
                router.push("/")
            } else {
                toast.error("Error occured while logging")
            }
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
        <button>Log in</button>
        <Link  href='/register'>
            Don&apos;t have an account? <br /> Register now.
        </Link>
                </form>

    </div>
  )
}

export default Login