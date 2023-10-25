import React, { useState, useEffect } from 'react';

const ProfileSkeletonLoader = () => {
  const [loading, setLoading] = useState(true);
  const arr = [1, 2, 3, 4, 5, 6, 7]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" bg-white text-black dark:bg-black dark:text-white min-h-[80dvh]">
      {loading ? (
        <div className="p-5 sm:max-w-4xl mx-auto animate-pulse">
          <div className="flex gap-4 sm:gap-6">
            <div className="rounded-full w-20 sm:w-24 max-w-[15rem] aspect-square bg-black/10 dark:bg-white/10"></div>
            <div className="flex flex-col flex-grow justify-center">
              <div className="h-6 bg-black/10 dark:bg-white/10 rounded w-3/4"></div>
              <div className="h-4 bg-black/10 dark:bg-white/10 rounded w-1/2 mt-2"></div>
            </div>
          </div>

          <div>
            <div className="flex gap-4 sm:gap-6 mt-4">
              <div className="h-5 bg-black/10 dark:bg-white/10 rounded w-3/4"></div>
              <div className="h-5 bg-black/10 dark:bg-white/10 rounded w-1/4"></div>
            </div>
            <div className="flex gap-4 sm:gap-6 mt-2">
              <div className="h-5 bg-black/10 dark:bg-white/10 rounded w-1/4"></div>
              <div className="h-5 bg-black/10 dark:bg-white/10 rounded w-3/4"></div>
            </div>

          </div>

          <div className="flex space-x-3 mt-3 sm:mt-5">
            <div className="block  px-2 py-1  sm:px-3.5 sm:py-1 rounded-full text-xs sm:text-sm text-white bg-black/10 dark:bg-white/10 w-1/4 sm:w-1/6 h-5 sm:h-7"></div>
            <div className="block  px-2 py-1  sm:px-3.5 sm:py-1 rounded-full text-xs sm:text-sm text-white bg-black/10 dark:bg-white/10 w-1/4 sm:w-1/6 h-5 sm:h-7"></div>
          </div>


          <div className="mt-4 sm:mt-7 border border-neutral-300 dark:border-neutral-700 px-3 py-2 sm:px-6 sm:py-4 rounded-2xl space-y-4">
            {
              arr.map((item) => {
                return (
                  <div className="flex gap-4 mt-2" key={item}>
                    <div className="h-4 w-4 sm:h-5 sm:w-5 opacity-70 bg-black/10 dark:bg-white/10 rounded-full"></div>
                    <div className="text-sm sm:text-lg font-semibold bg-black/10 dark:bg-white/10 rounded w-1/4"></div>
                    <div className="text-sm sm:text-base bg-black/10 dark:bg-white/10 rounded w-1/2"></div>
                  </div>
                )
              })
            }
          </div>
          <div className="flex flex-wrap justify-start items-center gap-2 mt-4">
            <div className="flex items-center bg-black/10 dark:bg-white/10 border border-black/5 dark:border-white/5 space-x-1 sm:space-x-2 rounded-full px-2 py-1 sm:x-4 sm:py-2 text-sm w-1/4">
              <div className="h-4 w-4 sm:h-5 sm:-5  opacity-70 bg-black/10 dark:bg-white/10 rounded-full"></div>
              <div className="bg-black/10 dark:bg-white/10 rounded w-1/2"></div>
              <div className="bg-black/10 dark:bg-white/10 rounded w-1/4"></div>
            </div>
            <div className="flex items-center bg-black/10 dark:bg-white/10 border border-black/5 dark:border-white/5 space-x-1 sm:space-x-2 rounded-full px-2 py-1 sm:x-4 sm:py-2 text-sm w-1/4">
              <div className="h-4 w-4 sm:h-5 sm:-5  opacity-70 bg-black/10 dark:bg-white/10 rounded-full"></div>
              <div className="bg-black/10 dark:bg-white/10 rounded w-1/2"></div>
            </div>
            <div className="flex items-center bg-black/10 dark:bg-white/10 border border-black/5 dark:border-white/5 space-x-1 sm:space-x-2 rounded-full px-2 py-1 sm:x-4 sm:py-2 text-sm w-1/4">
              <div className="h-4 w-4 sm:h-5 sm:-5  opacity-70 bg-black/10 dark:bg-white/10 rounded-full"></div>
              <div className="bg-black/10 dark:bg-white/10 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-5 sm:max-w-4xl mx-auto">
          {/* Original code goes here */}
        </div>
      )}
    </div>
  );
};

export default ProfileSkeletonLoader;
