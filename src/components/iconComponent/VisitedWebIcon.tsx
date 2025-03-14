import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

const VisitedWebIcon: React.FC<IconProps> = ({
  size = 18,
  color = "currentColor",
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.96875 0.0625H1.03125C0.451172 0.0625 0 0.535156 0 1.09375V8.65625C0 9.23633 0.451172 9.6875 1.03125 9.6875H9.96875C10.5273 9.6875 11 9.23633 11 8.65625V1.09375C11 0.535156 10.5273 0.0625 9.96875 0.0625ZM2.75 2.55469C2.75 2.70508 2.62109 2.8125 2.49219 2.8125H1.63281C1.48242 2.8125 1.375 2.70508 1.375 2.55469V1.69531C1.375 1.56641 1.48242 1.4375 1.63281 1.4375H2.49219C2.62109 1.4375 2.75 1.56641 2.75 1.69531V2.55469ZM9.625 2.55469C9.625 2.70508 9.49609 2.8125 9.36719 2.8125H4.03906C3.88867 2.8125 3.78125 2.70508 3.78125 2.55469V1.69531C3.78125 1.56641 3.88867 1.4375 4.03906 1.4375H9.36719C9.49609 1.4375 9.625 1.56641 9.625 1.69531V2.55469Z"
        fill={color}
      />
    </svg>
  );
};

export default VisitedWebIcon;
