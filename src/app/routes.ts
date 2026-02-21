import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Pricing } from "./pages/Pricing";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "pricing", Component: Pricing },
      { path: "about", Component: About },
      { path: "portfolio", Component: Portfolio },
      { path: "contact", Component: Contact },
    ],
  },
]);
