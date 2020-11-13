import React from 'react';

const InputWrapper = ({
    className,
    value,
    handleChange,
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
                value={value}
                onChange={handleChange}
                type={type}
                id={id}
                minLength={minLength}
                maxLength={maxLength}
                required={true}
                autoComplete={autoComplete}
            />
            <label htmlFor='email'>{label}</label>
        </div>
    );
};

export default InputWrapper;
