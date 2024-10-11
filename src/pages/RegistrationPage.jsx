import React from "react";
import RegistrationForm from "../Components/auth/RegistrationForm";
import ParticlesBackground from "../common/ParticlesBackground";
import { Metadata } from "../lib/Metadata";

const RegistrationPage = () => {
  const particlesUrl = "/particles.json";
  
  return (
    <>
      <Metadata
        title="Register"
        description="Sign up for a Job Quick account to start your job search journey. Register now to access personalized job recommendations, manage your applications, and stay updated with the latest job opportunities."
        author="Job Quick Team"
        keywords="register, sign up, create account, Job Quick, job search registration, user registration"
        thumbnail="https://cdn.builder.io/api/v1/image/assets/TEMP/dfc88a762229238be0ba236bdc53e7231de668be5613407739ad520eb7f8a51b?apiKey=ad7733614e794f228aa68fbfd330edec&"
        url="https://jobquick.techinsights.guru/register"
        type="website"
      />
      <ParticlesBackground url={particlesUrl} />
      <main
        className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="flex items-center justify-center p-4 lg:p-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfc88a762229238be0ba236bdc53e7231de668be5613407739ad520eb7f8a51b?apiKey=ad7733614e794f228aa68fbfd330edec&"
                alt="Registration illustration"
                className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg hidden lg:block relative"
              />
            </div>
            <div className="flex items-center justify-center p-4 lg:p-0">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegistrationPage;
