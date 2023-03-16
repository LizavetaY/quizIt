import { ApplicationShell } from "./components/ApplicationShell";
import { ThemeProvider } from "./ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <ApplicationShell />
    </ThemeProvider>
  );
}
