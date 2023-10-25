import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import FollowingSkeletonLoader from './FollowLoader.tsx'

function Following() {

  const api = 'https://api.github.com/users';
  const params = useParams();
  const name = params.profile;
  console.log(name);
  const navigate = useNavigate();
  const FollowingApi = api + '/' + name + '/following';
  const [FollowingData, setFollowingsData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);


  console.log(FollowingData);

  async function fetchFollowingsApi(api: string) {
    try {
      const response = await fetch(api);
      const data = await response.json();
      setFollowingsData(data);
      setIsLoading(false);

      console.log(data);
      return data;
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchFollowingsApi(FollowingApi)
  }, []);

  function goBack() {
    navigate(-1);
  }

  if (isLoading || FollowingData.length === 0) {
    return (
      < FollowingSkeletonLoader />
    )
  }



  return (
    <div className=" dark:bg-black dark:text-white min-h-[75dvh]">
      <div className="p-5  sm:max-w-3xl mx-auto  ">
        <div className="flex  items-center mb-5 sm:mb-8 space-x-3">
          <img src="/back.svg " alt="" className="h-6 w-6 sm:h-7 sm:w-7 dark:invert" onClick={goBack} />
          <h1 className="text-xl sm:text-2xl font-semibold  block "><span className="opacity-50">{name} /</span> following</h1>

        </div>
        <div className="space-y-3 sm:space-y-3">
          {
            FollowingData.map((Following: any) => {
              return (
                <div className="flex justify-between rounded-2xl bg-black/5 border border-black/10 dark:bg-white/5  dark:border-white/10 " key={Following.id}>
                  <div className="flex  p-2.5 sm:p-3  space-x-3 sm:space-x-6">
                    <img src={Following.avatar_url} alt="" className="h-14 sm:h-16 aspect-square rounded-full  " />
                    <div className="">
                      <Link to={"/" + Following.login} className="text-base sm:text-lg  font-semibold ">{Following.login}</Link>

                      <h1 className="text-xs sm:text-smg opacity-50">{Following.id}</h1>
                    </div>

                  </div>

                  <a href={Following.html_url} target="_blank" className="block " >
                    <img src="/open.svg " alt="" className="h-5 w-5 dark:invert m-3 sm:m-4 " />
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Following;
