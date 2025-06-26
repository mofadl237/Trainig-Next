import {  IProduct } from "@/interface"


interface IProps{
    // farm:IFarm
    product:IProduct
}
const Product = ({product}:IProps) => {
    
  return (
    <div className="border-1 shadow p-5 bg-amber-300 cursor-pointer text-white  rounded-md">
        <h3> productID - {product.id}</h3>
        <h5>product Title - {product.title}</h5>
        <h5>product Price - {product.price}</h5>
        {/* <Image src={product.thumbnail}  alt={product.title}  /> */}
    </div>
  )
}

export default Product