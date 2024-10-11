import React from 'react'
import AboutUsComponent from '../Components/about-us/AboutUsComponent'
import { Metadata } from '../lib/Metadata'


const AboutUsPage = () => {
  return (
    <>
      <Metadata
        title="About Us"
        description="Discover more about Job Quick, including our mission to simplify job searching, our core values, and the dedicated team behind the platform. Learn how we strive to connect job seekers with their ideal opportunities."
        author="Job Quick Team"
        keywords="about us, Job Quick, company mission, core values, our team, job search platform"
        thumbnail="https://cdn.builder.io/api/v1/image/assets/TEMP/0a80561409e726af6d7ed574172e4be459d2b6e25d22d27c2002b385768104b1?apiKey=391ff68a63584b0181b4aa51e20262f0&&apiKey=391ff68a63584b0181b4aa51e20262f0"
        url="https://jobquick.techinsights.guru/about-us"
        type="website"
      />
      <AboutUsComponent/>
    </>
  )
}

export default AboutUsPage
