-- CreateTable
CREATE TABLE "Paciente" (
    "cedula" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "fechaNacimiento" DATETIME NOT NULL,
    "telefono" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Medico" (
    "tarjetaProfesional" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "fechaNacimiento" DATETIME NOT NULL,
    "correo" TEXT NOT NULL,
    "IdSpecialidad" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Cita" (
    "idCita" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha" DATETIME NOT NULL,
    "cedulaPaciente" INTEGER NOT NULL,
    "tarjetaProfesional" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Especialidad" (
    "IdSpecialidad" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);
