"use client";

import { AlignJustify, Moon, SunMoon, X } from "lucide-react";
import Link from "next/link";
import {  useState } from "react";

const NavBar = () => {
    //1- state
  const [theme, setTheme] = useState<"light" | "dark">("light");
const [mobileOpen,setMobileOpen]=useState(true)

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
        <div className="flex flex-col justify-end items-end">
        <span onClick={MobileView} className=' block sm:hidden cursor-pointer '>{mobileOpen ? <X /> :<AlignJustify />}</span>
        <ul className={`flex flex-col sm:flex-row gap-4 items-center  ${mobileOpen ? "flex":"hidden" }` }>
          <li ><Link href="/">Home</Link></li>
          <li><Link href="/product">Products</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <button onClick={toggleTheme} className="cursor-pointer px-2 py-1 rounded-md border">
            {theme === 'dark' ? <SunMoon /> : <Moon />}
          </button>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
