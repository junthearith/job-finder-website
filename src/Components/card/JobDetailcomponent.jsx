import React from "react";
import { Typography, Button, Input } from "@material-tailwind/react";
import { useCopyToClipboard } from "usehooks-ts";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import ApplyButton from "../apply-job/ApplyButton";
import { addDays, format } from "date-fns";

const WEBSITE_URL = import.meta.env.VITE_WEBSITE_URL;

const JobDetailComponent = ({ appliedJobs, detail }) => {
  const { id } = useParams(); // Correct parameter usage
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = React.useState(false);

  const fullUrl = `${WEBSITE_URL}jobs/${id}`;
  const [inputValue, setInputValue] = React.useState(fullUrl);

  

  // Handle any image errors
  const handleError = (event) => {
    event.target.src = "/path/to/fallback/image.jpg"; // Specify a path to your fallback image
  };

  const startedDate = detail?.created_at
    ? format(new Date(detail?.created_at), "MMM d, yyyy")
    : "";
  const extendedDate = startedDate ? addDays(startedDate, 30) : null;

  const expiredDate = extendedDate ? format(extendedDate, "MMM d, yyyy") : "";

  // Check if the job has been applied to
  const isJobApplied = appliedJobs?.some((job) => job.job.id === detail?.id);

  return (
    <div className="mt-20 flex flex-col text-left font-poppins">
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <img
          className="w-[8%]"
          loading="lazy"
          src={detail?.thumbnail}
          alt={`${detail?.title} at ${detail?.company_name}`}
        />
        <div className="flex-1">
          <div className="flex justify-between">
            <div>
              <h1 className="text-2xl md:text-2xl font-bold leading-8 text-zinc-900 dark:text-gray-300 flex">
                {detail?.title}
              </h1>
              <div className="flex flex-wrap gap-2 mt-3 text-sm leading-5">
                <div className="text-lg leading-7 text-neutral-600 min-w-max dark:text-gray-300">
                  {detail?.company_name}
                </div>
                <div className="flex items-center justify-center px-3 py-1 font-semibold text-white whitespace-nowrap bg-primary-800 rounded-lg ">
                  {detail?.job_type}
                </div>
              </div>
            </div>
            <div>
              {isJobApplied ? (
                <Button
                  size="md"
                  disabled
                  className="flex gap-3 justify-center items-center px-7 mt-3 py-3 text-base font-semibold text-white capitalize bg-blue-800 rounded-lg"
                >
                  Applied
                </Button>
              ) : (
                <ApplyButton jobId={detail?.id} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 w-full max-md:max-w-full mb-10 ">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full ">
            <div className="flex flex-col grow px-5 text-base leading-6 text-gray-500 max-md:mt-6 max-md:max-w-full bg-gray-50 rounded-lg p-4 dark:bg-gray-700">
              <div className="text-lg font-bold leading-7 text-zinc-900 max-md:max-w-full dark:text-gray-300 ">
                Job Overview
              </div>
              <div className="mt-4 max-md:mr-1.5 max-md:max-w-full dark:text-gray-300">
                {detail?.description}
              </div>
              <div className="mt-4 font-bold leading-[150%] text-zinc-900 max-md:max-w-full dark:text-gray-300">
                Requirements
              </div>
              <div className="mt-2 max-md:max-w-full dark:text-gray-300">
                {detail?.job_requirements.map((requirement, index) => (
                  <li key={index}>{requirement?.requirement}</li>
                ))}
              </div>
              <div className="mt-4 font-bold leading-[150%] text-zinc-900 max-md:max-w-full dark:text-gray-300">
                Skills
              </div>
              <div className="mt-2 grid grid-cols-2 gap-4 max-md:grid-cols-1 max-md:gap-2 dark:text-gray-300">
                {detail?.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 py-2 px-3 bg-gray-100 rounded-lg shadow-sm dark:bg-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5 text-indigo-600 dark:text-indigo-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm font-medium text-zinc-900 dark:text-gray-300">
                      {skill?.name}
                    </span>
                  </li>
                ))}
              </div>

              <div className="mt-4 font-bold leading-[150%] text-zinc-900 max-md:max-w-full dark:text-gray-300">
                Desirable:
              </div>
              <div className="mt-2 max-md:max-w-full">
                <ul className="list-disc pl-4 dark:text-gray-300">
                  <li>
                    Working knowledge of eCommerce platforms, ideally Shopify
                    but also others e.g. Magento, WooCommerce, Visualsoft to
                    enable seamless migrations.
                  </li>
                  <li>Working knowledge of payment gateways</li>
                  <li>API platform experience / Building restful APIs</li>
                </ul>
              </div>
              <div className="mt-4 font-bold leading-[150%] text-zinc-900 max-md:max-w-full dark:text-gray-300">
                Benefits
              </div>
              <div className="mt-2 max-md:max-w-full dark:text-gray-300">
                <ul className="list-disc pl-4">
                  <li>{detail?.benefits}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-6 max-md:max-w-full ">
              <div className="justify-center p-8 max-md:px-5 max-md:max-w-full bg-gray-50 rounded-lg dark:bg-gray-700 ">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col justify-center self-stretch my-auto font-medium text-center max-md:mt-10">
                      <div className="text-base leading-6 text-zinc-900 dark:text-gray-300">
                        Salary (USD)
                      </div>
                      <div className="mt-3 text-xl leading-6 text-green-400 dark:text-green-400">
                        {detail?.salary}
                      </div>
                      <div className="mt-1 text-sm leading-5 text-gray-500 dark:text-gray-300">
                        Monthly salary
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center text-base leading-6 text-center max-md:mt-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e902683ca13e9cd14279adf820e34b6cd25573791ba4a5107cc7a4322592055e?apiKey=4ca16dc24a9e4ca79331f0aa6ebbe35c&"
                        className="self-center aspect-square w-[38px]"
                        alt="Location Icon"
                      />
                      <div className="mt-2 font-medium text-zinc-900 dark:text-gray-300">
                        Location
                      </div>
                      <div className="text-gray-500 dark:text-gray-300">
                        {detail?.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section className="p-5 mt-4 bg-gray-50 dark:bg-gray-700 rounded-lg max-md:px-5 max-md:max-w-full">
                <header className="text-lg font-medium leading-7 text-zinc-900 dark:text-gray-300 mb-4">
                  Job Details
                </header>
                <div className="flex flex-wrap gap-4 max-md:gap-3 max-md:flex-col max-md:items-center">
                  <div className="flex flex-col items-center flex-1 max-w-[calc(33.333%-1rem)] max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfbd2123267a1bfab4313eadf237420709032b0bcabf931f8af8c0e994a191e7?apiKey=4ca16dc24a9e4ca79331f0aa6ebbe35c&"
                      className="w-8 aspect-square"
                      alt="Calendar Icon"
                    />
                    <span className="mt-3 text-xs leading-5 text-gray-500 uppercase dark:text-gray-400">
                      Job Posted:
                    </span>
                    <span className="mt-1 text-sm font-medium leading-5 text-zinc-900 dark:text-gray-300">
                      {startedDate}
                    </span>
                  </div>
                  <div className="flex flex-col items-center flex-1 max-w-[calc(33.333%-1rem)] max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/46997f710a4214bf9b5b9bbe447fe1b90db5b0843d4f54430a357c74bc27e322?apiKey=4ca16dc24a9e4ca79331f0aa6ebbe35c&"
                      className="w-8 aspect-square"
                      alt="Clock Icon"
                    />
                    <span className="mt-3 text-xs leading-5 text-gray-500 uppercase dark:text-gray-400">
                      Job Expires:
                    </span>
                    <span className="mt-1 text-sm font-medium leading-5 text-zinc-900 dark:text-gray-300">
                      {expiredDate}
                    </span>
                  </div>
                  <div className="flex flex-col items-center flex-1 max-w-[calc(33.333%-1rem)] max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f83d81f9e32da470b3b37f7b398da538503fb147090b3bc9f6b620a335d3968?apiKey=4ca16dc24a9e4ca79331f0aa6ebbe35c&"
                      className="w-8 aspect-square"
                      alt="Level Icon"
                    />
                    <span className="mt-3 text-xs leading-5 text-gray-500 uppercase dark:text-gray-400">
                      Job Type:
                    </span>
                    <span className="mt-1 text-sm font-medium leading-5 text-zinc-900 dark:text-gray-300">
                      {detail?.job_type}
                    </span>
                  </div>
                </div>
                <div className="my-10"></div>
                <div className="flex flex-wrap gap-4 max-md:gap-3 max-md:flex-col max-md:items-center">
                  <div className="flex flex-col items-center flex-1 max-w-[calc(33.333%-1rem)] max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfbd2123267a1bfab4313eadf237420709032b0bcabf931f8af8c0e994a191e7?apiKey=4ca16dc24a9e4ca79331f0aa6ebbe35c&"
                      className="w-8 aspect-square"
                      alt="Calendar Icon"
                    />
                    <span className="mt-3 text-xs leading-5 text-gray-500 uppercase dark:text-gray-400">
                      Job Posted:
                    </span>
                    <span className="mt-1 text-sm font-medium leading-5 text-zinc-900 dark:text-gray-300">
                      {startedDate}
                    </span>
                  </div>
                  <div className="flex flex-col items-center flex-1 max-w-[calc(33.333%-1rem)] max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/46997f710a4214bf9b5b9bbe447fe1b90db5b0843d4f54430a357c74bc27e322?apiKey=4ca16dc24a9e4ca79331f0aa6ebbe35c&"
                      className="w-8 aspect-square"
                      alt="Clock Icon"
                    />
                    <span className="mt-3 text-xs leading-5 text-gray-500 uppercase dark:text-gray-400">
                      Job Expires:
                    </span>
                    <span className="mt-1 text-sm font-medium leading-5 text-zinc-900 dark:text-gray-300">
                      {expiredDate}
                    </span>
                  </div>
                  <div className="flex flex-col items-center flex-1 max-w-[calc(33.333%-1rem)] max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f83d81f9e32da470b3b37f7b398da538503fb147090b3bc9f6b620a335d3968?apiKey=4ca16dc24a9e4ca79331f0aa6ebbe35c&"
                      className="w-8 aspect-square"
                      alt="Level Icon"
                    />
                    <span className="mt-3 text-xs leading-5 text-gray-500 uppercase dark:text-gray-400">
                      Job Type:
                    </span>
                    <span className="mt-1 text-sm font-medium leading-5 text-zinc-900 dark:text-gray-300">
                      {detail?.job_type}
                    </span>
                  </div>
                </div>
                
              </section>
              <section className="p-5 mt-5 bg-gray-50 dark:bg-gray-700 rounded-lg max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col gap-5 max-md:flex-col max-md:gap-0">
                  <h2 className="text-lg font-medium leading-7 text-zinc-900 dark:text-gray-300">
                    Share this job:
                  </h2>
                  <div className="flex flex-col max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-2 mt-2 max-md:flex-wrap max-md:gap-2 max-md:pr-5">
                      <div className="flex items-center gap-4">
                        <div className="relative w-[20rem] max-w-md">
                          <Input
                            value={inputValue}
                            type="text" // Changed from 'email' to 'text' as it's used for copying
                            placeholder="Enter to copy"
                            className="w-full bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:ring-gray-900/10 border border-gray-300 rounded-md"
                            labelProps={{ className: "hidden" }}
                            onChange={(e) => setInputValue(e.target.value)}
                            containerProps={{ className: "min-w-[100px]" }}
                            readOnly // Added readOnly to prevent manual editing
                          />
                        </div>
                        <Button
                          size="md"
                          onMouseLeave={() => setCopied(false)}
                          onClick={() => {
                            copy(inputValue);
                            setCopied(true);
                          }}
                          className="flex items-center gap-2 bg-gray-900 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
                          aria-label={copied ? "Copied" : "Copy link"}
                        >
                          {copied ? (
                            <>
                              <CheckIcon className="h-4 w-4" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <DocumentDuplicateIcon className="h-4 w-4" />
                              <span>Copy</span>
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailComponent;
