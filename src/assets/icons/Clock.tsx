import React from "react";

interface ShieldFullProps {
    size?: number;
    color?: string;
    background?: string;
    className?: string;
}

export const Clock: React.FC<ShieldFullProps> = ({
                                                          size = 16,
                                                          color = "currentColor",
                                                          background = "transparent",
                                                          className = "",
                                                      }) => (
    <div
        className={className}
        style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background,
            width: size * 1.5,
            height: size * 1.5,
        }}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill={color}
            viewBox="0 0 16 16"
        >
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
        </svg>
    </div>
);


