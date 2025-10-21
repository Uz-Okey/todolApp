'use client'

import { useRouter } from "next/navigation"; // 👈 You need to import useRouter here

interface checkboxValue {
    id: string,
    completed: boolean,
}

export default function CompletedButton({ id, completed }: checkboxValue) {
    // 👈 Instantiate useRouter if you didn't have it before
    const router = useRouter() 

    async function handleMark(e: React.ChangeEvent<HTMLInputElement>) {
        try {
            const req = await fetch(`/api/todo/${id}`,
                {
                    method: 'PATCH',
                    headers: { "Content-Type": 'application/json' },
                    body: JSON.stringify({ completed: e.target.checked })
                }
            )

            if (req.ok) {
                // ✅ FIX: Use router.refresh() to re-fetch the todo list data
                // DO NOT use window.location.reload()
                router.refresh() 
            }
        } catch (err) {
            console.error(err, 'error unable to mark')
        }

    }

    return (
        <div>
            <input type="checkbox" checked={completed} onChange={handleMark} id="" />
        </div>
    )
}