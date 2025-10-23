import React from "react";
import Logo from "../components/Logo";
import { Clock } from "../assets/icons/Clock";
import { useCurrentTime } from "../utils/hooks/useCurrentTime";

interface HeaderProps {
    onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
    const { weekDay, currentDay, currentTime } = useCurrentTime();

    return (
        <header className="bg-white shadow-sm position-relative z-2">
            <div className="container d-flex justify-content-between align-items-center py-3">
                <button
                    className="btn btn-outline-secondary d-lg-none"
                    onClick={onToggleSidebar}
                >
                    ☰
                </button>

                <Logo />

                <input
                    className="form-control w-25 d-none d-md-block"
                    type="text"
                    placeholder="Search"
                />

                <div className="d-flex flex-column align-items-start gap-1">
                    <div>{weekDay}</div>
                    <div className="d-flex align-items-center gap-2">
                        <div>{currentDay}</div>
                        <div className="d-flex align-items-center gap-1">
                            <Clock size={12} color="#66b814" />
                            <div>{currentTime}</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
