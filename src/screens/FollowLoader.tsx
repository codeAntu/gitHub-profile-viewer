import React, { useState, useEffect } from 'react';

const FollowingSkeletonLoader = () => {
  const [loading, setLoading] = useState(true);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" dark:bg-black dark:text-white min-h-[80dvh]">
      {loading ? (
        <div className="p-5 sm:max-w-3xl mx-auto animate-pulse">
          <div className='flex items-center mb-4 sm:mb-8 space-x-3'>

            <div className="h-6 w-6 sm:h-7 sm:w-7  bg-black/10 dark:bg-white/10 rounded-full"></div>
            <div className='bg-black/10 dark:bg-white/10 h-6 w-1/4 sm:h-8 sm:w-1/5 rounded-2xl'></div>
            <div className='bg-black/10 dark:bg-white/10 h-6 w-1/4 sm:h-8 sm:w-1/5 rounded-2xl'></div>

          </div>
          <div className="space-y-3 sm:space-y-3">
            {
              arr.map((item) => {
                return (
                  <div className="flex justify-between rounded-2xl bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10" key={item}>
                    <div className="flex p-2.5 sm:p-3 space-x-3 sm:space-x-6 w-full">
                      <div className="h-14 sm:h-16  aspect-square rounded-full bg-black/5 dark:bg-white/5 "></div>
                      <div className="flex flex-col justify-center w-full">
                        <div className="bg-black/10 dark:bg-white/10 h-5 sm:w-1/4 w-1/2 rounded-xl"></div>
                        <div className=" bg-black/5 dark:bg-white/5  sm:w-1/6 h-4 mt-1 w-1/3 rounded-xl" ></div>

                      </div>
                    </div>
                    <div className="block bg-black/5 dark:bg-white/5 rounded-full h-8 w-8 m-3 sm:m-4"></div>
                  </div>

                )
              })
            }
          </div>
        </div>
      ) : (
        <div className=" dark:bg-black dark:text-white min-h-[80dvh]">
          {/* Original code goes here */}
        </div>
      )}
    </div>
  );
};

export default FollowingSkeletonLoader;
