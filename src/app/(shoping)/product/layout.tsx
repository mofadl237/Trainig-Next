import LoadingProducts from "@/components/LoadingProducts";
import Link from "next/link";
import { ReactNode, Suspense } from "react"

interface IProps{
    children:ReactNode;
}

const layout = ({children}:IProps) => {
  return (
    <div className="flex gap4 ">
        
    <aside className="bg-green-500 text-white p-7">
        <h2 className="text-red-600 border-b-1">Categories</h2>
    <ul>
        <li>
            <Link  href='/'>Clothes</Link>
        </li>
        <li>
            <Link href='/'>Mobile</Link>
        </li>
        <li>
            <Link href='/'>Electronics</Link>
        </li>
    </ul>
    </aside>
    <Suspense fallback={<LoadingProducts/>}>
    {children}
    </Suspense>
    </div>
  )
}

export default layout