
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function header() {
  // const [userName, setUserName] = React.useState('');
  const navigate = useNavigate();



  function search(e: React.KeyboardEvent<HTMLInputElement>) {
    const event = e.nativeEvent;
    console.log(event.key);
    // @ts-ignore
    console.log(e.target.value);
    if (event.key === "Enter") {
      // @ts-ignore
      e.target.blur();
      // @ts-ignore

      navigate("/" + e.target.value)

    }
  }
  return (
    <div className='flex justify-center items-center pt-7 px-4 pb-2 w-full '>
      <div className='flex pl-3.5 justify-start items-center bg-black/5 border border-black/10 text-black dark:bg-white/5 dark:border-white/10 dark:text-white rounded-xl   max-w-3xl  w-full'>
        <img src="/search.svg " alt="" className=' dark:invert  h-5 sm:h-6 aspect-square opacity-70' />

        <input type="text" className="flex-grow outline-none bg-transparent pl-2.5  text-sm py-2.5 p" placeholder='Enter User Name' onKeyDown={search} onFocus={(e) => {
          // @ts-ignore
          e.nativeEvent.target.select()
        }}
        />

      </div>
    </div>
  )

}
