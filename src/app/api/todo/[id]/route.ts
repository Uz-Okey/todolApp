import { prisma } from "@/app/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;

    const deletedTodo = await prisma.todo.delete({
      where: { id },
    });

    return NextResponse.json(deletedTodo, { status: 200 });
  } catch (err) {
    console.error("Error deleting todo:", err);
    return NextResponse.json({ message: "Error deleting todo" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const body = await request.json();

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(updatedTodo, { status: 200 });
  } catch (err) {
    console.error("Error updating todo:", err);
    return NextResponse.json({ message: "Error updating todo" }, { status: 500 });
  }
}
