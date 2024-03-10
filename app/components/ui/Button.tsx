"use client";

const Button = ({
  children,
  onClickHandler,
  isDisabled,
}: {
  children: React.ReactNode;
  onClickHandler: () => void;
  isDisabled: boolean;
}) => (
  <button
    onClick={onClickHandler}
    className="flex h-10 items-center justify-center gap-2 rounded-md bg-rose-600 p-1 text-white"
    disabled={isDisabled}
  >
    {children}
  </button>
);

export default Button;
