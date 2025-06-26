import Product from "@/components/Product";
import {  IProduct } from "@/interface";
import Link from "next/link";




const getData = async ()=>{
    const res = await fetch(`http://localhost:3000/api/products`)
    if(!res.ok) throw new Error ("Failed Fetch Data")
    return res.json()
}

const page = async() => {
    const products:IProduct[]  =await getData();
  return (
    <div className="w-full sm:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3">
      
      {
        products.map(product => (<Link key={product.id} href={`/product/${product.id}`}>
        <Product
          product={product}
        />
      </Link>))
      }
      
      
     
    </div>
  );
};

export default page;
