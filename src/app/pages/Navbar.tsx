

import Link from "next/link";
export default function Navbar() {

  
    return (
        <div className={`flex  duration-1000 sm:mt-3 mt-4 sm:mb-2 mb-15 transition-all ease-in-out p-2 md:p-8 justify-between items-center mx-auto`}>
            <div className="font-bold text-2xl">
                <Link href='/'>
                    <h1>My <span className="font-serif text-amber-600">TODO</span></h1>
                </Link>

            </div>

            <div className="flex space-x-2">
                <Link className="bg-black shadow-2xs rounded-sm py-1 px-2 text-white" href='/todoform'>Create Todo</Link>
                <Link className="bg-white  border border-amber-600 shadow-2xs rounded-sm text-black py-1 px-2" href='/todoitems'>My Todo list</Link>
            </div>
        </div>
    )
}