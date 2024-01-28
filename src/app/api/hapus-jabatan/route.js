import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
    try {

        const { id_jabatan } = await req.json();

        const deleteJabatan = await prisma.tb_jabatan.delete({
            where: {
                id_jabatan: Number(id_jabatan),
            },
        })
        return Response.json({
            msg: "sukses delete data jabatan!",
        });
    } catch (error) {
        console.log(error)
        return Response.json({
            msg: "terjadi kesalahan saat delete data",
        });
    }
}