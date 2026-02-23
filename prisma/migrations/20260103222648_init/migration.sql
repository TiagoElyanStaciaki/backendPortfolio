-- CreateEnum
CREATE TYPE "public"."Levels" AS ENUM ('BEGINNER', 'INTERMEDIARY', 'ADVANCED');

-- CreateEnum
CREATE TYPE "public"."Categories" AS ENUM ('FRONT_END', 'BACK_END', 'TOOLS', 'METHODOLOGY');

-- CreateTable
CREATE TABLE "public"."admin" (
    "id" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."technologies" (
    "id" SERIAL NOT NULL,
    "icon" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "level" "public"."Levels" NOT NULL DEFAULT 'BEGINNER',
    "category" "public"."Categories" NOT NULL,

    CONSTRAINT "technologies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."projects" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TechnologiesProjects" (
    "id" TEXT NOT NULL,
    "technologiesId" INTEGER NOT NULL,
    "projectsId" INTEGER NOT NULL,

    CONSTRAINT "TechnologiesProjects_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."TechnologiesProjects" ADD CONSTRAINT "TechnologiesProjects_technologiesId_fkey" FOREIGN KEY ("technologiesId") REFERENCES "public"."technologies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TechnologiesProjects" ADD CONSTRAINT "TechnologiesProjects_projectsId_fkey" FOREIGN KEY ("projectsId") REFERENCES "public"."projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
