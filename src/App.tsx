import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import CursorFollower from "@/components/ui/CursorFollower";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle GitHub Pages routing
const GitHubPagesRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we're on GitHub Pages and have a query string route
    const queryParams = new URLSearchParams(location.search);
    const queryRoute = queryParams.get('/');
    
    if (queryRoute) {
      // Clean up the URL by removing the query parameter
      const path = '/' + queryRoute.replace(/~and~/g, '&');
      navigate(path, { replace: true });
    }
  }, [location.search, navigate]);

  return null;
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CursorFollower />
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/chandan-ai-spark">
          <GitHubPagesRedirect />
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
