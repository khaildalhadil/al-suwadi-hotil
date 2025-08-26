import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from 'react-toastify';
import UpdateSettingForm from "./features/settings/UpdateSettingForm";

const queryClinet = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    }
  }
});

export default function App() {
  return (

    <QueryClientProvider client={queryClinet}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer />
      <BrowserRouter>
        <Routes>

          <Route element={<AppLayout />} >
            <Route index  element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard"  element={<Dashboard />} />
            <Route path="account" element={<Account />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />

          </Route>
 
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>

    </QueryClientProvider>
  )
}
