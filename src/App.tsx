import { BrowserRouter, Routes, Route } from "react-router-dom";

import Books from "./pages/books";
import Authors from "./pages/authors";
import Appbar from "./components/appbar";

function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/autores" element={<Authors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
