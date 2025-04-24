import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home1 from "../Pages/Home1/Home1";
import Home2 from "../Pages/Home2/Home2";
import AboutPage from "../Pages/AboutPage";
import ServicesPage from "../Pages/ServicesPage";
import PriorityPage from "../Pages/PriorityPage";
import CasesPage from "../Pages/CasesPage";
import SpecialCase from "../Pages/SpecialCase";
import BlogsPage from "../Pages/BlogsPage";
import SingleBlog from "../Pages/SingleBlog";
import Contacts from "../Pages/Contacts";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children:[
            {
                path: '/',
                element: <Home1 />
            },
            {
                path: '/home2',
                element: <Home2 />
            },
            {
                path: '/about-us',
                element: <AboutPage />
            },
            {
                path: '/services',
                element: <ServicesPage />
            },
            {
                path: '/priority',
                element: <PriorityPage />
            },
            {
                path: '/cases',
                element: <CasesPage />
            },
            {
                path: '/special-case',
                element: <SpecialCase />
            },
            {
                path: '/blogs',
                element: <BlogsPage />
            },
            {
                path: '/blog',
                element: <SingleBlog />
            },
            {
                path: '/contacts',
                element: <Contacts />
            },
        ]
    },
]);
export default router;