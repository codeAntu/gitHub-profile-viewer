import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ProfileSkeletonLoader from './ProfileSkeletonLoader.tsx'

function Profile() {
  const params = useParams();
  const api = 'https://api.github.com/users';
  const name = params.profile;
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const information = [{
    "name": "Email",
    "value": data.email,
    "img": "/email.svg",
    "key": "email"
  },
  {
    "name": "Id",
    "value": data.id,
    "img": "/id-solid.svg",
    "key": "id"
  },
  {
    "name": "Twitter ",
    "value": data.twitter_username,
    "img": "/twitter.svg",
    "key": "twitter_username"
  },
  {
    "name": "Public Repos",
    "value": data.public_repos,
    "img": "/repo.svg",
    "key": "public_repos"
  },
  {
    "name": "Public Gists",
    "value": data.public_gists,
    "img": "/git.svg",
    "key": "public_gists"
  },
  {
    "name": "Location",
    "value": data.location,
    "img": "/location.svg",
    "key": "location"

  },
  {
    "name": "Joined",
    "value": data.created_at,
    "img": "/calendar-date-bold.svg",
    "key": "created_at"
  },
  {
    "name": "Updated  Profile",
    "value": data.updated_at,
    "img": "/date.svg",
    "key": "updated_at"
  }];



  useEffect(() => {
    fetchApi(api + '/' + name)
  }, [name]);

  async function fetchApi(api: string) {
    try {
      setIsLoading(true);
      const response = await fetch(api);
      const data = await response.json();
      setIsLoading(false);
      console.log(data);
      setData(data);
      return data;
    }
    catch (error) {
      console.log(error);
    }

  }

  if (isLoading || data.length === 0) {
    return (
      <ProfileSkeletonLoader />
    )
  }

  if (data.message === "Not Found") {
    return (
      <div className="flex justify-center items-center b0 min-h-[70dvh] max-w-3xl m-4 text-lg font-semibold">
        {name} not found
      </div>
    )
  }


  return (
    <div className=" bg-white text-black dark:bg-black dark:text-white min-h-[75dvh]">
      <div className="p-5 sm:max-w-4xl mx-auto ">
        <div className="flex gap-4 sm:gap-6">
          <img src={data.avatar_url} alt="" className="rounded-full w-20 sm:w-24  max-w-[15rem]  aspect-square" />
          <div className="flex flex-col  flex-grow justify-center  ">
            <h1 className=" text-xl sm:text-3xl font-semibold " >{data.name}</h1>
            <a href={data.html_url} target="_blank" className="font-semibold  text-blue-600 " >{data.login}</a>
          </div>
        </div>
        <div className="">
          <p className="mt-2 sm:mt-4 flex leading-tight text-sm sm:text-xl">{data.bio}</p>
        </div>

        <div className="flex  space-x-3  mt-3 sm:mt-5" >
          < Link to="followers" className="block bg-blue-600 px-2 py-1 sm:px-3.5 sm:py-1 rounded-full text-xs sm:text-sm text-white"> Flowers : {data.followers}</Link>
          <Link to="following" className="block bg-blue-600 px-2 py-1 sm:px-3.5 sm:py-1 rounded-full text-xs sm:text-sm text-white"> Following : {data.following}</Link>

        </div>

        <div className="my-4 sm:my-7 border border-neutral-300 dark:border-neutral-700 px-3 py-2  sm:px-6 sm:py-4 rounded-2xl ">
          {
            information.map((info) => {
              return (
                <div className="flex  gap-4 mt-2 " key={info.key}>
                  <img src={info.img} alt="" className="dark:invert h-4 w-4 sm:h-5 sm:w-5 opacity-70" />
                  <p className=" text-sm sm:text-lg font-semibold">{info.name} : </p>
                  <p className=" text-sm sm:text-base ">{info.value}</p>
                </div>
              )
            })
          }
        </div>
        <div className="flex flex-wrap justify-start items-center gap-2 ">
          <div className="flex items-center bg-black/10 dark:bg-white/10 border border-black/5  dark:border-white/5 space-x-1 sm:space-x-2 rounded-full px-2 py-1 sm:x-4 sm:py-2 text-sm ">
            <img src="/git-repository-line.svg " alt="" className="h-4 w-4 sm:h-5 sm:-5 dark:invert opacity-70" />
            <Link to="repositories">Repositories</Link>
            <p>{data.public_repos}</p>
          </div>
          <div className="flex items-center bg-black/10 dark:bg-white/10 border border-black/5  dark:border-white/5 space-x-1 sm:space-x-2 rounded-full px-2 py-1 sm:x-4 sm:py-2 text-sm ">
            <img src="/organization-16.svg " alt="" className="h-4 w-4 sm:h-5 sm:-5 dark:invert opacity-70" />
            <a href="">Organizations</a>
          </div>
          <div className="flex items-center bg-black/10 dark:bg-white/10 border border-black/5  dark:border-white/5 space-x-1 sm:space-x-2 rounded-full px-2 py-1 sm:x-4 sm:py-2 text-sm ">
            <img src="/star-bold.svg " alt="" className="h-4 w-4 sm:h-5 sm:-5 dark:invert opacity-70" />
            <a href="">Starred</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
