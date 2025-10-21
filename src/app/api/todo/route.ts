import { prisma } from "@/app/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const todos = await prisma.todo.findMany();
    return NextResponse.json(todos);
  } catch (err) {
    console.error("GET Error:", err);
    return NextResponse.json({ message: "Error fetching todos" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, content } = body;

    if (!title || !content) {
      return NextResponse.json({ message: "Title and content are required" }, { status: 400 });
    }

    const newTodo = await prisma.todo.create({
      data: { title, content },
    });

    return NextResponse.json(newTodo, { status: 201 });
  } catch (err) {
    console.error("POST Error:", err);
    return NextResponse.json({ message: "Error creating todo" }, { status: 500 });
  }
}
