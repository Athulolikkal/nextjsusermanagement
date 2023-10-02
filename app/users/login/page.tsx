'use client';
import { useState } from 'react'
import { IUSER } from '@/app/type/type';
import Link from 'next/link';
import axios from "axios"


const login = () => {
  const [user, setUser] = useState<IUSER>({ email: "", password: "" })

  const onLogin = async () => {
    try {
      const response = await axios.post('/api/users/login', user)
      console.log(response);
    } catch (err:any) {
      console.log(err.message);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded shadow-md">
        <h1 className="text-center text-2xl font-bold mb-4">Login</h1>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="border border-gray-300 rounded px-2 py-1 w-full"

          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>
        <button onClick={onLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          Login now
        </button>
        <div className="p-4">
          <Link href='/users/signup' className="text-xs">if you don't have an account?</Link>
        </div>

      </div>
    </div>

  )
}

export default login