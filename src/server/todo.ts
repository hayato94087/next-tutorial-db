import "server-only";

import type { Todo } from "@prisma/client";
import { db } from "@/server/db";

function createTodoDTO(todoData: Todo) {
  return {
    id: todoData.id,
    title: todoData.title,
    completed: todoData.completed,
    createdAt: todoData.createdAt,
    updatedAt: todoData.updatedAt,
  };
}

export async function getTodos() {
  const todos = await db.todo.findMany({
    orderBy: { createdAt: "desc" },
  });
  return todos.map(createTodoDTO);
}

export async function createTodo(title: string) {
  const todo = await db.todo.create({
    data: { title },
  });
  return createTodoDTO(todo);
}

export async function updateTodo(
  id: number,
  data: { title?: string; completed?: boolean },
) {
  const todo = await db.todo.update({
    where: { id },
    data,
  });
  return createTodoDTO(todo);
}

export async function deleteTodo(id: number) {
  await db.todo.delete({
    where: { id },
  });
}
