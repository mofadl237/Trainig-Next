import { NextResponse } from "next/server";

export async function GET(){
const {products} =await(await fetch('https://dummyjson.com/products')).json();
return NextResponse.json(products)
}