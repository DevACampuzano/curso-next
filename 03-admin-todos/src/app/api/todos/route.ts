import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import * as yup from "yup";
import { authOptions } from "../auth/[...nextauth]/route";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = Number(searchParams.get("take")) ?? "10";
  const skip = Number(searchParams.get("skip")) ?? "0";
  if (isNaN(take)) {
    return NextResponse.json({ message: "Invalid take" }, { status: 400 });
  }
  if (isNaN(skip)) {
    return NextResponse.json({ message: "Invalid skip" }, { status: 400 });
  }
  const todos = await prisma.todo.findMany({
    take: take,
    skip: skip,
  });
  return NextResponse.json(todos);
}

const postSchema = yup.object({
  description: yup.string().required(),
  completed: yup.boolean().optional().default(false),
});

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json("No autorizado", { status: 401 });
  }
  try {
    const { description, completed } = await postSchema.validate(
      await request.json()
    );

    const todo = await prisma.todo.create({
      data: {
        description,
        completed,
        userId: session.user.id,
      },
    });
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
