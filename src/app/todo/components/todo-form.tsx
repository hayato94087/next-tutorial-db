"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addTodo } from "@/server/actions/todo";

export function TodoForm() {
  const [title, setTitle] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;

    await addTodo({ title });
    setTitle("");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="新しいTodoを入力"
          className="flex-grow rounded-l-lg bg-gray-100 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="rounded-r-lg bg-blue-500 px-6 py-2 text-white transition duration-200 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          追加
        </button>
      </div>
    </form>
  );
}
