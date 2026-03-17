import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/layout/RootLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ProductsPage } from "./pages/ProductsPage";
import { SolutionsPage } from "./pages/SolutionsPage";
import { IndustriesPage } from "./pages/IndustriesPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "services", Component: ServicesPage },
      { path: "products", Component: ProductsPage },
      { path: "solutions", Component: SolutionsPage },
      { path: "industries", Component: IndustriesPage },
      { path: "portfolio", Component: PortfolioPage },
      { path: "blog", Component: BlogPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
