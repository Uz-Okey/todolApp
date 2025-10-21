'use client'

import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();

  async function handleDelete() {
    try {
      const req = await fetch(`/api/todo/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!req.ok) throw new Error("Unable to delete item");
      router.refresh(); // 👈 Refresh data after delete
    } catch (err) {
      console.error(err, "Cannot send delete");
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-amber-600 rounded-sm p-1 cursor-pointer text-white"
    >
      Delete
    </button>
  );
}
