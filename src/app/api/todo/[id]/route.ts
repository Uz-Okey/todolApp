import { prisma } from "@/app/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params; // 👈 Notice the 'await' here
    const body = await request.json();
    const { completed, title, content } = body;

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { completed, title, content },
    });

    return NextResponse.json(updatedTodo, { status: 200 });
  } catch (error) {
    console.error("PATCH Error:", error);
    return NextResponse.json(
      { message: "An error occurred while updating the todo." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    await prisma.todo.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Todo deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json(
      { message: "Failed to delete todo." },
      { status: 500 }
    );
  }
}
