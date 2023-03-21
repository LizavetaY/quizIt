import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ApplicationShell } from "@/components/ApplicationShell";
import { Home } from "@/pages/Home";
import { LoginPage } from "@/pages/LoginPage";
import { Quiz } from "@/pages/Quiz";
import { SettingsPage } from "@/pages/SettingsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApplicationShell />}>
          <Route index element={<Home />} />
          {/* Change to /:id at Quiz Route */}
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
