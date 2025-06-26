
import {  IProduct } from "@/interface";
import Image from "next/image";
import Link from "next/link";

//Meta data
import type { Metadata } from 'next'
 
type Props = {
  params: Promise<{ id: string }>
}
 
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const id = (await params).id
 
  // fetch post information
  const {title ,description} = await fetch(`https://dummyjson.com/products/${id}`).then((res) =>
    res.json()
  )
 
  return {
    title,
    description,
  }
}

interface IProps{
    params:{
        id:string;
    }
}
const getData = async( id:string)=>{
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if(!res.ok) throw new Error(`Failed Fetch Product ${id}`);
    return res.json();
}
const page = async({params}:IProps) => {
    
  //  throw new Error("New Error")
   const product:IProduct = await getData(params.id);

  return (
    <div className="w-full sm:w-[80%] mx-auto ">
        <Link   href='/product' className="bg-green-700 text-white rounded-md my-3 w-20 py-5 mx-auto block text-center">Back</Link>
       <div className="bg-red-400 py-5 px-3 text-white border shadow-md  rounded-md">
         <h3>Product Id --- {product.id} </h3>
         <h3>Product Title --- {product.title} </h3>
         <h3>Product Description --- {product.description} </h3>
         <Image src={product.thumbnail} alt={product.title} width='300' height='200' />
       </div>

    </div>
  )
}

export default page
