function Banner() {

  return (    
      <div >         
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Youcef's Daily Blog</h1>
        <h2 className="mt-5 md:mt-2">
          Welcome to {""}
          <span className="underline decoration-4 decoration-purple">
            favourite blog in the world
          </span>
        </h2>
      </div>
      
      <div >
        <p className="mt-5 md:mt-2  max-w-sm">
          New product features | The latest in technology | The weekly debugging
          nightmares & Much more
        </p>

      </div>
    </div>
    </div>
  );
}

export default Banner;
