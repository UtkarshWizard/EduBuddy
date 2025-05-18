-- DropForeignKey
ALTER TABLE "Doubt" DROP CONSTRAINT "Doubt_answeredById_fkey";

-- AlterTable
ALTER TABLE "Doubt" ALTER COLUMN "answeredById" DROP NOT NULL,
ALTER COLUMN "answeredAt" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Doubt" ADD CONSTRAINT "Doubt_answeredById_fkey" FOREIGN KEY ("answeredById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
