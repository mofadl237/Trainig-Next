import LoadingProducts from "@/components/LoadingProducts";
import { Metadata } from "next";
import Link from "next/link";
import { ReactNode, Suspense } from "react";
export const metadata:Metadata= {
title:'Product Page',
description:'All Product Mobile Clothes'

}

interface IProps {
  children: ReactNode;
}

const layout = ({ children }: IProps) => {
  return (
    <div className="flex gap4  relative">
      <aside className="bg-green-500 text-white p-7 h-1/2 sticky top-0 left-0">
        <h2 className="text-red-600 border-b-1">Categories</h2>
        <ul>
          <li>
            <Link href="/">Clothes</Link>
          </li>
          <li>
            <Link href="/">Mobile</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
        </ul>
      </aside>
      <div className="">
        <Suspense fallback={<LoadingProducts />}>{children}</Suspense>
      </div>
    </div>
  );
};

export default layout;
