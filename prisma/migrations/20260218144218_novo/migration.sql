/*
  Warnings:

  - You are about to drop the `technologies` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "public"."projects" ADD COLUMN     "link" TEXT;

-- DropTable
DROP TABLE "public"."technologies";

-- DropEnum
DROP TYPE "public"."Categories";

-- CreateTable
CREATE TABLE "public"."project_tool" (
    "projectID" INTEGER NOT NULL,
    "toolID" INTEGER NOT NULL,

    CONSTRAINT "project_tool_pkey" PRIMARY KEY ("projectID","toolID")
);

-- CreateTable
CREATE TABLE "public"."tool" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "level" "public"."Levels" NOT NULL DEFAULT 'BEGINNER',
    "categoryID" INTEGER NOT NULL,

    CONSTRAINT "tool_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."project_tool" ADD CONSTRAINT "project_tool_projectID_fkey" FOREIGN KEY ("projectID") REFERENCES "public"."projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."project_tool" ADD CONSTRAINT "project_tool_toolID_fkey" FOREIGN KEY ("toolID") REFERENCES "public"."tool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tool" ADD CONSTRAINT "tool_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "public"."category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
