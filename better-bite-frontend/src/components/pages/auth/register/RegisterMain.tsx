"use client";
import { useState } from "react";
import GeneralAuthInputField from "../authInputFields/GeneralAuthInputField";
import AuthSubTitle from "../AuthSubTitle";
import AuthTitle from "../AuthTitle";
import PasswordInputField from "../authInputFields/PasswordInputField";
import Link from "next/link";
import AuthBtn from "../AuthBtn";

const RegisterMain = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    contactNumber: false,
    role: false,
  });

  const handleInputBlur =
    (fieldName: string) => (e: { target: { value: string } }) => {
      setValue({
        ...value,
        [fieldName]: !e.target.value,
      });
    };

  const searchParams = new URLSearchParams(window.location.search);
  const redirectUrl = searchParams.get("redirectUrl");

  const handleCustomRegister = async () => {};
  return (
    // <OpacityTransition>
    <div className="flex flex-col justify-center w-full md:w-11/12 xl:w-2/5 container my-12 md:my-8 xl:my-0 px-4 min-h-screen">
      <div className="w-full md:w-1/2 mb-5">
        <AuthTitle title="Register Now" />
        <AuthSubTitle title="Let's Start Your Healthy Meal Routine With My Target" />
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <form className="w-full" onSubmit={handleCustomRegister}>
          <div className="grid lg:grid-cols-2 lg:gap-4">
            <GeneralAuthInputField
              label="First name"
              name="firstName"
              type="text"
              placeHolder="Enter First Name"
              commonError="First Name Required"
              value={value.firstName}
              handleInputBlur={handleInputBlur}
            />
            <GeneralAuthInputField
              label="Last name"
              name="lastName"
              type="text"
              placeHolder="Enter Last Name"
              commonError="Last Name Required"
              value={value.lastName}
              handleInputBlur={handleInputBlur}
            />
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-4">
            <GeneralAuthInputField
              label="Email Address"
              name="email"
              type="email"
              placeHolder="Enter Email Address"
              commonError="Email Address Required"
              value={value.email}
              handleInputBlur={handleInputBlur}
            />
            <GeneralAuthInputField
              label="Contact Number"
              name="contactNumber"
              type="tel"
              placeHolder="Enter Contact Number"
              commonError="Contact Number Required"
              value={value.contactNumber}
              handleInputBlur={handleInputBlur}
            />
          </div>
          <PasswordInputField value={value} handleInputBlur={handleInputBlur} />
          <div className="flex items-center justify-between mb-5 mt-1">
            <Link
              href=""
              className="text-black hover:text-secondary duration-300 text-xs md:text-sm font-poppins cursor-pointer"
            >
              Forgot Password?
            </Link>
          </div>
          <AuthBtn title="Register Now" isLoading={isLoading} />
        </form>
        <div className="flex md:hidden items-center justify-center gap-1 mt-1">
          <p className="text-xs font-poppins">{`Don't Have An Account?`}</p>
          <Link
            href={
              redirectUrl
                ? `/auth/login?redirectUrl=${redirectUrl.toString()}`
                : "/auth/login"
            }
            className="text-green font-medium hover:text-secondary hover:text-secondary1 duration-300 text-xs font-poppins"
          >
            Login Now
          </Link>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-start gap-1 mt-5">
        <p className="text-sm font-poppins">{`Don't Have An Account?`}</p>
        <Link
          href={
            redirectUrl
              ? `/auth/login?redirectUrl=${redirectUrl.toString()}`
              : "/auth/login"
          }
          className="text-green font-medium hover:text-secondary hover:text-secondary1 duration-300 text-sm font-poppins"
        >
          Login Now
        </Link>
      </div>
    </div>
    // </OpacityTransition>
  );
};

export default RegisterMain;
