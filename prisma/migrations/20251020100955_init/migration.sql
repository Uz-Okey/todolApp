-- CreateTable
CREATE TABLE "todo" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT,
    "completed" BOOLEAN DEFAULT false,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);
