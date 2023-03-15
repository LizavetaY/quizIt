import { DemoComponent } from "./DemoComponent/DemoComponent";
import { ThemeProvider } from "./ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <DemoComponent />
    </ThemeProvider>
  );
}
