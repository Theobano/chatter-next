import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Auth } from "./pages";
import { LogIn, Register, VerifyEmail } from "./app/auth";
import { AuthPages } from "./app/auth/[start]/layout";
import { Home } from "./app/(home)";
import { Sidebar } from "./components/sidebar/Sidebar";
import { CreateArticle, Feed, PrivateRouteWrapper } from "./pages/private";
import { Verify } from "crypto";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "",
        element: <AuthPages />,
        children: [
          {
            path: "",
            element: <LogIn />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
      {
        path: "verify-email",
        element: <VerifyEmail />,
      },
    ],
  },
  {
    element: <PrivateRouteWrapper />,
    children: [
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path: "/create-article",
        element: <CreateArticle />,
      },
      {
        path: "/blog/:articleId",
        element: <Feed />,
        
      },
    ],
  },
]);
