"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface IPasswordInputField {
  value: {
    password: boolean;
  };
  handleInputBlur: (name: string) => void;
}

const PasswordInputField = ({
  value,
  handleInputBlur,
}: IPasswordInputField) => {
  const [isPassHidden, setIsPassHidden] = useState(true);

  return (
    <div className="w-full">
      <label
        htmlFor="password"
        className="text-black font-poppins font-normal text-sm md:text-base"
      >
        Password{" "}
        {value.password && (
          <span className="text-error text-xs ml-1">Password Required!</span>
        )}
      </label>

      <div className="relative">
        <input
          id="password"
          name="password"
          type={isPassHidden ? "password" : "text"}
          placeholder="Enter Password"
          className={`w-full py-3 md:py-2 px-3 text-sm md:text-base rounded-lg my-3 outline-none border bg-white pr-10 transition-colors duration-200 ${
            value.password
              ? "border-error placeholder:text-error focus:border-error"
              : "border-lightGray placeholder:text-gray focus:border-primary"
          }`}
          onBlur={() => handleInputBlur("password")}
          required
          autoComplete="off"
        />

        {/* Toggle Password Visibility */}
        <button
          type="button"
          className="absolute top-1/2 -translate-y-1/2 right-3 text-gray hover:text-black transition-colors"
          onClick={() => setIsPassHidden((prev) => !prev)}
          aria-label={isPassHidden ? "Show Password" : "Hide Password"}
        >
          {isPassHidden ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInputField;
