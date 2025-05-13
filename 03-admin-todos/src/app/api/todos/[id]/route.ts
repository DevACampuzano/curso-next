import prisma from "@/lib/prisma";
import * as yup from "yup";
import { NextResponse } from "next/server";
import { Todo } from "@/generated/prisma";

interface Segments {
  params: Promise<{
    id: string;
  }>;
}

const getTodo = async (id: string): Promise<Todo | null> => {
  const todo = await prisma.todo.findFirst({
    where: {
      id: id,
    },
  });
  return todo;
};

export async function GET(request: Request, segments: Segments) {
  const { id } = await segments.params;

  const todo = await getTodo(id);
  return NextResponse.json(todo);
}

const putSchema = yup.object({
  description: yup.string().optional(),
  completed: yup.boolean().optional().default(false),
});
export async function PUT(request: Request, segments: Segments) {
  try {
    const { id } = await segments.params;

    const todo = await getTodo(id);

    if (!todo) {
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    }

    const { description, completed } = await putSchema.validate(
      await request.json()
    );

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { description, completed },
    });
    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
