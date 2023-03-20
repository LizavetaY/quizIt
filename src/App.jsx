import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ApplicationShell } from "@/components/ApplicationShell";
import { Home } from "@/pages/Home";
import { LoginPage } from "@/pages/LoginPage";
import { SettingsPage } from "@/pages/SettingsPage";

export default function App() {
  return (
    <BrowserRouter>
      <ApplicationShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </ApplicationShell>
    </BrowserRouter>
  );
}
