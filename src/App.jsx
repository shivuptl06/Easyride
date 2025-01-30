import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SignUp from "./pages/Register";
import SignIn from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/signin" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
