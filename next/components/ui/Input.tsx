"use client";

const Input = ({
  type,
  value,
  onChange,
  placeholder,
}: {
  type: string;
  value: string;
  onChange: (e: any) => void;
  placeholder: string;
}) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="rounded-md bg-neutral-200 px-2 py-1 dark:bg-neutral-800"
  />
);

export default Input;
