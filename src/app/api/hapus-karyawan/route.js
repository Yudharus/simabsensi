import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
    try {

        const { id_karyawan } = await req.json();
        console.log("id api ===", id_karyawan)
        const deleteKaryawan = await prisma.tb_karyawan.delete({
            where: {
                id_karyawan: Number(id_karyawan),
            },
        })
        return Response.json({
            msg: "sukses delete data",
        });
    } catch (error) {
        return Response.json({
            msg: "terjadi kesalahan saat delete data",
        });
        console.log(error)
    }
}