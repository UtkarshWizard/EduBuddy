-- AlterTable
ALTER TABLE "Doubt" ADD COLUMN     "answer" TEXT,
ADD COLUMN     "answeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
