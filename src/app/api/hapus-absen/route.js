import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
    try {

        const { id_absen } = await req.json();

        const deleteAbsen = await prisma.tb_absen.delete({
            where: {
                id_absen: Number(id_absen),
            },
        })
        return Response.json({
            msg: "sukses delete data absen!",
        });
    } catch (error) {
        console.log(error)
        return Response.json({
            msg: "terjadi kesalahan saat delete data",
        });
    }
}