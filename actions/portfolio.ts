"use server";
import { prisma } from "@/lib/prisma";
import { wait } from "@/lib/wait";
import { createPortfolioSchemaType } from "@/schema/createPortfolio";
import { currentUser } from "@clerk/nextjs";

export async function createPortfolio(form: createPortfolioSchemaType) {
  const user = await currentUser();

  if (!user) {
    throw new Error("user not found");
  }

  return await prisma.portfolio.create({
    data: {
      userId: user.id,
      color: form.color,
      name: form.name,
    },
  });
}

export async function deletePortfolio(id: number) {
  const user = await currentUser();
  if (!user) {
    throw new Error("user not found");
  }

  return await prisma.portfolio.delete({
    where: {
      id: id,
      userId: user.id,
    },
  });
}
