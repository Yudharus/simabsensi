import React from 'react'

const JabatanComponent = () => {
    return (
        <div className='w-4/5 bg-white p-4 mx-4 my-4 rounded-md shadow shadow-gray'>
            <div className='flex items-center justify-between'>
                <p className='text-gray--dark5 font-bold text-md'>Jabatan</p>
                <input className='ml-4 w-4/5 rounded-md border border-gray outline-none text-gray--dark5' />
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
    )
}

export default JabatanComponent