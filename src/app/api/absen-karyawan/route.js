import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const { waktu, id_karyawan } = await req.json();
        const absensi = await prisma.tb_absen.create({
            data: {
                waktu: waktu,
                id_karyawan: Number(id_karyawan),
            },
        })

        return Response.json({
            error: false,
            msg: "Sukses melakukan absensi!",
            absensi
        });
    } catch (error) {
        console.error("Error during login:", error);
        return Response.json({
            msg: "Terjadi kesalahan saat melakukan absensi",
        });
    }
}