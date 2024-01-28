-- CreateTable
CREATE TABLE "tb_karyawan" (
    "id_karyawan" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "tmp_tgl_lahir" TEXT NOT NULL,
    "jenkel" TEXT NOT NULL,
    "agama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "no_tel" TEXT NOT NULL,
    "jabatan_id" INTEGER NOT NULL,
    CONSTRAINT "tb_karyawan_jabatan_id_fkey" FOREIGN KEY ("jabatan_id") REFERENCES "tb_jabatan" ("id_jabatan") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "tb_jabatan" (
    "id_jabatan" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama_jabatan" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "tb_absen" (
    "id_absen" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "waktu" TEXT NOT NULL,
    "id_karyawan" INTEGER NOT NULL,
    CONSTRAINT "tb_absen_id_karyawan_fkey" FOREIGN KEY ("id_karyawan") REFERENCES "tb_karyawan" ("id_karyawan") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "tb_keterangan" (
    "id_keterangan" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_karyawan" INTEGER NOT NULL,
    CONSTRAINT "tb_keterangan_id_karyawan_fkey" FOREIGN KEY ("id_karyawan") REFERENCES "tb_karyawan" ("id_karyawan") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_karyawan_username_key" ON "tb_karyawan"("username");
