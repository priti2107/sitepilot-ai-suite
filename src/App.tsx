import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Websites from "./pages/dashboard/Websites";
import AIBuilder from "./pages/dashboard/AIBuilder";
import Analytics from "./pages/dashboard/Analytics";
import Branding from "./pages/dashboard/Branding";
import Domains from "./pages/dashboard/Domains";
import Billing from "./pages/dashboard/Billing";
import Team from "./pages/dashboard/Team";
import SettingsPage from "./pages/dashboard/Settings";
import Editor from "./pages/Editor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="websites" element={<Websites />} />
            <Route path="ai-builder" element={<AIBuilder />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="branding" element={<Branding />} />
            <Route path="domains" element={<Domains />} />
            <Route path="billing" element={<Billing />} />
            <Route path="team" element={<Team />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          <Route path="/editor/:websiteId" element={<Editor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
