/*
  Warnings:

  - You are about to drop the `TechnologiesProjects` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."TechnologiesProjects" DROP CONSTRAINT "TechnologiesProjects_projectsId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TechnologiesProjects" DROP CONSTRAINT "TechnologiesProjects_technologiesId_fkey";

-- DropTable
DROP TABLE "public"."TechnologiesProjects";
