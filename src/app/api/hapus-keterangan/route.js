import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
    try {

        const { id_keterangan } = await req.json();

        const deleteKeterangan = await prisma.tb_keterangan.delete({
            where: {
                id_keterangan: Number(id_keterangan),
            },
        })
        return Response.json({
            msg: "sukses delete data keterangan!",
        });
    } catch (error) {
        console.log(error)
        return Response.json({
            msg: "terjadi kesalahan saat delete data",
        });
    }
}