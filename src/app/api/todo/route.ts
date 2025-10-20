import { prisma } from "@/app/utils/db"

export async function POST(request: Request){
    try{
const body = await request.json()
const {title, content} = body

if(!title || !content) throw new Error('did not recieve the post request')
    const newTodo = await prisma.todo.create({
data:{
    title,
    content,
}
    })

    return Response.json({newTodo}, {status: 200})
    }catch(err){
        console.error(err, "can't fetch")
        return Response.json({message: 'eror occur'}, {status: 500})
    }

}