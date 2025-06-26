import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import CategoryBlogs from "./Pages/CategoryBlogs";

// Components
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/category/:categoryName"
          element={
            <ProtectedRoute>
              <CategoryBlogs />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
