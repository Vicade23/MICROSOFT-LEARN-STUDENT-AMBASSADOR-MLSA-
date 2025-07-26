import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Events from "./pages/Events";
import StudentHub from "./pages/StudentHub";
import Team from "./pages/Team";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./hooks/useAuth";

const queryClient = new QueryClient();

const App = () => {
  const { user } = useAuth();

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={
              // <Events />
                <ProtectedRoute isAuthenticated={!!user}>
                  <Events />
                </ProtectedRoute>
              } />
            <Route path="/student-hub" element={
              // <StudentHub />
                <ProtectedRoute isAuthenticated={!!user}>
                  <StudentHub />
                </ProtectedRoute>
              } />
            <Route path="/team" element={
              // <Team />
                <ProtectedRoute isAuthenticated={!!user}>
                  <Team />
                </ProtectedRoute>
              } />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={
              // <Profile />
                <ProtectedRoute isAuthenticated={!!user}>
                  <Profile />
                </ProtectedRoute>
              } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>)
};

export default App;
