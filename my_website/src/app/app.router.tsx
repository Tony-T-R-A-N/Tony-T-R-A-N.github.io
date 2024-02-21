import App from './app';
import ErrorPage from './error/error.page';
import { createBrowserRouter } from "react-router-dom";
import Template1HomePage from './project/template1/template1.home.page';
import Template1 from './project/template1/template1.page';
import Template1MenuPage from './project/template1/template1.menu.page';

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
        ],
    },
    {
        path: "template1",
        element: <Template1 />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "home",
                element: <Template1HomePage />,
                errorElement: <ErrorPage />,
            },
            {
                path: "menu",
                element: <Template1MenuPage />,
                errorElement: <ErrorPage />,
            },
        ]
    },
]);