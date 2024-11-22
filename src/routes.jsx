import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/error";
import Public from "./layout/Public";
import Private from "./layout/Private";
import Blog from "./pages/Blog";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Public />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/blog/:id",
                element: <Blog />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <Private />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/dashboard", 
                element: <h1>hello Dashboard</h1>, 
            },
            {
                path: "new-page", 
                element: <h1>hello new-page</h1>, 
            }
        ],
    },
]);
