'use client';
import { useState } from 'react'
import { IUSER } from '@/app/type/type';
import Link from 'next/link';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';


const signup = () => {

  const [user, setUser] = useState<IUSER>({ name: "", email: "", password: "" })
  const [isButtonDisable, setButtonDisable] = useState<boolean>(false)
  const router = useRouter()

  const onSign = async () => {
    try {
      setButtonDisable(true)
      await toast.promise(
        axios.post('/api/users/signup', user),
        {
          loading: 'Registering....',
          success: (response) => {
            if (response?.data?.success) {
              router.push('/users/login')
              return 'Registration successful';
            } else {
              setButtonDisable(false)
              throw new Error(response?.data?.message);
            }
          },
          error: (err) => err.message || 'An unexpected error occurred',
        }
      );
    } catch (err) {
      console.log("error");

    }
  };


  return (
    <div className="flex justify-center items-center h-screen">
      <Toaster
        position="top-left"
        reverseOrder={false}
      />
      <div className="bg-white p-6 rounded shadow-md">
        <h1 className="text-center text-2xl font-bold mb-4">Sign UP</h1>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="border border-gray-300 rounded px-2 py-1 w-full"
           
          />
        </div>

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
        <button onClick={onSign} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" disabled={isButtonDisable} style={{ opacity: isButtonDisable ? 0.5 : 1 }}>
          Register
        </button>
        <div className="p-4">
          <Link href='/users/login' className="text-xs">if you already have an account?</Link>
        </div>

      </div>
    </div>

  )
}

export default signup;