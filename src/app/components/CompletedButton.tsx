'use client'

interface checkboxValue {
  id: string;
  completed: boolean;
}

export default function CompletedButton({ id, completed }: checkboxValue) {
  async function handleMark(e: React.ChangeEvent<HTMLInputElement>) {
    try {
      const req = await fetch(`/api/todo/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: e.target.checked }),
      });

      if (req.ok) window.location.reload();
    } catch (err) {
      console.error(err, "Error unable to mark");
    }
  }

  return (
    <input
      type="checkbox"
      checked={completed}
      onChange={handleMark}
      className="cursor-pointer"
    />
  );
}
