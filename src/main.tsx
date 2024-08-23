import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BookProvider } from "./contexts/BookContext.tsx";

import App from "./App.tsx";

import "./sass/base/_global.scss";
import "./sass/base/_reset.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BookProvider>
      <App />
    </BookProvider>
  </StrictMode>
);
