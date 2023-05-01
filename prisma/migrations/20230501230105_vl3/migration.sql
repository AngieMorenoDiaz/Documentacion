/*
  Warnings:

  - The primary key for the `Especialidad` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `IdSpecialidad` on the `Especialidad` table. All the data in the column will be lost.
  - You are about to drop the column `especialidadIdSpecialidad` on the `Medico` table. All the data in the column will be lost.
  - Added the required column `IdEspecialidad` to the `Especialidad` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Especialidad" (
    "IdEspecialidad" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);
INSERT INTO "new_Especialidad" ("nombre") SELECT "nombre" FROM "Especialidad";
DROP TABLE "Especialidad";
ALTER TABLE "new_Especialidad" RENAME TO "Especialidad";
CREATE TABLE "new_Medico" (
    "tarjetaProfesional" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "fechaNacimiento" DATETIME NOT NULL,
    "correo" TEXT NOT NULL,
    "IdEspecialidad" INTEGER NOT NULL,
    "especialidadIdEspecialidad" INTEGER,
    CONSTRAINT "Medico_especialidadIdEspecialidad_fkey" FOREIGN KEY ("especialidadIdEspecialidad") REFERENCES "Especialidad" ("IdEspecialidad") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Medico" ("IdEspecialidad", "apellido", "correo", "especialidadIdEspecialidad", "fechaNacimiento", "nombre", "tarjetaProfesional") SELECT "IdEspecialidad", "apellido", "correo", "especialidadIdEspecialidad", "fechaNacimiento", "nombre", "tarjetaProfesional" FROM "Medico";
DROP TABLE "Medico";
ALTER TABLE "new_Medico" RENAME TO "Medico";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
