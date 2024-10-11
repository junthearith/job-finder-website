import { useDispatch } from "react-redux";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import React, { useEffect, useState } from "react";
import {
  fetchAllAppliedJobs,
  fetchDeleteAppliedJobs,
} from "../../redux/features/apply-job/applyJobSlice";
import { Link } from "react-router-dom";

function AppliedJobCardComponent({ appliedJob }) {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("access");

  const handleDelete = () => {
    setOpenModal(true);
  };

  const handleDeleteAppliedJob = () => {
    dispatch(
      fetchDeleteAppliedJobs({
        token: accessToken,
        appliedJobId: appliedJob?.applied_job_id,
      })
    );
    setOpenModal(false);
    setTimeout(() => {
      window.location.reload();
    }, 1000); // Reload after 2000 milliseconds (2 seconds)    
  };

  return (
    <div className="flex flex-row items-start max-md:flex-row gap-4 p-2 m-2 bg-slate-100 max-sm:flex-row">
      <Link to={`/jobs/${appliedJob?.job?.id}`} className="flex-grow w-full">
        <div className="flex flex-col items-start md:flex-row gap-4  md:gap-4 w-full">
          <div className="flex gap-4 md:gap-4 w-full md:w-2/3">
            <div className="flex justify-center items-center flex-shrink-0">
              <img
                className="w-16 h-16 bg-gray-200 rounded-full"
                src={
                  appliedJob?.job?.thumbnail ||
                  "https://d2jhcfgvzjqsa8.cloudfront.net/storage/2022/04/download.png.webp"
                }
                alt={`${appliedJob.company_name} logo`}
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <span className="text-lg font-semibold text-gray-800 line-clamp-1 hover:underline">
                {appliedJob?.job?.title}
              </span>
              <span className="text-gray-500 text-start line-clamp-2">
                {appliedJob?.job?.description}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start w-full md:w-1/3">
            <span className="text-lg font-semibold text-gray-800 line-clamp-1 hover:underline">
              {appliedJob?.job?.company_name}
            </span>
            <span className="text-gray-500 leading-relaxed">
              Location: {appliedJob?.job.location}
            </span>
            <span className="text-gray-500 leading-relaxed">
              Applied: {new Date(appliedJob.applied_at).toLocaleDateString()}
            </span>
          </div>
        </div>
      </Link>
      <div onClick={handleDelete} className="">
        <RxCross2 className="cursor-pointer text-center font-bold text-gray-600 hover:bg-gray-500 hover:text-white" />
      </div>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this job application?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeleteAppliedJob}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AppliedJobCardComponent;
