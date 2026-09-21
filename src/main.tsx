import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Notifications } from "@mantine/notifications";

import Home from "@/routes/home";
import AuthLayout from "@/layouts/auth-layout";
import Login from "@/routes/login";
import Register from "@/routes/register";
import AppLayout from "@/layouts/app-layout";
import DashboardLayout from "@/layouts/dashboard";
import IncomeIndex from "./routes/incomes";
import CreateIncome from "./routes/incomes/create";
import ShowIncome from "./routes/incomes/show";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "@/index.css";

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
        <Notifications />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route element={<DashboardLayout />}>
                <Route index element={<Home />} />
                <Route path="incomes">
                  <Route index element={<IncomeIndex />} />
                  <Route path="create" element={<CreateIncome />} />
                  <Route path=":incomeId" element={<ShowIncome />} />
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
