import App from './app';
import Error from './error/error';
import { createBrowserRouter } from "react-router-dom";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
    },
]);