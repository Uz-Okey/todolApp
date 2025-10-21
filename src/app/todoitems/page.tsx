import { prisma } from "@/app/utils/db";
import CompletedButton from "@/app/components/CompletedButton";
import DeleteButton from "@/app/components/DeleteButton";

export const dynamic = "force-dynamic"; // 👈 Always fetch latest data

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      id: true,
      content: true,
      title: true,
      completed: true,
    },
  });
  return data;
}

export default async function TodoItems() {
  const data = await getData();

  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          className="border w-100 max-w-3xl mx-auto border-amber-600 p-3 mt-4 shadow-2xl"
        >
          <h1 className="font-bold font-serif">Title: {item.title}</h1>
          <div className="flex space-x-4 items-center">
            <CompletedButton id={item.id} completed={item.completed || false} />
            <p>{item.content}</p>
            <DeleteButton id={item.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
