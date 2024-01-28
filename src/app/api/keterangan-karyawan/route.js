import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const { id_karyawan, keterangan, alasan } = await req.json();
        const absensi = await prisma.tb_keterangan.create({
            data: {
                id_karyawan: Number(id_karyawan),
                keterangan: keterangan,
                alasan: alasan,
            },
        })

        return Response.json({
            error: false,
            msg: "Sukses mengirim keterangan!",
            absensi
        });
    } catch (error) {
        console.error("Error during login:", error);
        return Response.json({
            msg: "Terjadi kesalahan saat melakukan keterangan",
        });
    }
}