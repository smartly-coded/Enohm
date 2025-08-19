import { useState } from "react";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";


import Home from "./pages/Home";

import NotFound from "./pages/Notfound";
import Navigation from "./components/Navigation";



const queryClient = new QueryClient();

// مكون منفصل للتعامل مع التنقل داخل Router context
const AppContent = () => {
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation/>
      <Routes>
        <Route 
          path="/" 
          element={
            <Home/>
          } 
        />
    

        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
     
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
   
    </QueryClientProvider>
  );
};

export default App;