import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/Notfound";
import Navigation from "./components/Navigation";
import Leistungen from "./pages/Leistungen";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschtez from "./pages/Datenschutez";



const queryClient = new QueryClient();
const AppContent = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Navigation/>
      <Routes>
        <Route 
          path="/" 
          element={
            <Home/>
          } 
        />
     <Route path="/leistungen" element={<Leistungen />} />
       <Route path="/kontakt" element={<Kontakt />} />
  <Route path="/impressum" element={<Impressum />} />
  <Route path="/datenschutz" element={<Datenschtez />}></Route>
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