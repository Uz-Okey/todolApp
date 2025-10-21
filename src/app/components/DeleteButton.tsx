'use client'

import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: string }) {
    const router = useRouter()
    
    async function handleDelete() {
        try {
            const req = await fetch(`api/todo/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })

            if (!req.ok) throw new Error('unable to delete item');
            
            // ✅ FIX: Refresh the current page to re-fetch the todo list data
            router.refresh() 
            
        } catch (err) {
            console.error(err, 'cannot send delete')
        }
    }

    return (
        <div>
            <button onClick={handleDelete} className="bg-amber-600 rounded-sm p-1 cursor-pointer text-white">delete</button>
        </div>
    )
}