// src/redux/api/jobCategoryApi.js
import axios from "axios";
import { BASE_URL } from "./api";

// Fetch job categories
export const fetchJobCategories = async () => {
  return axios.get(`${BASE_URL}job_categories/`);
};

// Fetch skills by category ID
export const fetchSkillsByCategoryId = async (categoryId) => {
  try {
    const response = await axios.get(`${BASE_URL}job_categories/${categoryId}/`);
    return response.data.skills;
  } catch (error) {
    throw new Error('Failed to fetch skills');
  }
};