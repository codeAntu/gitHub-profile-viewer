import { useEffect, useState } from "react";
import "./index.css";
import "./App.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className=" bg-white text-black dark:bg-black dark:text-white">
      <div className="min-h-[100dvh] max-w-3xl mx-auto">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}
















// function App() {

//   const api = 'https://api.github.com/users';
//   const name = 'codeAntu';
//   const [data, setData] = useState<any>([]);

//   // const dataList = ["Created Date", "email", "public_repos", "public_gists", "twitter_username", "location", "id", "node_id", "type", "updated_at"];
//   // const dataValue = [data.created_at, data.email, data.public_repos, data.public_gists, data.twitter_username, data.location, data.id, data.node_id, data.type, data.updated_at];

//   const information = [{
//     "name": "Email",
//     "value": data.email,
//     "img": "/email.svg"
//   },
//   {
//     "name": "Id",
//     "value": data.id,
//     "img": "/id-solid.svg"
//   },
//   {
//     "name": "Twitter ",
//     "value": data.twitter_username,
//     "img": "/twitter.svg"
//   },
//   {
//     "name": "Public Repos",
//     "value": data.public_repos,
//     "img": "/repo.svg"
//   },
//   {
//     "name": "Public Gists",
//     "value": data.public_gists,
//     "img": "/git.svg"
//   },
//   {
//     "name": "Location",
//     "value": data.location,
//     "img": "/location.svg"
//   },
//   {
//     "name": "Joined",
//     "value": data.created_at,
//     "img": "/calendar-date-bold.svg"
//   },
//   {
//     "name": "Updated  Profile",
//     "value": data.updated_at,
//     "img": "/date.svg"
//   }];
//   console.log(data);

//   useEffect(() => {
//     fetchApi(api + '/' + name)
//   }, []);

//   async function fetchApi(api: string) {
//     try {
//       const response = await fetch(api);
//       const data = await response.json();
//       // console.log(data);
//       setData(data);
//       return data;
//     }
//     catch (error) {
//       console.log(error);
//     }

//   }

//   return (
//     <div className=" bg-white dark:bg-black ">
//       <div className="p-5  sm:max-w-4xl mx-auto min-h-[100dvh] bg-white text-black dark:bg-black dark:text-white">
//         <div className="flex  gap-6">
//           <img src={data.avatar_url} alt="" className="rounded-full w-24  max-w-[15rem]  aspect-square" />
//           <div className="flex flex-col  flex-grow justify-center  ">
//             <h1 className="text-3xl font-semibold " >{data.name}</h1>
//             <a href={data.html_url} target="_blank" className="font-semibold   text-blue-500 " >{data.login}</a>
//           </div>
//         </div>
//         <div className="">
//           <p className="mt-4 flex  leading-tight ">{data.bio}</p>
//         </div>

//         <div className="flex  space-x-3 mt-5" >
//           <a href=" " className="block bg-blue-600 px-3.5 py-0.5 rounded-xl text-sm"> Flowers : {data.followers}</a>
//           <a href="" className="block bg-blue-600 px-3.5 py-0.5 text-sm rounded-xl"> Flowing : {data.following}</a>

//         </div>

//         <div className="  my-7  border-gray-800  border px-6 py-4 rounded-2xl ">
//           {
//             information.map((info) => {
//               return (
//                 <div className="flex  gap-4 mt-2">
//                   <img src={info.img} alt="" className="dark:invert h-5 w-5 opacity-75" />
//                   <p className="font-semibold">{info.name} : </p>
//                   <p className="">{info.value}</p>
//                 </div>
//               )
//             })
//           }
//         </div>
//         <div className="flex space-x-4">
//           <div className="flex bg-white/20   space-x-2 rounded-full px-4 py-2 text-sm ">
//             <img src="/git-repository-line.svg " alt="" className="h-5 w-5 dark:invert" />
//             <a href="">Repositories</a>
//             <p>{data.public_repos}</p>
//           </div>
//           <div className="flex bg-white/20 space-x-2 rounded-full px-4 py-2 text-sm">
//             <img src="/organization-16.svg " alt="" className="h-4 w-4 dark:invert" />
//             <a href="">Organizations</a>
//           </div>
//           <div className="flex bg-white/20 space-x-2 rounded-full px-4 py-2 text-sm">
//             <img src="/star-bold.svg " alt="" className="h-4 w-4 dark:invert" />
//             <a href="">Starred</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// function App() {

//   const api = 'https://api.github.com/users';
//   const name = 'codeAntu';


//   const followersApi = api + '/' + name + '/followers';
//   const [followersData, setFollowersData] = useState<any>([]);

//   console.log(followersData);

//   async function fetchFollowersApi(api: string) {
//     try {
//       const response = await fetch(api);
//       const data = await response.json();
//       setFollowersData(data);
//       console.log(data);

//       return data;
//     }
//     catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     fetchFollowersApi(followersApi)
//   }, []);

//   return (
//     <div className=" dark:bg-black dark:text-white ">
//       <div className="p-5 min-h-[100dvh] sm:max-w-3xl mx-auto ">
//         <div className="flex  items-center  my-4 space-x-3">
//           <img src="/back.svg " alt="" className="h-7 w-7 dark:invert" />
//           <h1 className="text-2xl font-semibold  block "><span className="opacity-50">{name} /</span> followers</h1>

//         </div>
//         <div className="space-y-3">
//           {
//             followersData.map((follower: any) => {
//               return (
//                 <div className="flex justify-between rounded-2xl bg-white/5 border border-white/10">
//                   <div className="flex  p-3  space-x-6">
//                     <img src={follower.avatar_url} alt="" className="h-14 aspect-square rounded-full  " />
//                     <div className="">
//                       <h1 className="text-lg  font-semibold ">{follower.login}</h1>
//                       <h1 className="text-sm opacity-50">{follower.id}</h1>
//                     </div>

//                   </div>

//                   <a href={follower.html_url} target="_blank" className="block " >
//                     <img src="/open.svg " alt="" className="h-5 w-5 dark:invert m-4 " />
//                   </a>
//                 </div>
//               )
//             })
//           }
//         </div>
//       </div>
//     </div>
//   );
// }























export default App;



// repos_url
// : 
// "https://api.github.com/users/codeAntu/repos"


// organizations_url
// : 
// "https://api.github.com/users/codeAntu/orgs"

// starred_url
// : 
// "https://api.github.com/users/codeAntu/starred{/owner}{/repo}"

// received_events_url
// : 
// "https://api.github.com/users/codeAntu/received_events"



// subscriptions_url
// : 
// "https://api.github.com/users/codeAntu/subscriptions"

// url
// : 
// "https://api.github.com/users/codeAntu"
// [[Pro
