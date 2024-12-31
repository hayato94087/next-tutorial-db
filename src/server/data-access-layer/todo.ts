import "server-only";

import { db } from "@/server/db";
import { type TodoSchema } from "prisma/generated/zod/modelSchema/TodoSchema";
import { type z } from "zod";

type Todo = z.infer<typeof TodoSchema>;

function createTodoDTO(input: Todo): Todo {
  return {
    id: input.id,
    title: input.title,
    completed: input.completed,
    createdAt: input.createdAt,
    updatedAt: input.updatedAt,
  };
}

export async function getTodos() {
  try {
    const todos = await db.todo.findMany({
      orderBy: { createdAt: "desc" },
    });
    return todos.map(createTodoDTO);
  } catch (error) {
    console.error("Failed to fetch todos:", error);
    throw new Error("TODOの取得に失敗しました");
  }
}

export async function createTodo(
  input: Omit<Todo, "id" | "createdAt" | "updatedAt">,
) {
  try {
    const todo = await db.todo.create({
      data: input,
    });
    return createTodoDTO(todo);
  } catch (error) {
    console.error("Failed to create todo:", error);
    throw new Error("TODOの作成に失敗しました");
  }
}

export async function updateTodo(
  id: number,
  input: Partial<Omit<Todo, "id" | "createdAt" | "updatedAt">>,
) {
  try {
    const todo = await db.todo.update({
      where: { id },
      data: input,
    });
    return createTodoDTO(todo);
  } catch (error) {
    console.error("Failed to update todo:", error);
    throw new Error("TODOの更新に失敗しました");
  }
}

export async function deleteTodo(id: number) {
  try {
    await db.todo.delete({
      where: { id },
    });
  } catch (error) {
    console.error("Failed to delete todo:", error);
    throw new Error("TODOの削除に失敗しました");
  }
}
