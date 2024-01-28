/*
  Warnings:

  - Added the required column `alasan` to the `tb_keterangan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `keterangan` to the `tb_keterangan` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tb_keterangan" (
    "id_keterangan" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_karyawan" INTEGER NOT NULL,
    "keterangan" TEXT NOT NULL,
    "alasan" TEXT NOT NULL,
    CONSTRAINT "tb_keterangan_id_karyawan_fkey" FOREIGN KEY ("id_karyawan") REFERENCES "tb_karyawan" ("id_karyawan") ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT INTO "new_tb_keterangan" ("id_karyawan", "id_keterangan") SELECT "id_karyawan", "id_keterangan" FROM "tb_keterangan";
DROP TABLE "tb_keterangan";
ALTER TABLE "new_tb_keterangan" RENAME TO "tb_keterangan";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
