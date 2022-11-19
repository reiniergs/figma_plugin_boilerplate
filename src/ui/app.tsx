import React from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { QueryClientProvider } from "react-query";
import queryClient from "./queryClient";
import Splash from "pages/Splash";
import AnotherPage from "pages/AnotherPage";

import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/another" element={<AnotherPage />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
