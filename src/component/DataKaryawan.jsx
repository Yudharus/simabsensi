"use client"
import React, { useState } from 'react'

const DataKaryawan = ({ item, jabatan }) => {
    const [valueJabatan, setValueJabatan] = useState(0)

    const handleChangeJabatan = (e) => {
        setValueJabatan(parseInt(e.target.value))
    };
    return (
        <div className=''>
            <div className='w-4/5 bg-white p-4 mx-4 my-4 rounded-md shadow shadow-gray'>
                <div className='flex items-center justify-between'>
                    <p className='text-gray--dark5 font-bold text-md'>Nama</p>
                    <input className='ml-4 w-4/5 rounded-md border border-gray outline-none text-gray--dark5' />
                </div>
                <div className='flex items-center justify-between mt-4'>
                    <p className='text-gray--dark5 font-bold text-md'>Tempat & Tanggal Lahir</p>
                    <input className='ml-4 w-4/5 rounded-md border border-gray outline-none text-gray--dark5' />
                </div>
                <div className='flex items-center justify-between mt-4'>
                    <p className='text-gray--dark5 font-bold text-md'>Jenis Kelamin</p>
                    <input className='ml-4 w-4/5 rounded-md border border-gray outline-none text-gray--dark5' />
                </div>
                <div className='flex items-center justify-between mt-4'>
                    <p className='text-gray--dark5 font-bold text-md'>Agama</p>
                    <input className='ml-4 w-4/5 rounded-md border border-gray outline-none text-gray--dark5' />
                </div>
                <div className='flex items-center justify-between mt-4'>
                    <p className='text-gray--dark5 font-bold text-md'>Alamat</p>
                    <input className='ml-4 w-4/5 rounded-md border border-gray outline-none text-gray--dark5' />
                </div>
                <div className='flex items-center justify-between mt-4'>
                    <p className='text-gray--dark5 font-bold text-md'>Nomor Telepon</p>
                    <input className='ml-4 w-4/5 rounded-md border border-gray outline-none text-gray--dark5' />
                </div>
                <div className='flex items-center justify-between mt-4'>
                    <p className='text-gray--dark5 font-bold text-md'>Jabatan</p>
                    <select className='text-black border border-black' onChange={handleChangeJabatan}>
                        {
                            jabatan.map(v => {
                                return (
                                    <option value={v.id_jabatan} c>{v.nama_jabatan}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='flex items-center  mt-4'>
                    <div className='w-20 items-center justify-center flex rounded-md h-8 bg-blue--1 mr-12'>
                        <p>Simpan</p>
                    </div>
                    <div className='w-20 items-center justify-center flex rounded-md h-8 bg-accent--red'>
                        <p>Batal</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DataKaryawan