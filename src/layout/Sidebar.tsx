import React from "react";
import { NavLink } from "react-router-dom";
import { nav } from "../assets/constants";
import { Settings } from "../assets/icons/Settings";
import { User } from "../assets/icons/User";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    return (
        <>
            <div
                className={`sidebar-backdrop ${isOpen ? "show" : ""}`}
                onClick={onClose}
            />

            <aside
                className={`sidebar bg-white py-5 shadow-sm ${
                    isOpen ? "open" : ""
                }`}
            >
                <div
                    style={{ width: "max-content" }}
                    className="position-relative m-auto d-flex flex-column align-items-center justify-content-center"
                >
                    <User size={40} background="#333333" />
                    <Settings
                        size={12}
                        className="position-absolute bottom-0 end-0"
                        background="#FFFFFF"
                        color="#333333"
                    />
                </div>

                <nav className="mt-5 d-flex flex-column justify-content-center align-items-center gap-4 text-uppercase">
                    {nav.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className={({ isActive }) =>
                                `text-decoration-none text-dark ${
                                    isActive ? "nav-active" : ""
                                }`
                            }
                            onClick={onClose}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
