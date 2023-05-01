/*
  Warnings:

  - You are about to drop the column `IdSpecialidad` on the `Medico` table. All the data in the column will be lost.
  - You are about to drop the column `tarjetaProfesional` on the `Cita` table. All the data in the column will be lost.
  - Added the required column `IdEspecialidad` to the `Medico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medicoTarjetaProfesional` to the `Cita` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Medico" (
    "tarjetaProfesional" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "fechaNacimiento" DATETIME NOT NULL,
    "correo" TEXT NOT NULL,
    "IdEspecialidad" INTEGER NOT NULL,
    "especialidadIdEspecialidad" INTEGER,
    "especialidadIdSpecialidad" INTEGER,
    CONSTRAINT "Medico_especialidadIdSpecialidad_fkey" FOREIGN KEY ("especialidadIdSpecialidad") REFERENCES "Especialidad" ("IdSpecialidad") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Medico" ("apellido", "correo", "fechaNacimiento", "nombre", "tarjetaProfesional") SELECT "apellido", "correo", "fechaNacimiento", "nombre", "tarjetaProfesional" FROM "Medico";
DROP TABLE "Medico";
ALTER TABLE "new_Medico" RENAME TO "Medico";
CREATE TABLE "new_Cita" (
    "idCita" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha" DATETIME NOT NULL,
    "cedulaPaciente" INTEGER NOT NULL,
    "medicoTarjetaProfesional" INTEGER NOT NULL,
    "pacienteCedula" INTEGER,
    CONSTRAINT "Cita_pacienteCedula_fkey" FOREIGN KEY ("pacienteCedula") REFERENCES "Paciente" ("cedula") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cita_medicoTarjetaProfesional_fkey" FOREIGN KEY ("medicoTarjetaProfesional") REFERENCES "Medico" ("tarjetaProfesional") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Cita" ("cedulaPaciente", "fecha", "idCita") SELECT "cedulaPaciente", "fecha", "idCita" FROM "Cita";
DROP TABLE "Cita";
ALTER TABLE "new_Cita" RENAME TO "Cita";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
