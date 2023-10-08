"use server";

import { prisma } from "@/lib/prisma";
import { createFormRecordSchemaType } from "@/schema/createFormRecord";
import { currentUser } from "@clerk/nextjs";

export async function createFormRecord(data: createFormRecordSchemaType) {
  const user = await currentUser();

  if (!user) {
    throw new Error("user not found");
  }

  const { formName, expiresAt, portfolioId } = data;

  return await prisma.formRecord.create({
    data: {
      userId: user.id,
      formName,
      expiresAt,
      Portfolio: {
        connect: {
          id: portfolioId,
        },
      },
    },
  });
}

export async function setTaskToDone(id: number) {
  const user = await currentUser();

  if (!user) {
    throw new Error("user not found");
  }

  return await prisma.formRecord.update({
    where: {
      id: id,
      userId: user.id,
    },
    data: {
      done: true,
    },
  });
}
