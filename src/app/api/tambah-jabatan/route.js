import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const { nama_jabatan } = await req.json();
        const karyawan = await prisma.tb_jabatan.create({
            data: {
                nama_jabatan: nama_jabatan,
            },
        })

        return Response.json({
            msg: "Sukses tambah data jabatan!",
        });
    } catch (error) {
        console.error("Error during login:", error);
        return Response.json({
            msg: "Terjadi kesalahan saat tambah data jabatan",
        });
    }
}