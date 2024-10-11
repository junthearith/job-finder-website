import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { TextInput, Label } from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser, fetchProfile } from "../../redux/features/user/userSlice";
import { useTranslation } from "react-i18next";
import useFontClass from "../../common/useFontClass";
import ResetPasswordModal from "./ResetPasswordModal"; // Adjust the path as needed
import useModal from "../../common/useModal"; // Import the custom hook
import { toast } from "react-toastify";
import ThemeToggle from "../../common/ThemeToggle";
import { HiEye, HiEyeOff } from "react-icons/hi";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fontClass } = useFontClass();
  const { t } = useTranslation();
  const { isLoading, error, isAuthenticated, accessToken } = useSelector(
    (state) => state.user
  );
  const { isModalOpen, openModal, closeModal } = useModal(); // Use the custom hook
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t("loginForm.validation.invalid"))
        .required(t("loginForm.validation.email")),
      password: Yup.string().required(t("loginForm.validation.password")),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
      toast.success(
        <div className={fontClass}>
          {t("loginForm.success", { email: formik.values.email })}
        </div>
      );
      dispatch(fetchProfile(accessToken));
      navigate("/");
    }
  }, [isAuthenticated, navigate, formik.values.email, t, fontClass]);

  useEffect(() => {
    if (error) {
      toast.error(<div className={fontClass}>{t("loginForm.error")}</div>);
    }
  }, [error, t, fontClass]);

  return (
    <div
      className={`${fontClass} bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto`}
    >
      <div className="flex justify-between items-center mb-6 sm:mb-8">
        {" "}
        {/* Add this div */}
        <h2
          className={`${fontClass} text-2xl sm:text-3xl font-semibold text-left text-primary-700 dark:text-white`}
        >
          {t("loginForm.title")}
        </h2>
        <div className="bg-primary-700 rounded-lg dark:bg-transparent">
          <ThemeToggle />
        </div>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-4 sm:gap-6"
      >
        <div className="text-left">
          <Label
            htmlFor="email"
            value={t("loginForm.labels.email")}
            className={`${fontClass} text-base mb-2`}
          />
          <TextInput
            id="email"
            name="email"
            type="email"
            placeholder={t('loginForm.placeholderEmail')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            color={
              formik.touched.email && formik.errors.email ? "failure" : "gray"
            }
            helperText={
              formik.touched.email && formik.errors.email && formik.errors.email
            }
            className={`${fontClass} text-base sm:text-lg`}
          />
        </div>
        <div className="text-left">
          <Label
            htmlFor="password"
            value={t("loginForm.labels.password")}
            className={`${fontClass} text-base mb-2`}
          />
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder={t('loginForm.placeholderPassword')}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`border rounded-lg w-full text-base sm:text-base pr-10 ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-gray-300"
              } ${fontClass} border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500`}
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              {showPassword ? (
                <HiEyeOff className="h-5 w-5 text-gray-500" />
              ) : (
                <HiEye className="h-5 w-5 text-gray-500" />
              )}
            </div>
            <div
              className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              {/* Placeholder icon */}
              {showPassword ? (
                <HiEyeOff className="h-5 w-5" />
              ) : (
                <HiEye className="h-5 w-5" />
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className={`${fontClass} text-lg sm:text-lg text-blue-600 dark:text-white hover:underline`}
            onClick={openModal} // Use the custom hook to open the modal
          >
            {t("loginForm.labels.forgotPassword")}
          </button>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`${fontClass} w-full bg-primary-700 text-white font-medium rounded-lg py-3 hover:bg-primary-750 disabled:opacity-50`}
        >
          {isLoading
            ? t("loginForm.labels.logining")
            : t("loginForm.labels.login")}
        </button>
      </form>
      <p
        className={`${fontClass} mt-6 sm:mt-8 text-lg sm:text-lg text-center text-gray-600 dark:text-slate-300`}
      >
        {t("loginForm.labels.unauthorized")}{" "}
        <NavLink
          to={"/register"}
          className="text-blue-600 dark:text-white hover:underline font-medium text-lg"
        >
          {t("loginForm.labels.signUp")}
        </NavLink>
      </p>
      <ResetPasswordModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default LoginForm;
