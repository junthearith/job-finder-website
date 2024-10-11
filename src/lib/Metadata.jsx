import React from "react";
import { Helmet } from "react-helmet-async";

export const Metadata = ({
  title,
  description,
  author,
  keywords,
  thumbnail,
  url,
  type
}) => {
  return (
    <Helmet>
      <title>{`JobQuick | ${title || "Find Your Dream Job"}`}</title>
      <meta name="title" content={title || "JobQuick - Find Your Dream Job"} />
      <meta
        name="description"
        content={
          description ||
          "JobQuick is a platform designed to help you find your dream job quickly and efficiently. Search and apply for job opportunities, track your applications, and stay ahead in your career."
        }
      />
      <meta name="author" content={author || "JobQuick Team"} />
      <meta
        name="keywords"
        content={
          keywords ||
          "job search, careers, employment, job opportunities, job applications, JobQuick"
        }
      />
      <meta
        name="thumbnail"
        content={
          thumbnail ||
          "https://job-quick-api.techinsights.guru/media/uploads/hero-section.png"
        }
      />

      {/* Open Graph / Facebook */}
      <meta property="og:url" content={url || "https://jobquick.techinsights.guru"} />
      <meta property="og:type" content={type || "website"} />
      <meta
        property="og:title"
        content={title || "JobQuick - Find Your Dream Job"}
      />
      <meta
        property="og:description"
        content={
          description ||
          "Discover thousands of job opportunities tailored to your skills. JobQuick makes the job search process easier and more effective."
        }
      />
      <meta
        property="og:image"
        content={
          thumbnail ||
          "https://job-quick-api.techinsights.guru/media/uploads/hero-section.png"
        }
      />
      <meta property="og:site_name" content="JobQuick" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={title || "JobQuick - Find Your Dream Job"}
      />
      <meta
        name="twitter:description"
        content={
          description ||
          "Join JobQuick today and take the first step towards your dream career."
        }
      />
      <meta
        name="twitter:image"
        content={
          thumbnail ||
          "https://job-quick-api.techinsights.guru/media/uploads/hero-section.png"
        }
      />
      <meta name="twitter:url" content={url || "https://jobquick.techinsights.guru"} />
      <link rel="canonical" href={url || "http://jobquick.techinsights.guru/"} />
    </Helmet>
  );
};
