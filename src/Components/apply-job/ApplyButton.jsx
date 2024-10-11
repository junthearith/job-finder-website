import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyForJob } from "../../redux/features/apply-job/applyJobSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFontClass from "../../common/useFontClass";
import { useNavigate } from "react-router-dom";

const ApplyButton = ({ jobId }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.applyJobs);
  const fileInputRef = useRef(null);
  const { fontClass } = useFontClass();
  const navigate = useNavigate()

  // Check if the user is authenticated
  const token = localStorage.getItem("access");
  const isAuthenticated = !!token;

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (validTypes.includes(file.type)) {
        handleApply(file);
      } else {
        toast.error("Please upload a valid PDF or DOC file.");
        clearFileInput();
      }
    }
  };

  const handleApplyClick = () => {
    if (!isAuthenticated) {
      toast.error("User is not authenticated. Please log in to apply.");
      
      return navigate('/login');
    }

    fileInputRef.current.click();
  };

  const handleApply = (resumeFile) => {
    if (isAuthenticated) {
      dispatch(applyForJob({ token, jobId, resume: resumeFile }))
        .unwrap()
        .then(() => {
          toast.success("Application submitted successfully!");
          clearFileInput();
          setTimeout(() => {
            window.location.reload();
          }, 1000); // Reload after 2000 milliseconds (2 seconds)    
        })
        .catch((err) => {
          const errorMessage =
            err.response?.data?.message || "Failed to submit the application.";
          toast.error(errorMessage);
        });
    }
  };

  const clearFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className={`${fontClass} `}>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        ref={fileInputRef}
        onChange={handleResumeChange}
        className="hidden"
      />
      <button
        onClick={handleApplyClick}
        disabled={loading}
        className={` apply-button ${
          loading ? "loading" : ""
        } flex gap-3 justify-center items-center px-7 mt-3 py-3 text-base font-semibold text-white capitalize bg-blue-800 rounded-lg`}
      >
        {loading ? "Applying..." : "Apply Now"}
      </button>
    </div>
  );
};

export default ApplyButton;
