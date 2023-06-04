-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tab" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tabName" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "filterType" INTEGER NOT NULL DEFAULT 1,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Tab_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tab" ("createdAt", "id", "order", "tabName", "userId") SELECT "createdAt", "id", "order", "tabName", "userId" FROM "Tab";
DROP TABLE "Tab";
ALTER TABLE "new_Tab" RENAME TO "Tab";
CREATE UNIQUE INDEX "Tab_order_key" ON "Tab"("order");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
