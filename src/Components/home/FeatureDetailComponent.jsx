import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// No need for React.memo if there are no props or performance issues
const FeatureDetailComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust based on your data fetching needs

    return () => clearTimeout(timer);
  }, []);
  const { t } = useTranslation();

  return (
    <>
      <section className="flex flex-col justify-center items-center py-16 max-w-full">
        {isLoading ? (
          <>
            <Skeleton height={40} width={300} className="mb-4" />
            <Skeleton height={20} count={2} width={600} className="mb-4" />
            <Skeleton height={400} width={800} className="aspect-[6.25]" />
          </>
        ) : (
          <>
            <h2 className="self-center text-center text-2xl md:text-4xl leading-6 text-black dark:text-white">
              {t("FeatureSection.heading")}
            </h2>
            <article className="flex flex-col mt-8 md:mt-12 text-sm md:text-base text-neutral-600 dark:text-neutral-300 max-md:pl-5">
              <p className="text-center px-6 md:px-20 lg:px-40">
                {t("FeatureSection.description")}
              </p>
            </article>

            <div className="flex justify-center items-center w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc4ff153c8a8e5bf9c98136fb6d8ed297c3d759da1126d945096b3c29a7d7654?apiKey=ff00f11844934b2d9618929d5184b9ad&"
                className="self-start mt-3 w-[800px] aspect-[6.25] max-md:max-w-full"
                alt="Feature on media coverage"
              />
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default FeatureDetailComponent;
