import NavBar from "./components/NavBar";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container mx-auto px-4">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
