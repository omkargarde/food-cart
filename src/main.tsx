import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { About } from "./components/About/About.tsx";
import { Body } from "./components/Body/Body.tsx";
import { Contact } from "./components/Contact/Contact.tsx";
import { ErrorPage } from "./components/ErrorPage/ErrorPage.tsx";
import { RestaurantMenu } from "./components/RestaurantMenu/RestaurantMenu.tsx";
import "./index.css";
const appRouter = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
