import React from 'react';

const InputWrapper = ({
    className,
    value,
    name,
    onChange,
    type,
    id,
    minLength,
    maxLength,
    autoComplete,
    label,
}) => {
    return (
        <div className={`${className}__inputWrapper inputWrapper`}>
            <input
                type={type}
                id={id}
                name={name}
                minLength={minLength}
                maxLength={maxLength}
                required={true}
                autoComplete={autoComplete}
                value={value}
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default InputWrapper;
