import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useFontClass from "../../common/useFontClass";

const MediaComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  const {fontClass} = useFontClass();

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust as needed for real data loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="flex justify-center items-center my-16 text-black custom-height"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <div className="flex flex-col items-center max-w-[1070px] px-5 text-5xl max-md:text-xl">
        {isLoading ? (
          <>
            <h1 className="pb-2 w-full max-md:text-2xl">
              <Skeleton height={40} width="100%" />
            </h1>
            <div className="z-10 w-[300px] aspect-[1.2] max-md:mt-10">
              <Skeleton height={240} width="100%" />
            </div>
            <h2 className="self-stretch w-full max-md:text-xl">
              <Skeleton height={30} width="100%" />
            </h2>
          </>
        ) : (
          <>
            {/* <h1 className="pb-2 w-full max-md:text-2xl dark:text-gray-300 font-kantumruy">
              OOPs !!
            </h1> */}
            <dotlottie-player
              src="https://lottie.host/03df9954-6f65-4d9c-b7af-9715f03d5e22/c8XhGeEshe.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
              <h2 className={`self-stretch w-full max-md:text-xl text-4xl  dark:text-gray-300 ${fontClass}`}>
                Whoops! The Page is under <br />
                maintenance !!
              </h2>
          </>
        )}
      </div>
    </section>
  );
};

export default MediaComponent;
