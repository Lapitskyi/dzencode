import React from "react";

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: number | string;
    color?: string;
}

export const List: React.FC<IconProps> = ({
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
                fill={color}
            >
                <g data-name="Layer 2">
                    <path d="M28,10H4A1,1,0,0,1,4,8H28a1,1,0,0,1,0,2Z" />
                    <path d="M28,17H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z" />
                    <path d="M28,24H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z" />
                </g>
            </svg>
        </div>
    );
};


