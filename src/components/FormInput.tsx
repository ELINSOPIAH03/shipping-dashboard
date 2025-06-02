import React from "react";

type FormInputProps = {
    label: string;
    id: string;
    type?: string; // optional, default ke "text"
    placeholder?: string; // optional
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    errorMessage?: string;
};

const FormInput: React.FC<FormInputProps> = ({
    label,
    id,
    type = "text",
    placeholder = "",
    value,
    onChange,
    required = false,
    errorMessage,
}) => {
    return (
        <div className="flex flex-col gap-[8px] w-full">
            <label htmlFor={id} className="text-white text-sm sm:text-base font-bold leading-[23px]">
                {label}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className="border text-xs sm:text-sm border-neutral-200 focus:outline-neutral-200 w-full py-[15px] px-[10px] sm:py-[20px] sm:px-[16px] bg-neutral-50"
            />
            {errorMessage && (
                <p className="text-xs sm:text-sm text-red-500 mt-1">{errorMessage}</p>
            )}
        </div>
    );
};

export default FormInput;
