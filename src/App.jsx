import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  MemoryRouter,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const APP = () => {
  useEffect(() => {
    if (window.Cypress) {
      window.store = this;
    }
  }, []);
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Header />
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Details />} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );
};

export default APP;
