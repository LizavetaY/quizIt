import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ApplicationShell } from "@/components/ApplicationShell";
import { Home, Quiz } from "@/pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApplicationShell />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
