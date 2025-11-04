import { FocusEventHandler } from "react";

interface IGeneralAuthInputField {
  label: string;
  placeHolder: string;
  type: string;
  name: string;
  commonError: string;
  value: boolean;
  handleInputBlur: (
    name: string
  ) => FocusEventHandler<HTMLInputElement> | undefined;
  defaultValue?: string | number;
  disabled?: boolean;
}

const GeneralAuthInputField = ({
  label,
  placeHolder,
  type,
  name,
  commonError,
  value,
  handleInputBlur,
  defaultValue,
  disabled,
}: IGeneralAuthInputField) => {
  return (
    <div>
      <label
        className={"text-black font-normal text-sm md:text-base font-poppins"}
      >
        {label}{" "}
        {value && <span className={"text-error text-xs"}>{commonError}</span>}
      </label>
      <input
        defaultValue={defaultValue}
        name={name}
        id={name}
        type={type}
        placeholder={placeHolder}
        className={`w-full py-4 md:py-3 px-2 text-xs md:text-sm rounded my-3 outline-none border bg-white ${
          value
            ? "border-error placeholder:text-error"
            : "border-lightGray placeholder:text-gray"
        } disabled:opacity-60`}
        onBlur={handleInputBlur(name)}
        required
        disabled={disabled}
      />
    </div>
  );
};

export default GeneralAuthInputField;
