"use client"
import { AddAbsen, AddKeterangan } from '@/fetchings/AllData';
import moment from 'moment';
import React, { useState } from 'react'
import { redirect, useRouter } from 'next/navigation'


const page = () => {
    const router = useRouter()
    const [isAbsen, setIsAbsen] = useState(false)
    const [keterangan, setKeterangan] = useState("")
    const [alasan, setAlasan] = useState("")
    const [resultAbsen, setResultAbsen] = useState("")
    const [resultKeterangan, setResultKeterangan] = useState("")

    let user = localStorage.getItem('karyawan_name');
    let id_karyawan = localStorage.getItem('id_karyawan');
    const jam = moment().format('LT');

    const handleAbsen = async () => {
        const response = await AddAbsen(jam, id_karyawan)
        if (response.data.error == false) {
            setResultAbsen(response.data.msg)
        } else {
            setResultAbsen(response.data.msg)
        }
        console.log(response)
    }

    const handleKeterangan = async () => {
        const response = await AddKeterangan(id_karyawan, keterangan, alasan)
        if (response.data.error == false) {
            setResultKeterangan(response.data.msg)
        } else {
            setResultKeterangan(response.data.msg)
        }
        console.log(response)
    }


    return (
        <div className='flex h-screen bg-gray'>
            <div className='bg-white w-60 shadow shadow-black'>
                <div className='w-full h-14 bg-gray--semidark items-center justify-center flex border-r'>
                    <h1 className='text-gray--dark5 font-bold text-lg'>Karyawan</h1>
                </div>
                <div className='px-4 py-4'>
                    <h1 className='text-gray--dark5 font-bold text-md cursor-pointer' >Dashboard</h1>
                    <h1 className='text-gray--dark5 font-bold text-md cursor-pointer mt-4' onClick={() => router.replace('/')} >Logout</h1>
                </div>
            </div>
            {
                isAbsen == false ? (
                    <div className='w-full'>
                        <div className='w-4/5 bg-white p-4 mx-4 my-4 rounded-md shadow shadow-gray'>
                            <div className='flex items-center justify-between'>
                                <p className='text-gray--dark5 font-bold text-md'>Nama</p>
                                <div className='ml-4 w-4/5 rounded-md border border-gray outline-none text-gray--dark5 px-2'>
                                    <p>{user}</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-between mt-4'>
                                <p className='text-gray--dark5 font-bold text-md'>Waktu</p>
                                <div className='ml-4 w-4/5 rounded-md border border-gray outline-none text-gray--dark5 px-2'>
                                    <p>{jam}</p>
                                </div>
                            </div>
                            <div className='flex items-center  mt-4'>
                                <div className='w-20 items-center justify-center flex rounded-md h-8 bg-blue--1 mr-12 cursor-pointer' onClick={handleAbsen}>
                                    <p>Absen</p>
                                </div>
                            </div>
                            {resultAbsen !== "" ? <p className='text-accent--red mt-2'>{resultAbsen}</p> : null}
                        </div>
                        <div className='flex items-center ml-4  mt-4'>
                            <div className=' items-center justify-center flex rounded-md h-8 bg-yellow--primary mr-12 px-4 cursor-pointer' onClick={() => setIsAbsen(true)}>
                                <p className='text-black'>Klik tombol ini jika tidak hadir / absen</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='w-full'>
                        <h1 className='text-3xl ml-4 text-black mt-4'>Silahkan masukkan keterangan Anda, {user}</h1>
                        <div className='w-4/5 bg-white p-4 mx-4 my-4 rounded-md shadow shadow-gray'>
                            <div className='flex items-center justify-between'>
                                <p className='text-gray--dark5 font-bold text-md'>Nama</p>
                                <div className='ml-4 w-4/5 rounded-md border border-gray outline-none text-gray--dark5 px-2'>
                                    <p>{user}</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-between mt-4'>
                                <p className='text-gray--dark5 font-bold text-md'>Keterangan</p>
                                <input className='ml-4 w-4/5 rounded-md border border-gray outline-none text-gray--dark5' value={keterangan} onChange={v => setKeterangan(v.target.value)} />
                            </div>
                            <div className='flex items-center justify-between mt-4'>
                                <p className='text-gray--dark5 font-bold text-md'>Alasan</p>
                                <textarea className='ml-4 w-4/5 rounded-md border border-gray outline-none text-gray--dark5' value={alasan} onChange={v => setAlasan(v.target.value)} />
                            </div>
                            <div className='flex items-center justify-between mt-4'>
                                <p className='text-gray--dark5 font-bold text-md'>Waktu</p>
                                <div className='ml-4 w-4/5 rounded-md border border-gray outline-none text-gray--dark5 px-2'>
                                    <p>{jam}</p>
                                </div>
                            </div>
                            <div className='flex items-center  mt-4'>
                                <div className='w-fit px-4 items-center justify-center flex rounded-md h-8 bg-blue--1 mr-12 cursor-pointer' onClick={handleKeterangan}>
                                    <p>Beri Keterangan</p>
                                </div>
                                <div className='w-20 items-center justify-center flex rounded-md h-8 bg-accent--red mr-12 cursor-pointer' onClick={() => setIsAbsen(false)}>
                                    <p>Batal</p>
                                </div>
                            </div>
                            {resultKeterangan !== "" ? <p className='text-accent--red mt-2'>{resultKeterangan}</p> : null}
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default page