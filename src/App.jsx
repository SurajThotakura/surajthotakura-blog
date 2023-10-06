import HomePage from "./pages/home";
import InProgress from "./pages/inProgress";
import PondPage from "./pages/pondPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pond" element={<PondPage />} />
        <Route path="/inProgress" element={<InProgress />}/>
      </Routes>
    </div>
  );
}

export default App;
