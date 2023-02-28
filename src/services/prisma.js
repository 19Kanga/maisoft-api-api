const { PrismaClient } = require('@prisma/client');

class Prisma {
  async start() {
    try {
      const prisma = new PrismaClient();
      await prisma.$connect();
      console.log('maisoft db connected!');
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = { Prisma };
