import prisma from "@/lib/prisma";
import * as yup from "yup";
import { NextResponse } from "next/server";
import { Todo } from "@/generated/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

interface Segments {
  params: Promise<{
    id: string;
  }>;
}

const getTodo = async (id: string): Promise<Todo | null> => {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return null;
  }
  const todo = await prisma.todo.findFirst({
    where: {
      id: id,
      userId: session.user.id,
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
