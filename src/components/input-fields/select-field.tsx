import { ISelectField } from "./interface";

const SelectField = ({
  id, // The ID of the select field
  label, // The label for the select field
  name, // The name attribute of the select field
  value, // The current value of the select field
  onChange, // The event handler for when the select field value changes
  options, // The array of options for the select field
}: ISelectField) => {
  return (
    <>
      <div className="flex flex-col w-full text-[#2e2e2e]/80">
        {/* Label */}
        <label
          htmlFor={id}
          className="mb-1 text-[.95rem] font-semibold min-[650px]:text-[1rem] min-[650px]:mb-[0.3rem] capitalize"
          aria-label="input-field-label"
        >
          {label}
        </label>
        <div className="flex mt-2 gap-x-2">
          {/* Select input */}
          <select
            name={name}
            value={value}
            onChange={onChange}
            className="border py-[.3rem] px-[.4rem] rounded border-[#2e2e2e]/50 outline-none w-full"
          >
            {/* Default option */}
            <option value="">Select one</option>
            {/* Dynamic options */}
            {Array.isArray(options) &&
              options.map((option) => (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default SelectField;
