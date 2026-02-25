import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import LawyerDetails from "../Pages/LawyerDetails/LawyerDetails";
import Booking from "../Pages/Booking/Booking";
import Blog from "../Pages/Blog/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        loader: () =>
          fetch(
            "https://raw.githubusercontent.com/FahimFaysalNirjhar/Lawyer-Data/refs/heads/main/Lawyesrs.json",
          ).then((res) => res.json()),
        Component: Home,
      },
      {
        path: "/lawyerdetails/:id",
        loader: () =>
          fetch(
            "https://raw.githubusercontent.com/FahimFaysalNirjhar/Lawyer-Data/refs/heads/main/Lawyesrs.json",
          ).then((res) => res.json()),
        Component: LawyerDetails,
      },
      {
        path: "/booking",
        loader: () =>
          fetch(
            "https://raw.githubusercontent.com/FahimFaysalNirjhar/Lawyer-Data/refs/heads/main/Lawyesrs.json",
          ).then((res) => res.json()),
        Component: Booking,
      },
      {
        path: "/blog",
        loader: () =>
          fetch(
            "https://raw.githubusercontent.com/FahimFaysalNirjhar/Lawyer-blog-Data/refs/heads/main/lawyer_blog.json",
          ).then((res) => res.json()),
        Component: Blog,
      },
    ],
  },
]);
