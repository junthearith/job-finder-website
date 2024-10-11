// src/App.jsx
import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchJobCategories,
  selectAllJobCategories,
  getJobCategoriesStatus,
} from "./redux/features/category-job/categorySlice";
import HomePage from "./pages/HomePage";
import "./App.css";
import useThrottleScroll from "./common/useThrottleScroll";
import { fetchAllJobs, selectAllJobs } from "./redux/jobs/jobsSlice";
import { fetchAppliedJobs } from "./redux/features/apply-job/applyJobSlice";
import { Metadata } from "./lib/Metadata";

function App() {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllJobCategories);
  const jobs = useSelector(selectAllJobs);
  const status = useSelector(getJobCategoriesStatus);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchJobCategories());
      dispatch(fetchAllJobs());
      dispatch(fetchAppliedJobs(localStorage.getItem("access")));
    }
  }, [status, dispatch]);

  const saveScrollPosition = useCallback(() => {
    localStorage.setItem("scrollPosition", window.scrollY);
  }, []);

  useThrottleScroll(saveScrollPosition, 200);

  useEffect(() => {
    const savedPosition = localStorage.getItem("scrollPosition");
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
    }
  }, []);

  return (
    <>
      <Metadata
        title="Find Your Dream Job with JobQuick"
        description="JobQuick helps you discover and apply for your dream job with ease. Join us today to streamline your job search process and get hired faster!"
        author="JobQuick Team"
        keywords="job search, find jobs, job opportunities, career, employment, JobQuick"
        thumbnail="https://job-quick-api.techinsights.guru/media/uploads/hero-section.png"
        url={"https://jobquick.techinsights.guru"}
        type={"website"}
      />
      <HomePage
        categories={categories}
        isLoading={status === "loading"}
        jobs={jobs}
      />
    </>
  );
}

export default App;
