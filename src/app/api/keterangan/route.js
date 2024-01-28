import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
    const data = await prisma.tb_keterangan.findMany({
        include: {
            tb_karyawan: {
                select: {
                    nama: true
                }
            }
        }
    })

    const keterangan = data.map(({ tb_karyawan, ...absenData }) => {
        // Periksa apakah tb_karyawan adalah array
        const tbKaryawanArray = Array.isArray(tb_karyawan) ? tb_karyawan : [tb_karyawan];

        // Ambil nama_jabatan dari array tb_karyawan
        const namaKaryawanArray = tbKaryawanArray.map(({ nama }) => nama);

        return {
            ...absenData,
            tb_karyawan: namaKaryawanArray[0] // Mengambil nilai langsung dari nama_jabatan
        };
    });
    return Response.json({
        msg: "sukses",
        keterangan
    });
}