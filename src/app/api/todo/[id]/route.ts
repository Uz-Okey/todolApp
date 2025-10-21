import { prisma } from "@/app/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  try {
    const deletedTodo = await prisma.todo.delete({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json(deletedTodo, { status: 200 });
  } catch (err) {
    console.error(err, "Error deleting item");
    return NextResponse.json({ message: "Error occurred" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const updatedTodo = await prisma.todo.update({
      where: { id: params.id },
      data: body,
    });

    return NextResponse.json(updatedTodo, { status: 200 });
  } catch (err) {
    console.error(err, "Error updating item");
    return NextResponse.json({ message: "Error occurred" }, { status: 500 });
  }
}
