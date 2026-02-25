import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import LawyerDetails from "../Pages/LawyerDetails/LawyerDetails";

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
    ],
  },
]);
