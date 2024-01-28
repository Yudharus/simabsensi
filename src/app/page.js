"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { redirect, useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter()
    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")

    useEffect(() => {
        localStorage.clear();

    }, [])


    const login = async () => {
        try {
            // const router = useRouter()
            const response = await axios.post(
                `http://localhost:3000/api/login`,
                {
                    username: username,
                    password: pass
                },
            )

            if (response.data.login == true) {
                const user = response.data.user

                if (user.jabatan_id == 5) {
                    console.log("ini admin")
                    router.replace("/adminBeranda")
                } else {
                    // console.log("bukan admin")
                    router.replace("/userBeranda")
                    localStorage.setItem('karyawan_name', user.nama);
                    localStorage.setItem('id_karyawan', user.id_karyawan);
                }
            }
            // return response
        } catch (error) {
            console.log(error)
            return []
        }
    }

    return (
        <div className='flex items-center justify-center h-screen bg-gray'>
            <div className='w-1/2 h-1/2 bg-white rounded-md px-4 py-8'>
                <div className='h-12 w-full rounded-md border border-black items-center justify-center flex px-4'>
                    <input type='text' placeholder='username' className='w-full h-full outline-none text-black' value={username} onChange={v => setUsername(v.target.value)} />
                </div>
                <div className='h-12 w-full rounded-md border border-black items-center justify-center flex px-4 mt-8'>
                    <input type='text' placeholder='password' className='w-full h-full outline-none text-black' value={pass} onChange={v => setPass(v.target.value)} />
                </div>
                <div className='mt-8 w-full flex flex-row justify-evenly'>
                    <div className='w-40 h-14 rounded-md bg-yellow--primary flex items-center justify-center' onClick={login}>
                        <h1>Login Admin</h1>
                    </div>
                    <div className='w-40 h-14 rounded-md bg-blue--4 flex items-center justify-center' onClick={login}>
                        <h1>Login Karyawan</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page