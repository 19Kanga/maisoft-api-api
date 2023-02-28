const app = require('./services/express');
const { Prisma } = require('./services/prisma');
const env = require('./config/env');

const startServer = async () => {
  const prisma = new Prisma();
  await prisma.start();

  console.log('Hello World');

  app.listen(env.port, () => {
    console.log(`Server up and running on port ${env.port}`);
  });
};

startServer();
