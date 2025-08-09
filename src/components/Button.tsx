import React from "react";

export default function Button({
    id,
    title,
    leftIcon,
    containerClass,
    rightIcon,
}: {
    id: string;
    title: string;
    leftIcon: React.ReactNode;
    containerClass: string;
    rightIcon?: React.ReactNode;
}) {
    return (
        <button
            id={id}
            className={`${containerClass} group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black`}
        >
            {leftIcon}
            <span className="relative incline-flex overflow-hidden font-general font-xs uppercase">
                <div>{title}</div>
            </span>

            {rightIcon}
        </button>
    );
}
