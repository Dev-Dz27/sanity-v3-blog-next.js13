import Image from "next/image";
import Link from "next/link";

function Header() {

  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
         
      <div className="flex items-center space-x-2 ">
        <Link href="/">
          <Image
            src="/logo.png"
            width={50}
            height={50}
            className="rounded-full"
            alt="logo"
          />
        </Link>
        <h1 className="">the Starter Blog</h1>
      </div>

      <div className="">
        <Link
          href="https://www.instagram.com/cysi__"
          className="px-5 py-3 text-sm md:text-base bg-black bg-opacity-90  text-white dark:bg-white dark:text-black  flex items-center rounded-full text-center"
        >
          Dm me on Instagram
        </Link>
      </div>
     
    </header>
  );
}

export default Header;
