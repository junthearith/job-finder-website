import AppliedJobCardComponent from "../Components/card/AppliedJobCardComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllAppliedJobs,
  fetchAppliedJobs,
  selectAllAppliedJobs,
} from "../redux/features/apply-job/applyJobSlice";
import { useEffect, useState } from "react";

function AppliedJobRecord() {
  const dispatch = useDispatch();
  const { accessToken } = useSelector(
    (state) => state.applyJobs
  );

  const appliedAllJobs = useSelector(selectAllAppliedJobs);
  const { user } = useSelector((state) => state?.user);

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchAllAppliedJobs(accessToken)); 
    }
  }, [accessToken, dispatch]);

  const filterAppliedJobs = appliedAllJobs?.jobs?.filter(
    (job) => job?.user.id === user?.id
  );

  return (
    <div className="mt-20">
      {filterAppliedJobs && filterAppliedJobs.length > 0 ? (
        filterAppliedJobs.map((appliedJob, index) => {
          return (
            <AppliedJobCardComponent
            key={index}
            appliedJob={appliedJob}
          />
          );
        })
      ) : (
        <div className="text-center text-gray-500">
          No jobs applied for yet.
        </div>
      )}
    </div>
  );
}

export default AppliedJobRecord;
