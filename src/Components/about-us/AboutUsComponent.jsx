import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import "react-loading-skeleton/dist/skeleton.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { Badge } from "flowbite-react";
import { useTranslation } from "react-i18next";
import useFontClass from "../../common/useFontClass";
import { NavLink } from "react-router-dom";
import mentor_muyleang from "./../../assets/images/ing_muyleang.jpg";
import mentor_sokpheng from "./../../assets/images/Teacher-Pheng.webp";
import piseth_sattya from "./../../assets/images/PISETHSATTYA.jpg";
import kimhay from "./../../assets/images/kimhay.jpg";
import sopheak from "./../../assets/images/sopheak.jpg";
import sreynit from "./../../assets/images/sreynit.jpg";
import rotha from "./../../assets/images/rotha.jpg";
// import triya from "./../../assets/images/triya.jpg";
// import bunrong from "./../../assets/images/bunrong.jpg";
import soursdey from "./../../assets/images/soursdey.jpg";
import thearith from "./../../assets/images/thearith.jpg";
import ContactForm from "../contactUs/ContactUsForm";
import Skeleton from "react-loading-skeleton";

export default function AboutUsComponent() {
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const { fontClass } = useFontClass();
  useEffect(() => {
    AOS.init({ duration: 1000 });
    setTimeout(() => setLoading(false), 2000); // Simulate loading delay
  }, []);
  const teamMembers = [
    {
      name: t("About-us.team_members.chao_kimhay"),
      image: kimhay,
      position: "Team Member",
      fb: "https://www.facebook.com/jin.hay.5",
      git: "https://github.com/ChaoKimhay",
      gmail: "chaokimhay@gmail.com",
    },
    {
      name: t("About-us.team_members.jun_thearith"),
      image: thearith,
      position: "Team Member",
      fb: "https://www.facebook.com/profile.php?id=100085375058298",
      git: "https://github.com/sokpheng001",
      gmail: "kimchansokpheng123@gmail.com",
    },
    {
      name: t("About-us.team_members.bour_suorcdey"),
      image: soursdey,
      position: "Team Member",
      fb: "https://www.facebook.com/hi.llo.92?mibextid=LQQJ4d",
      git: "https://github.com/BourSuorcdey",
      gmail: "suorcdeybour@gmail.com",
    },
    {
      name: t("About-us.team_members.oum_chansopheak"),
      image: sopheak,
      position: "Team Member",
      fb: "https://www.facebook.com/chan.sopheakk?mibextid=LQQJ4d",
      git: "https://github.com/sopheakchan",
      gmail: "chansopheakoum.dvc@gmail.com",
    },
    {
      name: t("About-us.team_members.sey_bunrong"),
      image:
        "https://job-quick-api.techinsights.guru/media/uploads/bunrong.jpg",
      position: "Team Member",
      fb: "https://www.facebook.com/profile.php?id=100085375058298",
      git: "https://github.com/sokpheng001",
      gmail: "kimchansokpheng123@gmail.com",
    },
    {
      name: t("About-us.team_members.porn_sreynit"),
      image: sreynit,
      position: "Team Member",
      fb: "https://www.facebook.com/profile.php?id=100085375058298",
      git: "https://github.com/sokpheng001",
      gmail: "kimchansokpheng123@gmail.com",
    },
    {
      name: t("About-us.team_members.mom_rotha"),
      image: rotha,
      position: "Team Member",
      fb: "https://www.facebook.com/ah.rotha.71271",
      git: "https://github.com/momrotha",
      gmail: "email:rothamom22@gmail.com",
    },
    {
      name: t("About-us.team_members.choeurn_triya"),
      image: "https://job-quick-api.techinsights.guru/media/uploads/triya.jpg",
      position: "Team Member",
      fb: "https://www.facebook.com/triya.choeurn?mibextid=LQQJ4d",
      git: "https://github.com/ChoeurnTriya",
      gmail: "choeurntriya@gmail.com",
    },
  ];

  const teachers = [
    {
      name: t("About-us.mentors.Ing-Muyleang"),
      image: mentor_muyleang,
      position: "Instructor",
      fb: "https://www.facebook.com/profile.php?id=100087853805063",
      git: "https://github.com/MuyleangIng",
      gmail: "Muyleanging@gmail.com",
    },
    {
      name: t("About-us.mentors.Kim-Chansokpheng"),
      image: mentor_sokpheng,
      position: "Instructor",
      fb: "https://www.facebook.com/profile.php?id=100085375058298",
      git: "https://github.com/sokpheng001",
      gmail: "kimchansokpheng123@gmail.com",
    },
  ];

  const teamLead = [
    {
      name: t("About-us.teamLead"),
      image: piseth_sattya,
      position: "Team Leader",
      fb: "https://www.facebook.com/piseth.sattya.1/",
      git: "https://github.com/SattyaPiseth",
      gmail: "pisethsattya33@gmail.com",
    },
  ];
  return (
    <div
      className={`${fontClass} flex flex-col items-center px-4 py-6 md:px-10 md:py-10`}
    >
      {/* Hero Section */}
      <section className="my-4 flex flex-col items-center md:flex-row">
        <div className="text-center md:w-1/2 md:text-left mt-10 ">
          {loading ? (
            <>
              <Skeleton
                height={40}
                width={200}
                className="mb-4 animate-pulse"
              />
              <Skeleton
                count={4}
                height={40}
                width={300}
                className="my-2 animate-pulse"
              />
            </>
          ) : (
            <>
              <p className="text-3xl md:text-4xl font-bold">
                <span className="text-gradient bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-kantumruy">
                  JOB-QUICK
                </span>
              </p>
              <p
                className="mt-4 text-2xl md:text-2xl leading-5"
                style={{ lineHeight: "1.35" }}
              >
                {t("About-us.About-description")}
              </p>
            </>
          )}
          <NavLink to="/" className="inline-block mt-4"></NavLink>
        </div>
        <div className="md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
          {loading ? (
            <Skeleton height={300} width={600} className="animate-pulse" />
          ) : (
            <dotlottie-player
              src="https://lottie.host/cfff7526-566f-4764-b29d-10c719def776/BUxubb72Ow.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              className="w-full max-w-[600px] h-auto"
            />
          )}
        </div>
      </section>
      {/* Story Section */}
      {/* <section className="my-4 flex flex-col items-center md:flex-row-reverse">
        <div className="text-center md:w-1/2 md:text-left">
          <p className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              {t("About-us.Who")}
            </span>
          </p>
          <p
            className="mt-4 text-2xl md:text-2xl leading-5"
            style={{ lineHeight: "1.35" }}
          >
            {t("About-us.detail.Who")}
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
          <div
            className="relative rounded-lg overflow-hidden"
            style={{ maxWidth: "600px" }}
          >
            <dotlottie-player
              src="https://lottie.host/53455f25-9247-48ec-87ad-410632cb9302/xwjx7kMkSG.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              className="relative z-10 opacity-0 data-[loaded=true]:opacity-100 transition-opacity duration-300 rounded-lg"
            />
          </div>
        </div>
      </section> */}
      <section className="my-4 flex flex-col items-center md:flex-row-reverse">
        <div className="text-center md:w-1/2 md:text-left">
          {loading ? (
            <>
              <Skeleton
                height={40}
                width={400}
                className="mb-4  ml-[2rem] animate-pulse"
              />
              <Skeleton
                count={4}
                height={40}
                width={500}
                className="my-2 ml-[2rem] animate-pulse"
              />
            </>
          ) : (
            <>
              <p className="text-3xl md:text-4xl font-bold">
                <span className="text-gradient bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  {t("About-us.Who")}
                </span>
              </p>
              <p
                className="mt-4 text-2xl md:text-2xl leading-5"
                style={{ lineHeight: "1.35" }}
              >
                {t("About-us.detail.Who")}
              </p>
            </>
          )}
        </div>
        <div className="md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
          {loading ? (
            <Skeleton
              height={300}
              width={500}
              className="animate-pulse mr-[5rem]"
            />
          ) : (
            <div
              className="relative rounded-lg overflow-hidden"
              style={{ maxWidth: "600px" }}
            >
              <dotlottie-player
                src="https://lottie.host/53455f25-9247-48ec-87ad-410632cb9302/xwjx7kMkSG.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                className="relative z-10 opacity-0 data-[loaded=true]:opacity-100 transition-opacity duration-300 rounded-lg"
              />
            </div>
          )}
        </div>
      </section>

      {/* Vision Section */}
      {/* <section className="my-4 flex flex-col items-center md:flex-row">
        <div className="text-center md:w-1/2 md:text-left">
          <p className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              {t("About-us.Goals")}
            </span>
          </p>
          <p
            className="mt-4 text-2xl md:text-2xl leading-5"
            style={{ lineHeight: "1.35" }}
          >
            {t("About-us.detail.Goals")}
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center items-center mt-4 md:mt-0 ">
          <div
            className="relative rounded-lg overflow-hidden"
            style={{ maxWidth: "600px" }}
          >
            <dotlottie-player
              src="https://lottie.host/449a6380-e148-4f89-bef8-fd012d6e6faa/criFar5eMA.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              className="relative z-10 opacity-0 data-[loaded=true]:opacity-100 transition-opacity duration-300 rounded-lg"
            />
          </div>
        </div>
      </section> */}
      <section className="my-4 flex flex-col items-center md:flex-row">
        <div className="text-center md:w-1/2 md:text-left">
          {loading ? (
            <>
              <Skeleton height={40} width={300} className="mb-4 mx-4 md:mx-0" />
              <Skeleton
                count={4}
                height={30}
                width={350}
                className="my-2 mx-4 md:mx-0"
              />
            </>
          ) : (
            <>
              <p className="text-3xl md:text-4xl font-bold">
                <span className="text-gradient bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  {t("About-us.Goals")}
                </span>
              </p>
              <p
                className="mt-4 text-2xl md:text-2xl leading-5"
                style={{ lineHeight: "1.35" }}
              >
                {t("About-us.detail.Goals")}
              </p>
            </>
          )}
        </div>
        <div className="md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
          {loading ? (
            <Skeleton
              height={300}
              width={400}
              className="animate-pulse mx-4 md:mx-0"
            />
          ) : (
            <div
              className="relative rounded-lg overflow-hidden"
              style={{ maxWidth: "600px" }}
            >
              <dotlottie-player
                src="https://lottie.host/449a6380-e148-4f89-bef8-fd012d6e6faa/criFar5eMA.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                className="relative z-10 opacity-0 data-[loaded=true]:opacity-100 transition-opacity duration-300 rounded-lg"
              />
            </div>
          )}
        </div>
      </section>

      {/* Mission Section */}
      {/* <section className="my-4 flex flex-col items-center md:flex-row-reverse">
        <div className="text-center md:w-1/2 md:text-left">
          <p className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              {t("About-us.Perspective")}
            </span>
          </p>
          <p
            className="mt-4 text-2xl md:text-2xl leading-5"
            style={{ lineHeight: "1.35" }}
          >
            {t("About-us.detail.Perspective")}
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center items-center mt-4 md:mt-0 md:pr-16">
          <div
            className="relative rounded-lg overflow-hidden"
            style={{ maxWidth: "600px" }}
          >
            <dotlottie-player
              src="https://lottie.host/3ee76f97-26c0-4d36-a2d9-9b85674dd2d0/CLpwN8efCJ.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              className="relative z-10 opacity-0 data-[loaded=true]:opacity-100 transition-opacity duration-300 rounded-lg"
            />
          </div>
        </div>
      </section> */}
      <section className="my-4 flex flex-col items-center md:flex-row-reverse">
        <div className="text-center md:w-1/2 md:text-left">
          {loading ? (
            <>
              {/* Title Skeleton */}
              <Skeleton
                height={40}
                width="60%"
                className="mb-4 mx-auto md:mx-0"
              />
              {/* Paragraph Skeleton */}
              <Skeleton
                count={3}
                height={30}
                width="80%"
                className="my-2 mx-auto md:mx-0"
              />
            </>
          ) : (
            <>
              <p className="text-3xl md:text-4xl font-bold">
                <span className="text-gradient bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  {t("About-us.Perspective")}
                </span>
              </p>
              <p
                className="mt-4 text-2xl md:text-2xl leading-5"
                style={{ lineHeight: "1.35" }}
              >
                {t("About-us.detail.Perspective")}
              </p>
            </>
          )}
        </div>
        <div className="md:w-1/2 flex justify-center items-center mt-4 md:mt-0 md:pr-16">
          {loading ? (
            <Skeleton
              height={300}
              width="100%"
              className="animate-pulse"
              style={{ maxWidth: "600px" }}
            />
          ) : (
            <div
              className="relative rounded-lg overflow-hidden"
              style={{ maxWidth: "600px" }}
            >
              <dotlottie-player
                src="https://lottie.host/3ee76f97-26c0-4d36-a2d9-9b85674dd2d0/CLpwN8efCJ.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                className="relative z-10 opacity-0 data-[loaded=true]:opacity-100 transition-opacity duration-300 rounded-lg"
              />
            </div>
          )}
        </div>
      </section>

      <div className="my-2 text-center mt-10">
        <p className="text-3xl font-bold" data-aos="fade-up">
          <span
            className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            {t("Organize.organize1")}
          </span>
          <span
            className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            {t("Organize.organize2")}
          </span>
        </p>
        <hr
          className="shrink-0 bg-divider border-none mx-auto my-2 h-1 w-48 border-0 bg-gradient-to-r from-indigo-400 to-cyan-400"
          role="separator"
          data-aos="fade-up"
        />
      </div>

      <div
        className="my-10 flex justify-center gap-10 px-10"
        data-aos="fade-up"
      >
        <NavLink
          className="relative inline-flex items-center tap-highlight-transparent outline-none focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity"
          href="https://istad.co/"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex="0"
          role="link"
        >
          <div className="flex justify-center items-center w-full py-">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc4ff153c8a8e5bf9c98136fb6d8ed297c3d759da1126d945096b3c29a7d7654?apiKey=ff00f11844934b2d9618929d5184b9ad&"
              className="self-start mt-3 w-[800px] aspect-[6.25] max-md:max-w-full"
              alt="Feature on media coverage"
            />
          </div>
        </NavLink>
      </div>

      <div className="my-2 text-center">
        <p className="text-3xl font-bold " data-aos="fade-up">
          <span
            className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mt-10"
            data-aos="fade-up"
          >
            {t("About-us.Instructor")}
          </span>
        </p>
        <hr
          className="shrink-0 bg-divider border-none mx-auto my-2 h-1 w-44 border-0 bg-gradient-to-r from-indigo-400 to-cyan-400"
          role="separator"
          data-aos="fade-up"
        />
      </div>
      <div className="flex justify-center" data-aos="fade-up">
        <div className="my-8 grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-2">
          {/* Mentor Card 1 */}
          {teachers.map((teacher) => (
            <div
              className="w-72 max-w-sm overflow-hidden rounded-xl p-8"
              key={teacher.name}
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute inset-[-0.35%] animate-spin rounded-full bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 p-[1px] blur-sm"></span>
                <div className="relative rounded-full bg-foreground-50 p-1">
                  <div className="relative shadow-black/5 shadow-none rounded-full">
                    <img
                      src={teacher.image}
                      className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none duration-300 rounded-full h-[210px] w-[210px]"
                      alt={teacher.name}
                      data-loaded="true"
                    />
                  </div>
                </div>
              </div>
              <div className="px-6 py-2">
                <div className="mb-2 text-center text-xl font-bold whitespace-nowrap pt-3">
                  {teacher.name}
                </div>
                <div className="text-center text-xl font-bold"></div>
                <Badge className="text-sm flex justify-center bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400">
                  {teacher.position}
                </Badge>
              </div>
              <div className="flex w-full justify-around gap-3 px-6 py-4">
                <a
                  href={teacher.fb}
                  className="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
                  aria-label="Facebook"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    className="w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </a>
                <a
                  href={teacher.git}
                  className="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
                  aria-label="Instagram"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/123a29d2545de368f2a4f98674cc9850846b4a8e05cd9bad996ae71bc0774d33?placeholderIfAbsent=true&apiKey=391ff68a63584b0181b4aa51e20262f0"
                    className="w-5 h-5 filter brightness-0 invert"
                    alt=""
                  />
                </a>
                <a
                  href={teacher.gmail}
                  className="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
                  aria-label="LinkedIn"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 488 512"
                    className="w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
          {/* Mentor Card 1 */}
        </div>
      </div>
      <div
        className="text-3xl font-suwannaphum font-bold text-blue-600 max-md:mt-10 mb-12 "
        data-aos="fade-up"
      >
        <span
          className={`${fontClass} text-4xl text-gradient bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent`}
        >
          {t("About-us.Member")}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-20">
        {/* Leader Card 1 */}
        {teamLead.map((lead) => (
          <div
            className="w-72 max-w-sm overflow-hidden rounded-xl p-8"
            key={lead.name}
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute inset-[-0.35%] animate-spin rounded-full bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 p-[1px] blur-sm"></span>
              <div className="relative rounded-full bg-foreground-50 p-1">
                <div className="relative shadow-black/5 shadow-none rounded-full">
                  <img
                    src={lead.image}
                    className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none duration-300 rounded-full h-[210px] w-[210px]"
                    alt={lead.name}
                    data-loaded="true"
                  />
                </div>
              </div>
            </div>
            <div className="px-6 py-2">
              <div className="mb-2 text-center text-xl font-bold whitespace-nowrap pt-3">
                {lead.name}
              </div>
              {/* <div className="text-center text-lg">{lead.name}</div> */}
              <Badge className="text-sm flex justify-center bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400">
                {lead.position}
              </Badge>
            </div>

            <div className="flex w-full justify-around gap-3 px-6 py-4">
              <a
                href={lead.fb}
                className="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
                aria-label="Facebook"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a
                href={lead.git}
                className="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
                aria-label="Instagram"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/123a29d2545de368f2a4f98674cc9850846b4a8e05cd9bad996ae71bc0774d33?placeholderIfAbsent=true&apiKey=391ff68a63584b0181b4aa51e20262f0"
                  className="w-5 h-5 filter brightness-0 invert"
                  alt=""
                />
              </a>
              <a
                href={lead.gmail}
                className="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
                aria-label="LinkedIn"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 488 512"
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* member */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <div
            className="w-72 max-w-sm overflow-hidden rounded-xl p-8"
            key={member.name}
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute inset-[-0.35%] animate-spin rounded-full bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 p-[1px] blur-sm"></span>
              <div className="relative rounded-full bg-foreground-50 p-1">
                <div className="relative shadow-black/5 shadow-none rounded-full">
                  <img
                    src={member.image}
                    className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none duration-300 rounded-full h-[210px] w-[210px]"
                    alt={member.name}
                    data-loaded="true"
                  />
                </div>
              </div>
            </div>
            <div className="px-6 py-2">
              <div className="mb-2 text-center text-xl font-bold whitespace-nowrap pt-3">
                {member.name}
              </div>
              <Badge className="text-sm flex justify-center bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400">
                {member.position}
              </Badge>
            </div>

            <div className="flex w-full justify-around gap-3 px-6 py-4">
              <a
                href={member.fb}
                className="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden "
                aria-label="Facebook"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a
                href={member.git}
                className="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
                aria-label="Instagram"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/123a29d2545de368f2a4f98674cc9850846b4a8e05cd9bad996ae71bc0774d33?placeholderIfAbsent=true&apiKey=391ff68a63584b0181b4aa51e20262f0"
                  className="w-5 h-5 filter brightness-0 invert"
                  alt=""
                />
              </a>
              <a
                href={member.gmail}
                className="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
                aria-label="LinkedIn"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 488 512"
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex flex-wrap items-center my-10">
        <div className="w-full md:w-6/12 order-2 md:order-1 mt-20">
          <dotlottie-player
            src="https://lottie.host/3751fb5a-7130-4e52-8cf8-993e5a07512f/0xxfoUoJ4E.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div
          data-aos="zoom-in-up"
          className="w-full md:w-6/12 order-1 md:order-2 mt-10"
        >
          <div className={`${fontClass} flex flex-col grow text-left font-suwannaphum text-xl whitespace-nowrap text-black text-opacity-60 max-md:mt-10 max-md:max-w-full`}>
            <div
              data-aos="zoom-in-up"
              className="text-blue-600 text-left text-3xl font-bold max-md:max-w-full"
            >
              <span className={`${fontClass} text-gradient bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent text-4xl`}>
                {t("Contact-us.title")}
              </span>
            </div>
            <div
              data-aos="zoom-in-up"
              className={`${fontClass} mt-4 text-2xl text-black max-md:flex-col max-md:max-w-full max-md:mt-3 dark:text-gray-300`}
            >
              {t("Contact-us.description")} <br />
              {t("Contact-us.description2")}
            </div>
            <div className={`${fontClass} self-start mt-4 max-md:mt-10 max-md:ml-2.5 dark:text-gray-300`}>
              {t("Contact-us.name")}
            </div>
            <input
              type="text"
              className={`${fontClass} shrink-0 mt-2.5 rounded-lg border border-black border-solid h-[50px] max-md:max-w-full text-black`}
            />
            <div className={`${fontClass} self-start mt-3 max-md:ml-2.5 dark:text-gray-300`}>
              {t("Contact-us.email")}
            </div>
            <input
              type="email"
              className={`${fontClass} shrink-0 mt-3 rounded-lg border border-black border-solid h-[50px] max-md:max-w-full text-black`}
            />
            <div className={`${fontClass} flex flex-col mt-2.5 max-md:max-w-full dark:text-gray-300`}>
              <div className="self-start ">{t("Contact-us.message")}</div>
              <textarea className="shrink-0 mt-3 rounded-lg border border-black border-solid h-[150px] max-md:max-w-full text-black"></textarea>
            </div>
            <div className={`${fontClass} mt-6 flex flex-wrap gap-2`}>
              <Button type="submit" color="blue">
                {t("Contact-us.send_message")}
              </Button>
            </div>
          </div>
        </div>
      </div> */}
      <ContactForm fontClass={fontClass} />
    </div>
  );
}
