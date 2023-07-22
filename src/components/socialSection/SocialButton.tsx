import React from "react";

interface SocialButtonProps {
  icon: React.ReactNode;
  text: string;
  href: string;
  className?: string;
}

const SocialButton = ({
  icon,
  text,
  href,
  className = "",
}: SocialButtonProps) => {
  return (
    <a
      target='_blank'
      href={href}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-brand4-content p-4 px-6 py-3 font-medium text-brand4-content shadow-md transition duration-300 ease-out"
    >
      <span className="ease absolute inset-0 flex h-full w-full -translate-x-full text-base items-center justify-center bg-brand4-content text-brand4 duration-300 group-hover:translate-x-0">
        {icon}
      </span>
      <span className="ease absolute flex h-full w-full transform items-center text-sm font-light font-body justify-center text-brand4-content transition-all duration-300 group-hover:translate-x-full">
        {text}
      </span>
      <span className="invisible relative text-sm font-body">{text}</span>
    </a>
  );
};

export default SocialButton;
