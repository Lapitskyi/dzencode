import React, { useState, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="w-100 vh-100 d-flex flex-column">
            <Header onToggleSidebar={() => setSidebarOpen((s) => !s)} />

            <div className="container flex-grow-1 d-flex p-0">
                <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

                <main className="col-md-9 flex-grow-1 bg-white p-0">
                    <Suspense fallback={<div className="text-center">Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
