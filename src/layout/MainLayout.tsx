import {Suspense} from "react";
import {Outlet} from "react-router-dom";
import Header from "./Header.tsx";
import Sidebar from "./Sidebar.tsx";


const MainLayout = () => {

    return (
        <div className="w-100 vh-100 d-flex flex-column p-0">
            <Header/>

            <div className="w-100 h-100 d-flex justify-content-center m-auto flex-grow-1">
                <div className="container">
                    <div className="w-100 h-100 d-flex justify-content-center">
                        <Sidebar />
                        <main className="col-md-9 bg-white order-md-2 order-1">
                            <Suspense fallback={<div style={{textAlign: "center"}}>Loading page...</div>}>
                                <Outlet/>
                            </Suspense>
                        </main>
                    </div>

                </div>

                </div>


        </div>
    )
}


export default MainLayout;