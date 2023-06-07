/*
  Warnings:

  - You are about to drop the column `authorId` on the `Record` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Record` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Record` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Record` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `Record` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Record" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "category" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL,
    CONSTRAINT "Record_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Record" ("id") SELECT "id" FROM "Record";
DROP TABLE "Record";
ALTER TABLE "new_Record" RENAME TO "Record";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
