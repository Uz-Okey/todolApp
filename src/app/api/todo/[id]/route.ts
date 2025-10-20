import { prisma } from "@/app/utils/db";


export async function DELETE(_request:Request, {params}: {params: {id: string}}) {

    try{

    const deletetodo = await prisma.todo.delete({
        where:{
            id: params.id
        }
    })

    return Response.json(deletetodo, {status: 200})
    }catch(err){
        console.error(err, 'error in delete item')
        return Response.json({message: 'error'}, {status: 500})
    }
   

}

export async function PATCH(request : Request, {params} : {params: {id: string}}){
    try{
        const {completed} = await request.json()

        if(completed === undefined){
return new Response("missign completed field", {status: 400})
        }

          const updateTodo = await prisma.todo.update({
        where:{id : params.id},
        data: {completed}
    })

    return Response.json(updateTodo, {status: 200})
    }catch(err){
        console.error(err, 'error')
    }
  
}