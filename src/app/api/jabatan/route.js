import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
    const jabatan = await prisma.tb_jabatan.findMany()
    return Response.json({
        msg: "sukses",
        jabatan
    });
}