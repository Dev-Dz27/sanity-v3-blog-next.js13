"use client"
import React, { ReactNode } from 'react';
import Link from 'next/link';
import {
   ArrowUturnLeftIcon,
   ArrowUpCircleIcon,
} from '@heroicons/react/24/solid';

export default function PostLayout({ children }: { children: ReactNode }) {
   return (
      <div>
         <div className="px-10 mb-10">
            <Link
               href="/"
               className=" flex items-center ">
               <ArrowUturnLeftIcon className="h-6 w-6 mr-2 " />
               Back to home page
            </Link>
         </div>
     
         {children}

         <div className="flex justify-center py-10">
            <a href="#top" aria-label="Read more about Seminole tax hike">
               <ArrowUpCircleIcon className="h-10 w-10 mb-10 " />
            </a>
         </div>
      </div>
   );
}