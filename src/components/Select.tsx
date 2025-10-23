import React from "react";

type Option = {
    value: string | number;
    label: string;
}

type SelectProps = {
    options: Option[];
    value?: string | number;
    onChange?: (value: string | number) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
                                           options,
                                           value,
                                           onChange,
                                           placeholder = "...",
                                           className = "",
                                           disabled
                                       }) => {
    return (
        <select
            className={`form-select  ${className}`}
            value={value}
            disabled={disabled}
            onChange={(e) => onChange && onChange(e.target.value)}
        >
            {placeholder && (
                <option value="" disabled>
                    {placeholder}
                </option>
            )}
            {options.map((opt) => (
                <option key={opt.value} id={String(opt.value)} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
};
export default Select;