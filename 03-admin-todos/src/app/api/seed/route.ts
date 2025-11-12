/* eslint-disable @typescript-eslint/no-unused-vars */
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function GET(_: Request) {
  await prisma.todo.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      email: "1@example.com",
      name: "John Smith",
      password: bcrypt.hashSync("1"),
      roles: ["admin", "user"],
      todos: {
        create: [
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
      },
    },
  });

  // await prisma.todo.createMany({
  //   data:
  // });

  return NextResponse.json({ message: "seed executed" });
}
