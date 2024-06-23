import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Label } from "@headlessui/react/dist/components/label/label";

interface InputProps {
  name: string;
  label: string;
  formCode: string;
  type: string;
  state: any;
  width: number | string;
  textColor: string;
  bgInputs: string;
}

const InputComponent: React.FC<InputProps> = ({
  type,
  name,
  formCode,
  state,
  width,
  label,
  textColor,
  bgInputs,
}) => {
  //   const [state, handleSubmit] = useForm(formCode);
  return (
    <div className="mb-2.5">
      <label
        htmlFor={name}
        className={`block text-sm font-semibold leading-6 ${textColor}`}
      >
        {label}
      </label>
      <div>
        <input
          type={type}
          name={name}
          id={name}
          autoComplete="label"
          className={`block w-${width} ${bgInputs} rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
        />
        <ValidationError prefix={name} field="email" errors={state.errors} />
      </div>
    </div>
  );
};

export default InputComponent;
