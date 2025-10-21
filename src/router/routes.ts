import { createBrowserRouter } from "react-router";
import App from "../App.tsx";
import MainLayout from "../layout/MainLayout.tsx";
import Receipt from "../pages/Receipt.tsx";
import Group from "../pages/Group.tsx";
import NotFound from "../pages/NotFound.tsx";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "",
                Component: MainLayout,
                children: [
                    { index: true, Component: Receipt },
                    { path: '/group', Component: Group },
                    { path: '*', Component: NotFound },
                ],
            },
        ],
    },
]);
