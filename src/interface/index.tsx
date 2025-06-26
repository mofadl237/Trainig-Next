export interface IFarm {
    id ?:string;
  name: string;
  manager: {
    name: string;
    email: string;
  };
}

export interface IProduct{
  
  id :number;
  title: string;
  description:string;
  category:string;
  price :number;
  
  stock:number;
 
  thumbnail:string;
  

}