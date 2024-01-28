import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const { username, password, nama, tmp_tgl_lahir, jenkel, agama, alamat, no_tel, jabatan_id } = await req.json();
        const karyawan = await prisma.tb_karyawan.create({
            data: {
                username: username,
                password: password,
                nama: nama,
                tmp_tgl_lahir: tmp_tgl_lahir,
                jenkel: jenkel,
                agama: agama,
                alamat: alamat,
                no_tel: no_tel,
                jabatan_id: Number(jabatan_id),
            },
        })

        return Response.json({
            msg: "Sukses tambah data karyawan!",
            karyawan
        });
    } catch (error) {
        console.error("Error during login:", error);
        return Response.json({
            msg: "Terjadi kesalahan saat tambah data",
        });
    }
}