// Importing necessary dependencies
import { Icon } from "@iconify/react";
import { IInputField } from "./interface";

// Defining the InputField component
const InputField = ({
  id,
  label,
  icon,
  type,
  name,
  placeholder,
  value,
  onChange,
}: IInputField) => {
  return (
    <>
      <div className="flex flex-col w-full text-gray-500 border-b-[2px] border-gray-400/60">
        {/* Label for the input field */}
        <label
          htmlFor={id}
          className="mb-1 text-[.95rem] font-semibold min-[650px]:text-[1rem] min-[650px]:mb-[0.3rem] capitalize"
          aria-label="input-field-label"
        >
          {label}
        </label>
        <div className="flex items-center w-full gap-x-1">
          {/* Icon for the input field */}
          <span className="text-[1rem] min-[650px]:text-[1.3rem]">
            <Icon icon={icon} />
          </span>
          {/* Input field */}
          <input
            type={type}
            name={name}
            id={id}
            className="outline-none text-[1rem] px-1 pb-1 placeholder:text-gray-500 font-semibold placeholder:font-normal tracking-wide placeholder:text-[1rem] min-[650px]:placeholder:text-[1.03rem] min-[650px]:text-[1.03rem] flex-1"
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
              onChange(e);
            }}
            aria-label="input-field"
          />
        </div>
      </div>
    </>
  );
};

export default InputField;
