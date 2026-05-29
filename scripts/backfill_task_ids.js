const crypto = require('crypto');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const tasks = await prisma.task.findMany({
    where: { taskId: null },
    select: { id: true }
  });

  for (const task of tasks) {
    await prisma.task.update({
      where: { id: task.id },
      data: { taskId: crypto.randomUUID() }
    });
  }

  console.log(`Backfilled taskId for ${tasks.length} task rows`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
