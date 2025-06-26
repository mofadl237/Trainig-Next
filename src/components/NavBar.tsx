"use client";

import { AlignJustify, Moon, SunMoon, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {  useState } from "react";

const NavBar = () => {
    //1- state
  const [theme, setTheme] = useState<"light" | "dark">("light");
const [mobileOpen,setMobileOpen]=useState(false)
const pathName =usePathname();
//2-handler
  const toggleTheme = () => {
   document.documentElement.classList.toggle('dark')
   if(theme == 'dark')  setTheme("light") 
    else setTheme('dark')
  };
  const MobileView =()=>{
    setMobileOpen(prev=>!prev);
  }
  //3-render
  return (
     <nav className="sticky top-0 z-50 bg-[var(--foreground)] text-[var(--background)]">
      <div className="mx-auto w-full md:w-[80%] flex justify-between  py-5 px-3">
        <h1 className="text-xl font-bold">Logo</h1>
        <button onClick={MobileView} className="block sm:hidden cursor-pointer">
          {mobileOpen ? <X size={24} /> : <AlignJustify size={24} />}
        </button>
        <ul
          className={`${
            mobileOpen ? "flex " : "hidden"
          } flex-col sm:flex  sm:flex-row gap-4 items-start sm:items-center absolute sm:static right-3 top-[4.5rem] sm:top-auto bg-[var(--foreground)] sm:bg-transparent p-4 sm:p-0 rounded-md shadow sm:shadow-none transition-all duration-300 w-[80%] sm:w-fit`}
        >
          <li className={` hover:border-b-2 w-full ${pathName == '/' ? "border-b-2 w-full":"border-none" }`}><Link href="/">Home</Link></li>
          <li className={`hover:border-b-2 w-full ${pathName == '/product' ?"border-b-2 w-full":"border-none" }`}><Link href="/product">Products</Link></li>
          <li className={`hover:border-b-2 w-full ${pathName == '/contact' ?"border-b-2 w-full":"border-none" }`}><Link href="/contact">Contact</Link></li>
          <button onClick={toggleTheme} className="cursor-pointer px-2 py-1 rounded-md border">
            {theme === 'dark' ? <SunMoon /> : <Moon />}
          </button>
        </ul>
        </div>
    
    </nav>
  );
};

export default NavBar;
