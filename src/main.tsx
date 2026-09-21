import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@mantine/core/styles.css";
import "@/index.css";
import Home from "@/routes/home";
import AuthLayout from "@/layouts/auth-layout";
import Login from "@/routes/login";
import Register from "@/routes/register";
import AppLayout from "@/layouts/app-layout";
import DashboardLayout from "@/layouts/dashboard";
import IncomeIndex from "./routes/incomes";

const queryClient = new QueryClient();

declare global {
  interface Window {
    __TANSTACK_QUERY_CLIENT__: import("@tanstack/query-core").QueryClient;
  }
}

window.__TANSTACK_QUERY_CLIENT__ = queryClient;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route element={<DashboardLayout />}>
                <Route index element={<Home />} />
                <Route path="incomes">
                  <Route index element={<IncomeIndex />} />
                </Route>
              </Route>
              <Route element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </QueryClientProvider>
  </StrictMode>,
);
