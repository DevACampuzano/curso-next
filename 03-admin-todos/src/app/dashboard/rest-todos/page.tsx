import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";
import { NewTodo } from "@/todos/components/NewTodo";
import { redirect } from "next/navigation";
import { getServerSession } from 'next-auth';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const metadata = {
  title: "Listado de Todos",
  description: "Listado de Todos",
};
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function RestTodosPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return redirect("/api/auth/signin");
  }


  const todos = await prisma.todo.findMany({
    orderBy: { description: "asc" }, where: {
      userId: session.user.id
    }
  });

  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}
