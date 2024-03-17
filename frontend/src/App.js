import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Budget from "./pages/Budget";
import Education from "./pages/Education";
import Expenses from "./pages/Expenses";
import Loading from "./pages/Loading";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Settings from "./pages/Settings";
import Register from "./pages/Register";
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/education" element={<Education />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;