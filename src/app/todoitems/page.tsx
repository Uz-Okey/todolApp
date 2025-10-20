import { prisma } from "@/app/utils/db"
import Completed from "@/completed/page"
import Deleteitem from "../deleteitem/page"
async function getData() {
    const data = await prisma.todo.findMany({
        select: {
            id: true,
            content: true,
            title: true,
            completed: true
        }
    })

    return data
}

export default async function todoitems() {
    const data = await getData()
    return (
        <div>
            {data.map((item) => (
                <div key={item.id} className="border w-100 max-w-3xl mx-auto border-amber-600 p-2 mt-4 shadow-2xl">
                    <h1 className="font-bold font-serif"> Title:   {item.title}</h1>

                    <div className="flex space-x-4 ">
                        <div>
                            <Completed id={item.id} completed={item.completed || false} />
                        </div>


                        <p>
                            {item.content}
                        </p>

                        <Deleteitem id={item.id} />
                    </div>


                </div>
            ))}
        </div>
    )
}