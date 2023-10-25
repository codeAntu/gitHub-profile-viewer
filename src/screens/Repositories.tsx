
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import RepositoriesSkeletonLoader from './RepositoriesSkeletonLoader.tsx'

export default function Repositories() {

  const api = 'https://api.github.com/users/';
  const params = useParams();
  const name = params.profile;
  const [data, setData] = useState<any>([]); //data is an array of objects
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    getRepositories();
  }, [])

  async function getRepositories() {
    const response = await fetch(`${api}${name}/repos`);
    const data = await response.json();
    setData(data);
    setIsLoading(false);

    console.log(data);
  }
  console.log(data);
  // console.log(data[0].archive_url);


  function goBack() {
    navigate(-1);
  }

  if (isLoading || data.length === 0) {
    return (
      < RepositoriesSkeletonLoader />
    )
  }

  // function gitCopy() {

  // }


  return (
    <div className='bg-white text-black  dark:bg-black dark:text-white  min-h-[75dvh] p-5   sm:max-w-3xl mx-auto '>
      <div className="flex  items-center mb-4 sm:mb-8 space-x-3  ">
        <img src="/back.svg " alt="" className="h-6 w-6 sm:h-7 sm:w-7  dark:invert" onClick={goBack} />
        <h1 className="text-xl sm:text-2xl font-semibold  block "><span className="opacity-50">{name} /</span> repositories</h1>

      </div>

      <div className='space-y-3 sm:space-y-4'>
        {
          data.map((item: any) => {
            return (
              <div key={item.id} className='rounded-2xl border bg-black/5 border-x-black/10 dark:bg-white/5  dark:border-white/10 space-y-2 p-3'>
                <div className='flex justify-between'>
                  <h1 className='text-xl sm:text-2xl text-blue-600 font-semibold '>{item.name}</h1>
                  <button onClick={() => { navigator.clipboard.writeText(item.clone_url) }} ><img src="/copy.svg" alt="" className='h-5 w-5 opacity-50 dark:invert mr-1 sm:mr-2 ' /></button>
                </div>

                <h1 className='text-sm'>{item.description}</h1>
                <div className='flex flex-wrap items-center gap-2 ' >
                  <h1 className='flex bg-black/5 border border-black/5 dark:bg-white/5   dark:border-white/5  space-x-2 rounded-full  text-xs sm:text-sm px-3 py-1'>Lan : {item.language}</h1>
                  <h1 className='flex bg-black/5 border border-black/5 dark:bg-white/5   dark:border-white/5  space-x-2 rounded-full  text-xs sm:text-sm px-3 py-1'>Strangers : {item.stargazers_count}</h1>
                  <h1 className='flex bg-black/5 border border-black/5 dark:bg-white/5   dark:border-white/5  space-x-2 rounded-full  text-xs sm:text-sm px-3 py-1'>Forks : {item.forks_count}</h1>
                  <h1 className='flex bg-black/5 border border-black/5 dark:bg-white/5   dark:border-white/5  space-x-2 rounded-full  text-xs sm:text-sm px-3 py-1' >watch : {item.watchers_count}</h1>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>

  )
}
