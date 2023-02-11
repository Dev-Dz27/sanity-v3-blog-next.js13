import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { MoonIcon } from "@heroicons/react/24/solid";

function Banner() {
  const { theme, setTheme } = useTheme();

  return (
    
      <div >
               
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Youcef's Daily Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to {""}
          <span className="underline decoration-4 decoration-[#F7AB0A]  ">
            favourite blog in the world
          </span>
        </h2>
      </div>
      
      <div >
        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
          New product features | The latest in technology | The weekly debugging
          nightmares & Much more
        </p>

      </div>
    </div>
    </div>
  );
}

export default Banner;
