import { Link, useLocation, useNavigate } from "react-router-dom";
import authService from "../../services/authService";

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = authService.getCurrentUser();

  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: "/", icon: "home", label: "HOME" },
    { path: "/dashboard", icon: "dashboard", label: "OVERVIEW" },
    { path: "/my-skills", icon: "lightbulb", label: "MY SKILLS" },
    { path: "/requests", icon: "swap_calls", label: "REQUESTS", badge: 3 },
    { path: "/messages", icon: "chat", label: "MESSAGES", badge: 5 },
    { path: "/bookmarks", icon: "bookmark", label: "BOOKMARKS" },
    { path: "/profile", icon: "person", label: "PROFILE" },
    { path: "/settings", icon: "settings", label: "SETTINGS" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static left-0 top-0 h-[92vh] w-[240px] bg-white border-r-2 border-black flex flex-col shrink-0 overflow-y-auto z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* User Profile Section */}
        <div className="p-6 border-b-2 border-black flex flex-col items-center text-center bg-neutral-50">
          <div className="w-20 h-20 border-2 border-black mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-gray-400">
                  person
                </span>
              </div>
            )}
          </div>
          <h3 className="font-bold text-lg leading-tight uppercase">
            {user?.name || "USER"}
          </h3>
          <span className="text-xs font-bold bg-black text-white px-2 py-0.5 mt-1">
            PRO TRADER
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col flex-1 py-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={`flex items-center ${
                item.badge ? "justify-between" : "gap-3"
              } px-6 py-4 border-b-2 border-black font-bold text-sm tracking-wide transition-colors group ${
                isActive(item.path)
                  ? "bg-primary border-y-2"
                  : "hover:bg-neutral-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                {item.label}
              </div>
              {item.badge && (
                <span className="bg-[#FF8B94] text-black text-xs px-1.5 py-0.5 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-6 mt-auto">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 border-2 border-black py-2 bg-white hover:bg-[#FF6B6B] hover:text-white transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold text-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <span className="material-symbols-outlined text-lg">logout</span>
            LOGOUT
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
