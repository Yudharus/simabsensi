
"use client"
import Image from 'next/image'
import BerandaComponent from '@/component/BerandaComponent'
import SideBar from '@/component/SideBar'
import DataKaryawan from '@/component/DataKaryawan'
import { useEffect, useState } from 'react'
import { AbsenData, AddJabatan, AddKaryawan, HapusAbsen, HapusJabatan, HapusKaryawan, HapusKeterangan, JabatanData, KaryawanData, KeteranganData } from '@/fetchings/AllData'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import JabatanComponent from '@/component/JabatanComponent'
import { redirect, useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter()
  const [menu, setMenu] = useState("beranda")
  const [karyawan, setKaryawan] = useState([])
  const [jabatan, setJabatan] = useState([])
  const [absen, setAbsen] = useState([])
  const [keterangan, setKeterangan] = useState([])



  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [nama, setNama] = useState("")
  const [ttl, setTtl] = useState("")
  const [jenkel, setJenkel] = useState("")
  const [agama, setAgama] = useState("")
  const [alamat, setAlamat] = useState("")
  const [noTel, setNoTel] = useState("")
  const [valueJabatan, setValueJabatan] = useState(0)
  const [valueTambahJabatan, setValueTambahJabatan] = useState("")

  const [isTambahKaryawan, setIsTambahKaryawan] = useState(false)



  useEffect(() => {
    const initData = async () => {
      try {
        const getKaryawan = await KaryawanData()
        const getJabatan = await JabatanData()
        const getAbsen = await AbsenData()
        const getKeterangan = await KeteranganData()

        setKaryawan(getKaryawan)
        setJabatan(getJabatan)
        setAbsen(getAbsen)
        setKeterangan(getKeterangan)
      } catch (error) {
        console.log(error)
        setKaryawan([])
        setJabatan([])
        setAbsen([])
        setKeterangan([])
      }
    }
    initData()
  }, [])

  const handleChangeJabatan = (e) => {
    setValueJabatan(e.target.value)
  };

  const handleAddKaryawan = async () => {
    try {

      const response = await AddKaryawan(username, password, nama, ttl, jenkel, agama, alamat, noTel, valueJabatan)
      location.reload()
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const handleHapusKaryawan = async (id) => {
    try {

      const response = await HapusKaryawan(id)
      location.reload()

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddJabatan = async (id) => {
    try {

      const response = await AddJabatan(valueTambahJabatan)
      location.reload()

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const handleHapusJabatan = async (id) => {
    try {

      const response = await HapusJabatan(id)
      location.reload()

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const handleHapusAbsen = async (id) => {
    try {

      const response = await HapusAbsen(id)
      location.reload()

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const handleHapusKeterangan = async (id) => {
    try {

      const response = await HapusKeterangan(id)
      location.reload()
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }





  return (
    <div className='flex h-screen bg-gray'>
      <div className='bg-white w-60 shadow shadow-black'>
        <div className='w-full h-14 bg-gray--semidark items-center justify-center flex border-r'>
          <h1 className='text-gray--dark5 font-bold text-lg'>Admin</h1>
        </div>
        <div className='px-4 py-4'>
          <h1 className='text-gray--dark5 font-bold text-md cursor-pointer' onClick={() => setMenu("beranda")}>Beranda</h1>
          <h1 className='text-gray--dark5 font-bold text-md mt-4 cursor-pointer' onClick={() => setMenu("datakaryawan")}>Data Karyawan</h1>
          <h1 className='text-gray--dark5 font-bold text-md mt-4 cursor-pointer' onClick={() => setMenu("datauser")}>Data User</h1>
          <h1 className='text-gray--dark5 font-bold text-md mt-4 cursor-pointer' onClick={() => setMenu("datajabatan")}>Data Jabatan</h1>
          <h1 className='text-gray--dark5 font-bold text-md mt-4 cursor-pointer' onClick={() => setMenu("dataabsen")}>Data Absen</h1>
          <h1 className='text-gray--dark5 font-bold text-md mt-4 cursor-pointer' onClick={() => setMenu("dataketerangan")}>Data Keterangan</h1>
          <h1 className='text-gray--dark5 font-bold text-md mt-4 cursor-pointer' onClick={() => router.replace('/')}>Logout</h1>
        </div>
      </div>
      <div className='w-full'>
        {
          menu == "beranda" ? (
            <BerandaComponent />
          ) : menu == "datakaryawan" ? (
            //  karyawan data
            <>
              {
                isTambahKaryawan ? (
                  <div className='w-4/5 bg-white p-4 mx-4 my-4 rounded-md shadow shadow-gray'>
                    <div className='flex items-center justify-between'>
                      <p className='text-gray--dark5 font-bold text-md'>Username</p>
                      <input className='ml-4 w-4/5 rounded-md border border-gray outline-none text-gray--dark5' value={username} onChange={v => setUsername(v.target.value)} />
                    </div>
                    <div className='flex items-center justify-between mt-4'>
                      <p className='text-gray--dark5 font-bold text-md'>Password</p>
                      <input className='ml-4 w-4/5 rounded-md border border-gray outline-none text-gray--dark5' value={password} onChange={v => setPassword(v.target.value)} />
                    </div>
                    <div className='flex items-center justify-between mt-4'>
                      <p className='text-gray--dark5 font-bold text-md'>Nama</p>
                      <input className='ml-4 w-4/5 rounded-md border border-gray outline-none text-gray--dark5' value={nama} onChange={v => setNama(v.target.value)} />
                    </div>
                    <div className='flex items-center justify-between mt-4'>
                      <p className='text-gray--dark5 font-bold text-md'>Tempat & Tanggal Lahir</p>
                      <input className='ml-4 w-4/5 rounded-md border border-gray outline-none text-gray--dark5' value={ttl} onChange={v => setTtl(v.target.value)} />
                    </div>
                    <div className='flex items-center justify-between mt-4'>
                      <p className='text-gray--dark5 font-bold text-md'>Jenis Kelamin</p>
                      <input className='ml-4 w-4/5 rounded-md border border-gray outline-none text-gray--dark5' value={jenkel} onChange={v => setJenkel(v.target.value)} />
                    </div>
                    <div className='flex items-center justify-between mt-4'>
                      <p className='text-gray--dark5 font-bold text-md'>Agama</p>
                      <input className='ml-4 w-4/5 rounded-md border border-gray outline-none text-gray--dark5' value={agama} onChange={v => setAgama(v.target.value)} />
                    </div>
                    <div className='flex items-center justify-between mt-4'>
                      <p className='text-gray--dark5 font-bold text-md'>Alamat</p>
                      <input className='ml-4 w-4/5 rounded-md border border-gray outline-none text-gray--dark5' value={alamat} onChange={v => setAlamat(v.target.value)} />
                    </div>
                    <div className='flex items-center justify-between mt-4'>
                      <p className='text-gray--dark5 font-bold text-md'>Nomor Telepon</p>
                      <input className='ml-4 w-4/5 rounded-md border border-gray outline-none text-gray--dark5' value={noTel} onChange={v => setNoTel(v.target.value)} />
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
                      <div className='w-20 items-center justify-center flex rounded-md h-8 bg-blue--1 mr-12 cursor-pointer' onClick={handleAddKaryawan}>
                        <p>Simpan</p>
                      </div>
                      <div className='w-20 items-center justify-center flex rounded-md h-8 bg-accent--red cursor-pointer' onClick={() => setIsTambahKaryawan(!isTambahKaryawan)}>
                        <p>Batal</p>
                      </div>
                    </div>
                  </div>
                ) : <div className='flex items-center justify-center w-32 h-12 bg-blue--1 rounded-md mr-2 mt-8 ml-4 cursor-pointer' onClick={() => setIsTambahKaryawan(!isTambahKaryawan)}>
                  <p className=' '>Tambah Data</p>
                </div>
              }
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full text-left text-sm font-light">
                        <thead
                          className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                          <tr>
                            <th scope="col" className="px-6 py-4">Nama</th>
                            <th scope="col" className="px-6 py-4">Tempat & Tanggal Lahir</th>
                            <th scope="col" className="px-6 py-4">Jenis Kelamin</th>
                            <th scope="col" className="px-6 py-4">Agama</th>
                            <th scope="col" className="px-6 py-4">Alamat</th>
                            <th scope="col" className="px-6 py-4">Nomor Telepon</th>
                            <th scope="col" className="px-6 py-4">Jabatan</th>
                            <th scope="col" className="px-6 py-4">Aksi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            karyawan.map(v => {
                              return (
                                <tr
                                  className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                                  <td className="whitespace-nowrap px-6 py-4">{v.nama}</td>
                                  <td className="whitespace-nowrap px-6 py-4">{v.tmp_tgl_lahir}</td>
                                  <td className="whitespace-nowrap px-6 py-4">{v.jenkel}</td>
                                  <td className="whitespace-nowrap px-6 py-4">{v.agama}</td>
                                  <td className="whitespace-nowrap px-6 py-4">{v.alamat}</td>
                                  <td className="whitespace-nowrap px-6 py-4">{v.no_tel}</td>
                                  <td className="whitespace-nowrap px-6 py-4">{v.tb_jabatan}</td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    <div className='flex '>
                                      <div className='flex items-center justify-center px-4 h-8 bg-accent--red rounded-md' onClick={() => handleHapusKaryawan(v.id_karyawan)}>
                                        <p className=' '>Hapus</p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              )
                            })
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </>
            //  karyawan data
          ) : menu == "datajabatan" ? (
            <>
              {/* jabatan data */}
              <div className='w-4/5 bg-white p-4 mx-4 my-4 rounded-md shadow shadow-gray'>
                <div className='flex items-center justify-between'>
                  <p className='text-gray--dark5 font-bold text-md'>Jabatan</p>
                  <input className='ml-4 w-4/5 rounded-md border border-gray outline-none text-gray--dark5' value={valueTambahJabatan} onChange={v => setValueTambahJabatan(v.target.value)} />
                </div>
                <div className='flex items-center  mt-4'>
                  <div className='w-20 items-center justify-center flex rounded-md h-8 bg-blue--1 mr-12 cursor-pointer' onClick={handleAddJabatan} >
                    <p>Simpan</p>
                  </div>
                  <div className='w-20 items-center justify-center flex rounded-md h-8 bg-accent--red'>
                    <p>Batal</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full text-left text-sm font-light">
                        <thead
                          className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                          <tr>
                            <th scope="col" className="px-6 py-4">No</th>
                            <th scope="col" className="px-6 py-4">Jabatan</th>
                            <th scope="col" className="px-6 py-4">Aksi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            jabatan.map(v => {
                              return (
                                <tr
                                  className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                                  <td className="whitespace-nowrap px-6 py-4">{v.id_jabatan}</td>
                                  <td className="whitespace-nowrap px-6 py-4">{v.nama_jabatan}</td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    <div className='flex items-center justify-center px-4 w-20 h-8 bg-accent--red rounded-md cursor-pointer' onClick={() => handleHapusJabatan(v.id_jabatan)}>
                                      <p className=' '>Hapus</p>
                                    </div>
                                  </td>
                                </tr>
                              )
                            })
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* jabatan data */}
            </>
          ) : menu == "dataabsen" ? (
            <>
              {/* absen data */}
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full text-left text-sm font-light">
                        <thead
                          className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                          <tr>
                            <th scope="col" className="px-6 py-4">No</th>
                            <th scope="col" className="px-6 py-4">Nama</th>
                            <th scope="col" className="px-6 py-4">Waktu</th>
                            <th scope="col" className="px-6 py-4">Aksi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            absen.map(v => {
                              return (
                                <tr
                                  className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                                  <td className="whitespace-nowrap px-6 py-4">{absen.length}</td>
                                  <td className="whitespace-nowrap px-6 py-4">{v.tb_karyawan}</td>
                                  <td className="whitespace-nowrap px-6 py-4">{v.waktu}</td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    <div className='flex items-center justify-center px-4 w-20 h-8 bg-accent--red rounded-md cursor-pointer' onClick={() => handleHapusAbsen(v.id_absen)}>
                                      <p className=' '>Hapus</p>
                                    </div>
                                  </td>
                                </tr>
                              )
                            })
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* absen data */}
            </>
          ) : menu == "dataketerangan" ? (
            <>
              {/* keterangan data */}
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full text-left text-sm font-light">
                        <thead
                          className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                          <tr>
                            <th scope="col" className="px-6 py-4">No</th>
                            <th scope="col" className="px-6 py-4">Nama</th>
                            <th scope="col" className="px-6 py-4">Keterangan</th>
                            <th scope="col" className="px-6 py-4">Alasan</th>
                            <th scope="col" className="px-6 py-4">Aksi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            keterangan.map(v => {
                              return (
                                <tr
                                  className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                                  <td className="whitespace-nowrap px-6 py-4">{keterangan.length}</td>
                                  <td className="whitespace-nowrap px-6 py-4">{v.tb_karyawan}</td>
                                  <td className="whitespace-nowrap px-6 py-4">{v.keterangan}</td>
                                  <td className="whitespace-nowrap px-6 py-4">{v.alasan}</td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    <div className='flex items-center justify-center px-4 w-20 h-8 bg-accent--red rounded-md cursor-pointer' onClick={() => handleHapusKeterangan(v.id_keterangan)}>
                                      <p className=' '>Hapus</p>
                                    </div>
                                  </td>
                                </tr>
                              )
                            })
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* keterangan data */}
            </>
          ) : null
        }
      </div>
    </div>
  )
}
