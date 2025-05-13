/* eslint-disable @typescript-eslint/no-unused-vars */
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_: Request) {
  await prisma.todo.deleteMany();

  const todo = await prisma.todo.createMany({
    data: [
      {
        description: "Piedra del Realidad",
      },
      {
        description: "Piedra del Espacio",
      },
      {
        description: "Piedra del Poder",
      },
      {
        description: "Piedra del Tiempo",
      },
      {
        description: "Piedra de la Mente",
      },
      {
        description: "Piedra del Alma",
        completed: true,
      },
    ],
  });
  console.log(todo);
  return NextResponse.json({ message: "seed executed" });
}
