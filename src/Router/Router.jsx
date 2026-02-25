import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import LawyerDetails from "../Pages/LawyerDetails/LawyerDetails";
import Booking from "../Pages/Booking/Booking";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Emergency from "../Pages/Emergency/Emergency";
import { Link } from "react-router";

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
      {
        path: "/contact_us",
        Component: Contact,
      },
      {
        path: "/emergency",
        Component: Emergency,
      },
    ],
    errorElement: (
      <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-4">
        <div className="text-center max-w-md w-full">
          {/* 404 */}
          <h1 className="font-plus-jakarta-sans text-[120px] md:text-[160px] font-bold text-[#176AE5] leading-none">
            404
          </h1>

          {/* Message */}
          <h2 className="font-plus-jakarta-sans text-2xl md:text-3xl font-bold text-[#141414] mt-2 mb-3">
            Page Not Found
          </h2>
          <p className="font-plus-jakarta-sans text-[#0F0F0F99] text-base mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Button */}
          <Link to="/">
            <button className="btn btn-wide text-[#176AE5] rounded-full border border-[#176AE5] hover:bg-[#176AE5] hover:text-white transition-colors duration-200">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    ),
  },
]);
