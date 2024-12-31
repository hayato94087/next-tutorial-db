"use server";

import { revalidatePath } from "next/cache";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "@/server/data-access-layer/todo";

export async function fetchTodos() {
  return getTodos();
}

export async function addTodo(title: string) {
  const newTodo = await createTodo({ title, completed: false });
  revalidatePath("/todo");
  return newTodo;
}

export async function toggleTodoCompletion(id: number, completed: boolean) {
  const updatedTodo = await updateTodo(id, { completed: !completed });
  revalidatePath("/todo");
  return updatedTodo;
}

export async function removeTodo(id: number) {
  await deleteTodo(id);
  revalidatePath("/todo");
}
