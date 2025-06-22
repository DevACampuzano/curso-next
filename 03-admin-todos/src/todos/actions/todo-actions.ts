"use server";

import { Todo } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const sleep = async (seconds: number = 0) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000)
  );

export const toggleTodo = async (
  id: string,
  completed: boolean
): Promise<Todo> => {
  await sleep(3);
  const todo = await prisma.todo.findFirst({ where: { id } });

  if (!todo) {
    throw "Todo not found";
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { completed },
  });

  revalidatePath("/dasboard/server-todo");

  return updatedTodo;
};

export const addTodo = async (description: string): Promise<Todo> => {
  try {
    const todo = await prisma.todo.create({
      data: {
        description,
        completed: false,
      },
    });
    revalidatePath("/dashboard/server-todo");
    return todo;
  } catch (error) {
    throw error;
  }
};

export const deleteCompletedTodos = async (): Promise<void> => {
  await prisma.todo.deleteMany({
    where: {
      completed: true,
    },
  });

  revalidatePath("/dashboard/server-todo");
};
