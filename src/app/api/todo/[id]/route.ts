import { prisma } from "@/app/utils/db";
import { NextRequest, NextResponse } from "next/server";

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



export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const body = await request.json();

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: body,
  });

  return NextResponse.json(updatedTodo);
