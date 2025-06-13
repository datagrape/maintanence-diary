-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "groupName" TEXT NOT NULL,
    "groupId" INTEGER NOT NULL,
    "activityName" TEXT NOT NULL,
    "activityId" INTEGER NOT NULL,
    "member" TEXT NOT NULL,
    "dueDate" TEXT NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
