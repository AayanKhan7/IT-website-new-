import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/layout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        lazy: async () => {
          const { HomePage } = await import("./pages/HomePage");
          return { Component: HomePage };
        },
      },
      {
        path: "about",
        lazy: async () => {
          const { AboutPage } = await import("./pages/AboutPage");
          return { Component: AboutPage };
        },
      },
      {
        path: "services",
        lazy: async () => {
          const { ServicesPage } = await import("./pages/ServicesPage");
          return { Component: ServicesPage };
        },
      },
      {
        path: "products",
        lazy: async () => {
          const { ProductsPage } = await import("./pages/ProductsPage");
          return { Component: ProductsPage };
        },
      },
      {
        path: "solutions",
        lazy: async () => {
          const { SolutionsPage } = await import("./pages/SolutionsPage");
          return { Component: SolutionsPage };
        },
      },
      {
        path: "industries",
        lazy: async () => {
          const { IndustriesPage } = await import("./pages/IndustriesPage");
          return { Component: IndustriesPage };
        },
      },
      {
        path: "portfolio",
        lazy: async () => {
          const { PortfolioPage } = await import("./pages/PortfolioPage");
          return { Component: PortfolioPage };
        },
      },
      {
        path: "blog",
        lazy: async () => {
          const { BlogPage } = await import("./pages/BlogPage");
          return { Component: BlogPage };
        },
      },
      {
        path: "contact",
        lazy: async () => {
          const { ContactPage } = await import("./pages/ContactPage");
          return { Component: ContactPage };
        },
      },
    ],
  },
]);
