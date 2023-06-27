import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./routes/Contact.tsx";
import Favorites from "./routes/Favorites.tsx";
import Dentists from "./routes/Dentists.tsx";
import Dentist from "./routes/Dentist.tsx";

import { ThemeProvider } from "./context/theme.tsx";
import { FavoriteProvider } from "./context/favorites.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider>
    <FavoriteProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="dentists" element={<Dentists />} />
            <Route path="dentists/:id" element={<Dentist />} />
            <Route path="contact" element={<Contact />} />
            <Route path="favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FavoriteProvider>
  </ThemeProvider>
);
