import { useEffect, useState } from "react";
import Profile from "./Profile";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-[75dvh] m-5">

      <div className="py-8 sm:py-12  space-y-4   text-center ">
        <div className="text-3xl font-medium flex justify-center gap-2 ">Hello , I am<span className="text-blue-600 flex flex-col  "> Ananta<img src="./underline.svg" alt="" className="w-24 h-5 inline -mt-2" /></span> </div>
        <p className="text-xl">And this is my first React project </p>
      </div>

      {/* <About></About> */}
      <div className="space-y-3 sm:space-y-4 text-sm sm:text-lg">
        <p>Welcome to this GitHub profile viewer, elegantly designed with React and adorned with Tailwind CSS.</p>
        <p>This project seamlessly harnesses the GitHub API to showcase user data. You can explore it by entering a GitHub username or using the example button.</p>
        <p>It showcases the data like the user's name, bio, profile pic , followers, following, repositories, etc.. .</p>
        <p>I've even added a charming Shimmer UI  and a stylish dark mode for comfortable viewing.</p>
        <p>For those eager to delve into the project's inner workings,, the <a href="https://github.com/codeAntu/gitHub-profile-viewer" target="_blank" className=" text-blue-600 underline underline-offset-2">Source Code</a> is available on my   GitHub account.</p>

        <p>Enjoy a delightful GitHub experience with our project!</p>
      </div>
      <div className="flex justify-center items-center mt-16">
        <Link to="codeAntu" className="bg-blue-600 px-2 py-1 sm:px-4 sm:py-2 border border-blue-600 rounded-full text-white font-semibold">See an Example</Link>
      </div>





    </div>

  );


}
