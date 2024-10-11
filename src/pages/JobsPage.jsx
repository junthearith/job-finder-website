import React, { useEffect, useCallback, useState } from "react";
import { Pagination } from "../Components/card/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchJobs,
  selectCurrentPage,
  selectPageSize,
  selectJobs,
  selectTotalJobs,
  selectDataBySearch,
  clearSearchResults,
  selectJobsByCategory,
  fetchJobsByCategory,
  setPage,
  clearJobsByCategory,
} from "../redux/jobs/jobsSlice";
import { CardComponent } from "../Components/feat-jobs/CardComponent";
import AOS from "aos";
import "aos/dist/aos.css";
import useThrottleScroll from "../common/useThrottleScroll";
import SearchComponent from "../Components/home/SearchComponent";
import { useTranslation } from "react-i18next";
import useFontClass from "../common/useFontClass";
import {
  fetchJobCategories,
  selectAllJobCategories,
} from "../redux/features/category-job/categorySlice";
import { Metadata } from "../lib/Metadata";

const JobsPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const jobs = useSelector(selectJobs);
  const jobsByCategory = useSelector(selectJobsByCategory);
  const searchResults = useSelector(selectDataBySearch) || [];
  const currentPage = useSelector(selectCurrentPage);
  const pageSize = useSelector(selectPageSize);
  const totalJobs = useSelector(selectTotalJobs);
  const status = useSelector((state) => state.jobs.status);
  const categories = useSelector(selectAllJobCategories);
  const { fontClass } = useFontClass();
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const savedCategory = localStorage.getItem("selectedCategory");
    const savedScrollPosition = localStorage.getItem("scrollPosition");

    if (savedCategory) {
      setSelectedCategory(savedCategory);
      dispatch(fetchJobsByCategory(savedCategory));
    } else {
      dispatch(fetchJobs({ page: currentPage, pageSize }));
    }

    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }
  }, [dispatch, currentPage, pageSize]);

  useEffect(() => {
    dispatch(fetchJobCategories());
  }, [dispatch]);

  useEffect(() => {
    AOS.refresh();
  }, [jobs]);

  useEffect(() => {
    return () => {
      dispatch(clearSearchResults());
    };
  }, [dispatch]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    localStorage.setItem("selectedCategory", categoryId);

    if (categoryId) {
      dispatch(fetchJobsByCategory(categoryId));
    } else {
      dispatch(clearJobsByCategory());
      dispatch(fetchJobs({ page: 1, pageSize }));
      dispatch(setPage(1));
    }
  };

  const handleSearch = (searchQuery) => {
    if (searchQuery) {
      // Handle search functionality
    } else {
      dispatch(fetchJobs({ page: currentPage, pageSize }));
    }
  };

  const saveScrollPosition = useCallback(() => {
    localStorage.setItem("scrollPosition", window.scrollY);
  }, []);

  useThrottleScroll(saveScrollPosition, 200);

  return (
    <section>
      <Metadata
        title="Job Listing"
        description="Browse a wide range of job listings at Job Quick. Discover the latest job opportunities, apply for your ideal position, and advance your career with our user-friendly platform."
        author="Job Quick Team"
        keywords="job listings, job opportunities, careers, job search, job portal, apply for jobs, find jobs, employment, career advancement, online job search"
        thumbnail="https://job-quick-api.techinsights.guru/media/uploads/hero-section.png"
        url="https://jobquick.techinsights.guru/jobs"
        type="website"
      />
      <header className="mt-20">
        <h1 className={`${fontClass} text-blue-600 font-kantumruy text-4xl text-start font-bold`}>
          {t("List-Jobs.List")}
        </h1>
      </header>
      <SearchComponent
        categories={categories}
        isLoading={status === "loading"}
        onCategoryChange={handleCategoryChange}
        onSearch={handleSearch}
      />
      {status === "loading" && (
        <div className="grid gap-5 mt-10 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: pageSize }).map((_, index) => (
            <div
              key={index}
              className="p-6 w-full max-w-xs mx-auto animate-pulse bg-white rounded-lg border border-gray-200 shadow-md"
            >
              <div className="flex gap-5 justify-between items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                <div className="w-20 h-6 rounded bg-gray-300"></div>
              </div>
              <div className="w-3/4 h-6 rounded bg-gray-300 mb-4"></div>
              <div className="flex gap-2 justify-between mb-4">
                <div className="w-1/3 h-4 rounded bg-gray-300"></div>
                <div className="w-1/4 h-4 rounded bg-gray-300"></div>
              </div>
              <div className="h-20 bg-gray-300 rounded mb-4"></div>
              <div className="w-3/4 h-9 rounded bg-gray-300 mx-auto"></div>
            </div>
          ))}
        </div>
      )}
      {status === "failed" && <p>Error loading jobs.</p>}
      {status === "succeeded" && (
        <>
          <div className="grid gap-8 mt-10 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {searchResults.length > 0 ? (
              searchResults.map((job) => (
                <CardComponent key={job.id} job={job} />
              ))
            ) : jobsByCategory.length > 0 ? (
              jobsByCategory.map((job) => (
                <CardComponent key={job.id} job={job} />
              ))
            ) : jobs.length > 0 ? (
              jobs.map((job) => <CardComponent key={job.id} job={job} />)
            ) : (
              <p>No jobs available</p>
            )}
          </div>
          {searchResults.length === 0 && !selectedCategory && (
            <div className="text-center py-10">
              <Pagination isLoading={status === "loading"} />
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default JobsPage;
