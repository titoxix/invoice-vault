import React from "react";

export default function Option({
  text,
  navigate,
  icon,
}: {
  text: string;
  navigate: () => void;
  icon: React.ReactNode;
}) {
  return (
    <>
      <button
        data-tooltip-target="tooltip-home"
        type="button"
        className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-800 group"
        onClick={navigate}
      >
        {icon}
        <span className="sr-only">{text}</span>
      </button>
      <div
        id="tooltip-home"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
      >
        {text}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
}
