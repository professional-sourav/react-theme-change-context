import { AppContext } from "./appContext";
import Theme from "./components/Theme";
import ThemeArea from "./components/ThemeArea";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <AppContext>
        <Theme />
        <ThemeArea />
      </AppContext>
    </div>
  );
}
