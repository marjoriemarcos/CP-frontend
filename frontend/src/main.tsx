import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { HomePage } from "./components/HomePage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/api.ts";
import "./styles/global.css";
import { CountryPage } from "./components/CountryPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/countries/:code",
        element: <CountryPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>
);
