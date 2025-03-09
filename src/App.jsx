import "./App.css";
import Rotas from "./routes";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <main>
        <h1></h1>
        <Rotas />
      </main>
      <footer>
        <p>© 2025 Victor Hugo Costa. Created in RPV.</p>
      </footer>
    </ThemeProvider>
  );
}