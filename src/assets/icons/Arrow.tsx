import React from "react";

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: number | string;
    color?: string;
}

export const Arrow: React.FC<IconProps> = ({
                                                   size = 24,
                                                   color = "currentColor",
                                                   ...props
                                               }) => {
    return (
        <div {...props}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width={size}
                height={size}
                fill={color}
            >
                <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256" />
            </svg>
        </div>
    );
};
