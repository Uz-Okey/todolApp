'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface formValue {
    id: string,
    title: string,
    content: string
}

export default function Todoform() {
    const router = useRouter()
    const [error, setError] = useState('')
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<formValue>()

    async function onSubmit(data: formValue) {
        try {
            const req = await fetch('/api/todo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            if (!req.ok) throw new Error('unable to fetch data')
            
            // ✅ FIX: Use router.refresh() before push to force data re-fetch
            router.refresh()
            
            reset()
            router.push('/todoitems')
        } catch (err) {
            console.error(err, 'unable to send post data')
            setError('an error occur')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col shadow-2xl border rounded-sm space-y-3 border-amber-600 m-8 p-5' >

                <h1 className='text-center font-semibold'>ENTER YOUR TODO</h1>
                <p className='text-red-500'>{error}</p>
                <label htmlFor="">Title</label>
                <input className='border border-amber-600 rounded-sm
                p-2' placeholder='enter your title...' {...register('title', { required: true })} />
                {errors.title && <p className='text-red-500'>Title is required.</p>}

                <label htmlFor="">Content</label>
                <textarea placeholder='enter your content...' className='border border-amber-600 rounded-sm
                p-2' {...register('content', { required: true })} />
                {errors.content && <p className='text-red-500'>Content is required.</p>}
                <input className='bg-black w-20 mx-auto flex justify-center cursor-pointer hover:shadow-2xl rounded-sm align-middle items-center p-2 text-white' type="submit" />
            </form>
        </div>
    )
}