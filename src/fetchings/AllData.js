import axios from "axios";

const KaryawanData = async () => {
    try {
        const response = await axios.get(
            `http://localhost:3000/api/karyawan`,
            {
                headers: {
                    "accept": "Application/json"
                }
            }
        )

        return response.data.karyawan
    } catch (error) {

        return []
    }
}

const JabatanData = async () => {
    try {
        const response = await axios.get(
            `http://localhost:3000/api/jabatan`,
            {
                headers: {
                    "accept": "Application/json"
                }
            }
        )

        return response.data.jabatan
    } catch (error) {

        return []
    }
}

const AbsenData = async () => {
    try {
        const response = await axios.get(
            `http://localhost:3000/api/absen`,
            {
                headers: {
                    "accept": "Application/json"
                }
            }
        )

        return response.data.absen
    } catch (error) {

        return []
    }
}

const KeteranganData = async () => {
    try {
        const response = await axios.get(
            `http://localhost:3000/api/keterangan`,
            {
                headers: {
                    "accept": "Application/json"
                }
            }
        )

        return response.data.keterangan
    } catch (error) {

        return []
    }
}

const AddKaryawan = async (username, password, nama, tmp_tgl_lahir, jenkel, agama, alamat, no_tel, jabatan_id) => {
    try {
        const response = await axios.post(
            `http://localhost:3000/api/tambah-karyawan`,
            {
                username: username,
                password: password,
                nama: nama,
                tmp_tgl_lahir: tmp_tgl_lahir,
                jenkel: jenkel,
                agama: agama,
                alamat: alamat,
                no_tel: no_tel,
                jabatan_id: jabatan_id,
            },
        )


        return response
    } catch (error) {
        console.log(error)
        return []
    }
}

const HapusKaryawan = async (id) => {
    try {
        const response = await axios.post(
            `http://localhost:3000/api/hapus-karyawan`,
            {
                id_karyawan: id,
            },
        )


        return response
    } catch (error) {
        console.log(error)
        return []
    }
}

const AddJabatan = async (nama_jabatan) => {
    try {
        const response = await axios.post(
            `http://localhost:3000/api/tambah-jabatan`,
            {
                nama_jabatan: nama_jabatan,
            },
        )


        return response
    } catch (error) {
        console.log(error)
        return []
    }
}

const HapusJabatan = async (id_jabatan) => {
    try {
        const response = await axios.post(
            `http://localhost:3000/api/hapus-jabatan`,
            {
                id_jabatan: id_jabatan,
            },
        )


        return response
    } catch (error) {
        console.log(error)
        return []
    }
}

const HapusAbsen = async (id_absen) => {
    try {
        const response = await axios.post(
            `http://localhost:3000/api/hapus-absen`,
            {
                id_absen: id_absen,
            },
        )


        return response
    } catch (error) {
        console.log(error)
        return []
    }
}

const HapusKeterangan = async (id_keterangan) => {
    try {
        const response = await axios.post(
            `http://localhost:3000/api/hapus-keterangan`,
            {
                id_keterangan: id_keterangan,
            },
        )


        return response
    } catch (error) {
        console.log(error)
        return []
    }
}

const AddAbsen = async (waktu, id_karyawan) => {
    try {
        const response = await axios.post(
            `http://localhost:3000/api/absen-karyawan`,
            {
                waktu: waktu,
                id_karyawan: id_karyawan,
            },
        )


        return response
    } catch (error) {
        console.log(error)
        return []
    }
}

const AddKeterangan = async (id_karyawan, keterangan, alasan) => {
    try {
        const response = await axios.post(
            `http://localhost:3000/api/keterangan-karyawan`,
            {
                id_karyawan: id_karyawan,
                keterangan: keterangan,
                alasan: alasan,
            },
        )


        return response
    } catch (error) {
        console.log(error)
        return []
    }
}


export {
    KaryawanData,
    JabatanData,
    AbsenData,
    KeteranganData,
    AddKaryawan,
    HapusKaryawan,
    AddJabatan,
    HapusJabatan,
    HapusAbsen,
    HapusKeterangan,
    AddAbsen,
    AddKeterangan
}