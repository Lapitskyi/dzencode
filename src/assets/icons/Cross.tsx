import React from "react";

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: number | string;
    color?: string;
}

export const Cross: React.FC<IconProps> = ({
                                                   size = 24,
                                                   color = "currentColor",
                                                   ...props
                                               }) => {
    return (
        <div {...props}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width={size}
                height={size}
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            >
                <line x1="7" y1="7" x2="25" y2="25" />
                <line x1="7" y1="25" x2="25" y2="7" />
            </svg>
        </div>
    );
};
