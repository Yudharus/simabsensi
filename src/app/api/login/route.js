import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const body = await req.json();

        // Memeriksa apakah username dan password ada dalam body request
        if (!body.username || !body.password) {
            return Response.json({
                login: false,
                msg: "Username dan password harus diisi",
            });
        }

        // Mencari pengguna dengan username yang diberikan
        const user = await prisma.tb_karyawan.findUnique({
            where: {
                username: body.username,
            },
        });

        // Memeriksa apakah pengguna ditemukan dan password sesuai
        if (user && user.password === body.password) {
            // Login berhasil
            return Response.json({
                login: true,
                msg: "Login berhasil",
                user
            });
        } else {
            // Login gagal
            return Response.json({
                login: false,
                msg: "Username atau password salah",
            });
        }
    } catch (error) {
        console.error("Error during login:", error);
        return Response.json({
            msg: "Terjadi kesalahan saat login",
        });
    }
}