import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SliderComponent from "../Components/home/SliderComponent";
import HeroSectionComponent from "../Components/home/HeroSectionComponent";
import SearchComponent from "../Components/home/SearchComponent";
import PositionCardComponent from "../Components/home/PositionCardComponent";
import AdvertisingComponent from "../Components/home/AdvertisingComponent";
import FeatureDetailComponent from "../Components/home/FeatureDetailComponent";
import {
  fetchJobs,
  fetchJobsByCategory,
  clearJobsByCategory,
  selectJobs,
  selectJobsByCategory,
  selectDataBySearch,
  setPage,
  clearSearchResults,
} from "../redux/jobs/jobsSlice";
import { selectAllJobCategories } from "../redux/features/category-job/categorySlice";
import {
  selectStatus,
  selectCurrentPage,
  selectPageSize,
} from "../redux/jobs/jobsSlice";
import useThrottleScroll from "../common/useThrottleScroll";

const HomePage = React.memo(() => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const categories = useSelector(selectAllJobCategories);
  const jobs = useSelector(selectJobs);
  const jobsByCategory = useSelector(selectJobsByCategory);
  const searchResults = useSelector(selectDataBySearch) || [];
  const currentPage = useSelector(selectCurrentPage);
  const pageSize = useSelector(selectPageSize);
  const [selectedCategory, setSelectedCategory] = useState("");

  const saveScrollPosition = useCallback(() => {
    localStorage.setItem("scrollPosition", window.scrollY);
  }, []);

  useThrottleScroll(saveScrollPosition, 200);

  useEffect(() => {
    const savedPosition = localStorage.getItem("scrollPosition");
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
    }

    // Load jobs or jobs by saved category on initial load
    const savedCategory = localStorage.getItem("selectedCategory");
    if (savedCategory) {
      setSelectedCategory(savedCategory);
      dispatch(fetchJobsByCategory(savedCategory));
    } else {
      dispatch(fetchJobs({ page: currentPage, pageSize }));
    }
  }, [dispatch, currentPage, pageSize]);

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
      dispatch(fetchJobs({ page: currentPage, pageSize, search: searchQuery }));
    } else {
      dispatch(fetchJobs({ page: currentPage, pageSize }));
    }
  };

  useEffect(() => {
    return () => {
      dispatch(clearSearchResults());
    };
  }, [dispatch]);

  return (
    <section className="mx-auto p-4">
      <HeroSectionComponent isLoading={status === "loading"} />
      <SliderComponent />
      <SearchComponent
        categories={categories}
        isLoading={status === "loading"}
        onCategoryChange={handleCategoryChange}
        onSearch={handleSearch}
      />
      <PositionCardComponent
        jobs={
          searchResults.length > 0
            ? searchResults
            : jobsByCategory.length > 0
            ? jobsByCategory
            : jobs
        }
        isLoading={status === "loading"}
      />
      <AdvertisingComponent />
      <FeatureDetailComponent />
    </section>
  );
});

export default HomePage;
