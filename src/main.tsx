import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BookProvider } from "./contexts/BookContext.tsx";

import App from "./App.tsx";

import "./sass/main.scss";
import { AuthorProvider } from "./contexts/AuthorContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthorProvider>
      <BookProvider>
        <App />
      </BookProvider>
    </AuthorProvider>
  </StrictMode>
);
