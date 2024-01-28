import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
    const data = await prisma.tb_karyawan.findMany({
        include: {
            tb_jabatan: {
                select: {
                    nama_jabatan: true
                }
            }
        }
    })

    // Ubah hasil menjadi sesuai yang diinginkan
    const karyawan = data.map(({ tb_jabatan, ...karyawanData }) => {
        // Periksa apakah tb_jabatan adalah array
        const tbJabatanArray = Array.isArray(tb_jabatan) ? tb_jabatan : [tb_jabatan];

        // Ambil nama_jabatan dari array tb_jabatan
        const namaJabatanArray = tbJabatanArray.map(({ nama_jabatan }) => nama_jabatan);

        return {
            ...karyawanData,
            tb_jabatan: namaJabatanArray[0] // Mengambil nilai langsung dari nama_jabatan
        };
    });
    return Response.json({
        msg: "sukses",
        karyawan
    });
}