import React, { useState, useEffect } from 'react';

const RepositoriesSkeletonLoader = () => {
  const [loading, setLoading] = useState(true);
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (

    <div className="bg-white text-black dark:bg-black dark:text-white min-h-[80dvh] p-5 sm:max-w-3xl mx-auto">
      <div className='flex items-center mb-4 sm:mb-8 space-x-3'>
        <div className="h-6 w-6 sm:h-7 sm:w-7  bg-black/10 dark:bg-white/10 rounded-full"></div>
        <div className='bg-black/10 dark:bg-white/10 h-6 w-1/4 sm:h-8 sm:w-1/5 rounded-2xl'></div>
        <div className='bg-black/10 dark:bg-white/10 h-6 w-1/4 sm:h-8 sm:w-1/5 rounded-2xl'></div>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {
          arr.map((item: number) => {
            return (
              <div className="rounded-2xl border bg-black/5 border-x-black/10 dark:bg-white/5 dark:border-white/10 space-y-2 p-3 animate-pulse" key={item}>
                <div className='bg-black/10 dark:bg-white/10 h-6 w-1/3 sm:h-8 sm:w-1/5 rounded-2xl'></div>
                <div className='h-4 bg-black/5 dark:bg-white/5 rounded w-full'></div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className=" bg-black/5 border border-black/5 dark:bg-white/5 dark:border-white/5  rounded-full text-xs sm:text-sm h-4 w-1/5 sm:h-6 sm:w-1/6 "></div>
                  <div className=" bg-black/5 border border-black/5 dark:bg-white/5 dark:border-white/5  rounded-full text-xs sm:text-sm h-4 w-1/5 sm:h-6 sm:w-1/6 "></div>
                  <div className=" bg-black/5 border border-black/5 dark:bg-white/5 dark:border-white/5  rounded-full text-xs sm:text-sm h-4 w-1/5 sm:h-6 sm:w-1/6 "></div>
                  <div className=" bg-black/5 border border-black/5 dark:bg-white/5 dark:border-white/5  rounded-full text-xs sm:text-sm h-4 w-1/5 sm:h-6 sm:w-1/6 "></div>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  );
};

export default RepositoriesSkeletonLoader;
