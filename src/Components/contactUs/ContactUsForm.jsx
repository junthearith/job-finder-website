import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../redux/api/api";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";

const ContactForm = ({ fontClass }) => {
  const [loading, setLoading] = useState(true);
  const form = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    // Simulate loading for demonstration
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        // alert("Message sent successfully!");
        toast.success(
          <div className={fontClass}>
            {t("contact.success")}
          </div>
        );
        e.target.reset(); // Clear the form after successful submission
      },
      (error) => {
        console.log(error.text);
        toast.error(<div className={fontClass}>{t("contact.failed")}</div>);
      }
    );
  };

  return (
    <div className="flex flex-wrap items-center my-10">
      <div className="w-full md:w-6/12 order-2 md:order-1 mt-20">
        {loading ? (
          <div className="w-full h-[400px] bg-gray-200">
            <Skeleton height="100%" width="100%" />
          </div>
        ) : (
          <dotlottie-player
            src="https://lottie.host/3751fb5a-7130-4e52-8cf8-993e5a07512f/0xxfoUoJ4E.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        )}
      </div>
      <div
        data-aos="zoom-in-up"
        className="w-full md:w-6/12 order-1 md:order-2 mt-10"
      >
        {loading ? (
          <div
            className={`${fontClass} flex flex-col grow text-left font-suwannaphum text-xl whitespace-nowrap text-black text-opacity-60 max-md:mt-10 max-md:max-w-full`}
          >
            <Skeleton height={50} width="70%" />
            <Skeleton height={30} width="100%" />
            <Skeleton height={30} width="100%" />
            <Skeleton height={50} width="100%" />
            <Skeleton height={50} width="100%" />
            <Skeleton height={150} width="100%" />
            <Skeleton height={40} width="20%" />
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <div
              className={`${fontClass} flex flex-col grow text-left font-suwannaphum text-xl whitespace-nowrap text-black text-opacity-60 max-md:mt-10 max-md:max-w-full`}
            >
              <div
                data-aos="zoom-in-up"
                className="text-blue-600 text-left text-3xl font-bold max-md:max-w-full"
              >
                <span
                  className={`${fontClass} text-gradient bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent text-4xl`}
                >
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
              <div
                className={`${fontClass} self-start mt-4 max-md:mt-10 max-md:ml-2.5 dark:text-gray-300`}
              >
                {t("Contact-us.name")}
              </div>
              <input
                type="text"
                name="user_name"
                placeholder={t("registrationForm.placeholders.username")}
                className={`${fontClass} shrink-0 mt-2.5 rounded-lg border border-black border-solid h-[50px] max-md:max-w-full text-black`}
                required
              />
              <div
                className={`${fontClass} self-start mt-3 max-md:ml-2.5 dark:text-gray-300`}
              >
                {t("Contact-us.email")}
              </div>
              <input
                type="email"
                name="user_email"
                placeholder={t("registrationForm.placeholders.email")}
                className={`${fontClass} shrink-0 mt-3 rounded-lg border border-black border-solid h-[50px] max-md:max-w-full text-black`}
                required
              />
              <div
                className={`${fontClass} flex flex-col mt-2.5 max-md:max-w-full dark:text-gray-300`}
              >
                <div className="self-start">{t("Contact-us.message")}</div>
                <textarea
                  name="message"
                  placeholder={t("Contact-us.type-your-message")}
                  className="shrink-0 mt-3 rounded-lg border border-black border-solid h-[150px] max-md:max-w-full text-black"
                  required
                ></textarea>
              </div>
              <div className={`${fontClass} mt-6 flex flex-wrap gap-2`}>
                <Button type="submit" color="blue">
                  {t("Contact-us.send_message")}
                </Button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
