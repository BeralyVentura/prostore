import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient().$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product) {
          return product.rating.toString();
        },
      },
    },
  },
});

// 🔧 Solución del error: tipado flexible
const globalForPrisma = globalThis as any;

// 🚀 Asignación segura
export const prisma = globalForPrisma.prisma ?? prismaClient;

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
