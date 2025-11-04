"use client";
import { useState } from "react";
import GeneralAuthInputField from "../authInputFields/GeneralAuthInputField";
import AuthSubTitle from "../AuthSubTitle";
import AuthTitle from "../AuthTitle";
import PasswordInputField from "../authInputFields/PasswordInputField";
import Link from "next/link";
import AuthBtn from "../AuthBtn";

const LoginMain = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState({
    email: false,
    password: false,
  });

  const searchParams = new URLSearchParams(window.location.search);
  const redirectUrl = searchParams.get("redirectUrl");

  const handleInputBlur =
    (fieldName: string) => (e: { target: { value: string } }) => {
      setValue({
        ...value,
        [fieldName]: !e.target.value,
      });
    };

  const handleCustomLogin = async () => {};

  return (
    // <OpacityTransition>
    <div className="flex flex-col justify-center md:h-screen w-full md:w-11/12 xl:w-[650px] container my-12 md:my-8 lg:my-0 px-4">
      <div className="w-full md:w-1/2 lg:w-3/5 mb-5">
        <AuthTitle title="Login" />
        <AuthSubTitle title=" Welcome Back. Let's Start Your Healthy Meal Routine With Better Plate" />
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <form className="w-full" onSubmit={handleCustomLogin}>
          <GeneralAuthInputField
            label="Email Address"
            name="email"
            type="email"
            placeHolder="Enter Email Address"
            commonError="Email Address Required"
            value={value.email}
            handleInputBlur={handleInputBlur}
          />
          <PasswordInputField value={value} handleInputBlur={handleInputBlur} />
          <div className="flex items-center justify-between mb-5 mt-1">
            <Link
              href="/auth/forgetPassword/verifyEmail"
              className="text-black hover:text-secondary duration-300 text-xs md:text-sm font-poppins cursor-pointer"
            >
              Forgot Password?
            </Link>
          </div>
          <AuthBtn title="Login Now" isLoading={isLoading} />
        </form>
        <div className="flex md:hidden items-center justify-center gap-1 mt-1">
          <p className="text-xs font-poppins">{`Don't Have An Account?`}</p>
          <Link
            href={
              redirectUrl
                ? `/auth/register?redirectUrl=${redirectUrl.toString()}`
                : "/auth/register"
            }
            className="text-green font-medium hover:text-secondary hover:text-secondary1 duration-300 text-xs font-poppins"
          >
            Register Now
          </Link>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-start gap-1 mt-5">
        <p className="text-sm font-poppins">{`Don't Have An Account?`}</p>
        <Link
          href={
            redirectUrl
              ? `/auth/register?redirectUrl=${redirectUrl.toString()}`
              : "/auth/register"
          }
          className="text-green font-medium hover:text-secondary hover:text-secondary1 duration-300 text-sm font-poppins"
        >
          Register Now
        </Link>
      </div>
    </div>
    // </OpacityTransition>
  );
};

export default LoginMain;
