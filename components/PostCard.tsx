import React from 'react';
import Image from 'next/image';
import urlFor from '../lib/urlFor';
import { nanoid } from 'nanoid';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

interface Props {
   post: Post;
}

const PostCard = ({ post }: Props) => {
   return (
      <div className="relative flex flex-col group cursor-pointer z-0">
         <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
            <Image
               className="object-cover object-left lg:object-center"
               src={urlFor(post.mainImage).url()}
               alt={post.author.name}
               fill
            />
            <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
               <div>
                  <p className="font-bold  break-words">
                     {post.title}
                  </p>
                  <p className="text-white">
                     {new Date(post._createdAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                     })}
                  </p>
               </div>
               <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                  {post.categories?.map((category) => (
                     <div
                        key={nanoid()}
                        className=" bg-purple-500 text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                        <p>#{category.title}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         <div className="mt-5 flex-1">
            <p className="underline text-lg  font-bold">
               {post.title}
            </p>
            <p className="line-clamp-2 text-grey-500 ">
               {post.description}
            </p>
         </div>
         <p className="mt-5  flex items-center group-hover:underline hover:text-purple-700 transition duration-200 ">
            Read Post
            <ArrowUpRightIcon className="ml-2 w-4 h-4" />
         </p>
         <div className=" bg-[#F7AB0A] w-[30%] h-[30%] bottom-[50%] top-[50%] -z-10" />
         
      </div>
   );
};

export default PostCard;