import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import VerifyEmail from "./pages/auth/VerifyEmail";
import UserDashboard from "./pages/user/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import authService from "./services/authService";

function App() {
  const location = useLocation();

  // Routes that don't need header/footer
  const authRoutes = ["/register", "/login", "/verify-email", "/dashboard", "/admin"];
  const isAuthRoute = authRoutes.some(route => location.pathname.startsWith(route));

  // Component to redirect authenticated users from landing page to appropriate dashboard
  const LandingPageWrapper = () => {
    const isAuthenticated = authService.isAuthenticated();
    if (!isAuthenticated) return <LandingPage />;
    
    const user = authService.getUser();
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" replace />;
    }
    return <Navigate to="/dashboard" replace />;
  };

  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthRoute && <Header />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPageWrapper />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          
          {/* User Dashboard Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          
          {/* Admin Dashboard Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <AdminProtectedRoute>
                <AdminDashboard />
              </AdminProtectedRoute>
            }
          />
          
          {/* Placeholder routes for future pages */}
          {/* User routes will be added here: /my-skills, /requests, /messages, etc. */}
          {/* Admin routes will be added here: /admin/users, /admin/skills, etc. */}
        </Routes>
      </main>
      {!isAuthRoute && <Footer />}
    </div>
  );
}

export default App;
