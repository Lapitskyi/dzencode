import React from "react";

interface UserIconProps {
    size?: number;
    color?: string;
    background?: string;
    className?: string;
    rounded?: boolean;
}

export const User: React.FC<UserIconProps> = ({
                                                      size = 32,
                                                      color = "currentColor",
                                                      background = "transparent",
                                                      className = "",
                                                      rounded = true,
                                                  }) => {
    const containerStyle: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background,
        width: size * 1.5,
        height: size * 1.5,
        borderRadius: rounded ? "50%" : "0",
    };

    return (
        <div className={className} style={containerStyle}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width={size}
                height={size}
                fill={color}
            >
                <g id="about">
                    <path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z"/>
                    <path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z"/>
                </g>
            </svg>
        </div>
    );
};
