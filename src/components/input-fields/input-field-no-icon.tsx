import { IInputFieldNoIcon } from "./interface";

// Define the InputFieldNoIcon component
const InputFieldNoIcon = ({
  id,
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
}: IInputFieldNoIcon) => {
  return (
    <>
      <div className="flex flex-col w-full text-[#2e2e2e]/70">
        {/* Render the label */}
        <label
          htmlFor={id}
          className="mb-1 text-[.95rem] font-semibold min-[650px]:text-[1rem] min-[650px]:mb-[0.3rem] capitalize"
          aria-label="input-field-label"
        >
          {label}
        </label>
        {/* Render the input field */}
        <input
          type={type}
          name={name}
          id={id}
          className="flex-1 outline-none border p-2 bg-transparent text-[#2e2e2e]/80 tracking-wide font-semibold placeholder:font-medium placeholder-[#2e2e2e]/50 placeholder:text-[.9rem] border-[#2e2e2e]/50 rounded-sm"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            onChange(e);
          }}
          aria-label="input-field"
        />
      </div>
    </>
  );
};

export default InputFieldNoIcon;
