import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/authService";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const user = authService.getUser();

  // Handle logout
  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  };

  // Placeholder data
  const stats = {
    totalUsers: 1247,
    totalSkills: 3856,
    activeRequests: 142,
    completedTrades: 2891,
  };

  const recentUsers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      date: "2024-02-25",
      status: "active",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=ffde5c&color=181710&bold=true",
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike.chen@email.com",
      date: "2024-02-24",
      status: "pending",
      avatar: "https://ui-avatars.com/api/?name=Mike+Chen&background=a3e635&color=181710&bold=true",
    },
    {
      id: 3,
      name: "Emma Davis",
      email: "emma.d@email.com",
      date: "2024-02-23",
      status: "active",
      avatar: "https://ui-avatars.com/api/?name=Emma+Davis&background=f472b6&color=181710&bold=true",
    },
  ];

  const pendingSkills = [
    {
      id: 1,
      name: "Adobe Photoshop Expert",
      category: "Design",
      user: "John Doe",
      status: "pending",
    },
    {
      id: 2,
      name: "React Native Development",
      category: "Technology",
      user: "Jane Smith",
      status: "pending",
    },
    {
      id: 3,
      name: "Spanish Tutoring",
      category: "Languages",
      user: "Carlos Rodriguez",
      status: "pending",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-secondary";
      case "pending":
        return "bg-primary";
      case "suspended":
        return "bg-tertiary";
      default:
        return "bg-neutral";
    }
  };

  return (
    <div className="min-h-screen bg-background-light" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
      {/* Header */}
      <header className="h-20 border-b-2 border-black bg-white flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setShowMobileSidebar(!showMobileSidebar)}
            className="md:hidden p-2 border-2 border-black bg-white hover:bg-primary transition-colors"
          >
            <span className="material-symbols-outlined">{showMobileSidebar ? 'close' : 'menu'}</span>
          </button>
          
          <div className="w-10 h-10 bg-primary border-2 border-black"></div>
          <h1 className="text-xl font-black uppercase">BARTERLY ADMIN</h1>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden md:flex items-center">
            <input
              type="text"
              placeholder="SEARCH USERS, SKILLS..."
              className="w-80 px-4 py-2 border-2 border-black font-bold uppercase text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 border-2 border-black bg-white hover:bg-primary transition-colors"
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-tertiary border-2 border-black rounded-full text-xs font-black flex items-center justify-center">
                3
              </span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white border-2 border-black shadow-hard">
                <div className="p-4 border-b-2 border-black">
                  <h3 className="font-black uppercase">NOTIFICATIONS</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  <div className="p-4 border-b border-neutral-border hover:bg-background-light">
                    <p className="font-bold text-sm">New user registration</p>
                    <p className="text-xs text-neutral mt-1">5 minutes ago</p>
                  </div>
                  <div className="p-4 border-b border-neutral-border hover:bg-background-light">
                    <p className="font-bold text-sm">Skill pending approval</p>
                    <p className="text-xs text-neutral mt-1">15 minutes ago</p>
                  </div>
                  <div className="p-4 hover:bg-background-light">
                    <p className="font-bold text-sm">Report submitted</p>
                    <p className="text-xs text-neutral mt-1">1 hour ago</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-2">
            <img
              src={user?.avatar?.url || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || "Admin")}&background=ffde5c&color=181710&bold=true`}
              alt={user?.name}
              className="w-10 h-10 border-2 border-black object-cover"
            />
            <span className="hidden md:block font-bold">{user?.name}</span>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Mobile Overlay */}
        {showMobileSidebar && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setShowMobileSidebar(false)}
          ></div>
        )}

        {/* Sidebar */}
        <aside className={`
          w-60 bg-white border-r-2 border-black flex flex-col min-h-screen z-40
          fixed md:sticky md:top-20 inset-y-0 left-0 top-20
          transform transition-transform duration-300 ease-in-out
          ${showMobileSidebar ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          {/* Mini Profile */}
          <div className="p-6 border-b-2 border-black">
            <div className="flex flex-col items-center">
              <img
                src={user?.avatar?.url || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || "Admin")}&background=f472b6&color=181710&bold=true`}
                alt={user?.name}
                className="w-20 h-20 border-2 border-black object-cover mb-3"
              />
              <h3 className="font-black text-lg uppercase text-center">{user?.name}</h3>
              <span className="px-3 py-1 bg-tertiary border-2 border-black text-xs font-black uppercase mt-2">
                ADMIN
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <Link
              to="/admin/dashboard"
              onClick={() => setShowMobileSidebar(false)}
              className="flex items-center gap-3 px-4 py-3 mb-2 border-2 border-black bg-primary font-black uppercase text-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-transform"
            >
              <span className="material-symbols-outlined text-xl">dashboard</span>
              Overview
            </Link>

            <Link
              to="/admin/users"
              onClick={() => setShowMobileSidebar(false)}
              className="flex items-center gap-3 px-4 py-3 mb-2 border-2 border-black bg-white font-bold uppercase text-sm hover:bg-neutral-surface hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <span className="material-symbols-outlined text-xl">group</span>
              Users
              <span className="ml-auto px-2 py-0.5 bg-primary border border-black text-xs font-black">
                12
              </span>
            </Link>

            <Link
              to="/admin/skills"
              onClick={() => setShowMobileSidebar(false)}
              className="flex items-center gap-3 px-4 py-3 mb-2 border-2 border-black bg-white font-bold uppercase text-sm hover:bg-neutral-surface hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <span className="material-symbols-outlined text-xl">verified</span>
              Skills
              <span className="ml-auto px-2 py-0.5 bg-tertiary border border-black text-xs font-black">
                5
              </span>
            </Link>

            <Link
              to="/admin/categories"
              onClick={() => setShowMobileSidebar(false)}
              className="flex items-center gap-3 px-4 py-3 mb-2 border-2 border-black bg-white font-bold uppercase text-sm hover:bg-neutral-surface hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <span className="material-symbols-outlined text-xl">category</span>
              Categories
            </Link>

            <Link
              to="/admin/barters"
              onClick={() => setShowMobileSidebar(false)}
              className="flex items-center gap-3 px-4 py-3 mb-2 border-2 border-black bg-white font-bold uppercase text-sm hover:bg-neutral-surface hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <span className="material-symbols-outlined text-xl">swap_horiz</span>
              Barters
            </Link>

            <Link
              to="/admin/reports"
              onClick={() => setShowMobileSidebar(false)}
              className="flex items-center gap-3 px-4 py-3 mb-2 border-2 border-black bg-white font-bold uppercase text-sm hover:bg-neutral-surface hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <span className="material-symbols-outlined text-xl">flag</span>
              Reports
              <span className="ml-auto px-2 py-0.5 bg-tertiary border border-black text-xs font-black">
                3
              </span>
            </Link>

            <Link
              to="/admin/settings"
              onClick={() => setShowMobileSidebar(false)}
              className="flex items-center gap-3 px-4 py-3 mb-2 border-2 border-black bg-white font-bold uppercase text-sm hover:bg-neutral-surface hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <span className="material-symbols-outlined text-xl">settings</span>
              Settings
            </Link>
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t-2 border-black">
            <button
              onClick={() => {
                setShowMobileSidebar(false);
                handleLogout();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-black bg-white font-black uppercase text-sm hover:bg-tertiary hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <span className="material-symbols-outlined text-xl">logout</span>
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white border-2 border-black p-6 shadow-hard hover:shadow-hard-lg hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="material-symbols-outlined text-3xl">group</span>
                <span className="px-2 py-1 bg-secondary border border-black text-xs font-black uppercase">
                  Total
                </span>
              </div>
              <h3 className="text-3xl font-black mb-1">{stats.totalUsers}</h3>
              <p className="text-sm font-bold uppercase text-neutral">Total Users</p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-hard hover:shadow-hard-lg hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="material-symbols-outlined text-3xl">verified</span>
                <span className="px-2 py-1 bg-primary border border-black text-xs font-black uppercase">
                  Total
                </span>
              </div>
              <h3 className="text-3xl font-black mb-1">{stats.totalSkills}</h3>
              <p className="text-sm font-bold uppercase text-neutral">Total Skills</p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-hard hover:shadow-hard-lg hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="material-symbols-outlined text-3xl">pending_actions</span>
                <span className="px-2 py-1 bg-tertiary border border-black text-xs font-black uppercase">
                  Active
                </span>
              </div>
              <h3 className="text-3xl font-black mb-1">{stats.activeRequests}</h3>
              <p className="text-sm font-bold uppercase text-neutral">Active Requests</p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-hard hover:shadow-hard-lg hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="material-symbols-outlined text-3xl">check_circle</span>
                <span className="px-2 py-1 bg-secondary border border-black text-xs font-black uppercase">
                  Total
                </span>
              </div>
              <h3 className="text-3xl font-black mb-1">{stats.completedTrades}</h3>
              <p className="text-sm font-bold uppercase text-neutral">Completed Trades</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Users */}
            <div className="bg-white border-2 border-black shadow-hard">
              <div className="p-6 border-b-2 border-black flex justify-between items-center">
                <h2 className="text-xl font-black uppercase">Recent Users</h2>
                <Link
                  to="/admin/users"
                  className="text-sm font-bold uppercase hover:underline"
                >
                  View All →
                </Link>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-4 border-2 border-black bg-neutral-surface"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-12 h-12 border-2 border-black object-cover"
                        />
                        <div>
                          <h3 className="font-black text-sm">{user.name}</h3>
                          <p className="text-xs text-neutral">{user.email}</p>
                          <p className="text-xs text-neutral mt-1">
                            Joined: {new Date(user.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 ${getStatusColor(
                          user.status
                        )} border-2 border-black text-xs font-black uppercase`}
                      >
                        {user.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pending Skills */}
            <div className="bg-white border-2 border-black shadow-hard">
              <div className="p-6 border-b-2 border-black flex justify-between items-center">
                <h2 className="text-xl font-black uppercase">Pending Skills</h2>
                <Link
                  to="/admin/skills"
                  className="text-sm font-bold uppercase hover:underline"
                >
                  View All →
                </Link>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {pendingSkills.map((skill) => (
                    <div
                      key={skill.id}
                      className="p-4 border-2 border-black bg-neutral-surface"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-black text-sm">{skill.name}</h3>
                          <p className="text-xs text-neutral mt-1">
                            Category: {skill.category}
                          </p>
                          <p className="text-xs text-neutral">By: {skill.user}</p>
                        </div>
                        <span className="px-3 py-1 bg-primary border-2 border-black text-xs font-black uppercase">
                          {skill.status}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 px-4 py-2 bg-secondary border-2 border-black font-bold uppercase text-xs hover:translate-x-[2px] hover:translate-y-[2px] transition-transform">
                          Approve
                        </button>
                        <button className="flex-1 px-4 py-2 bg-tertiary border-2 border-black font-bold uppercase text-xs hover:translate-x-[2px] hover:translate-y-[2px] transition-transform">
                          Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-white border-2 border-black shadow-hard p-6">
            <h2 className="text-xl font-black uppercase mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="p-4 border-2 border-black bg-primary font-bold uppercase text-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard transition-all">
                <span className="material-symbols-outlined text-2xl mb-2">add</span>
                <br />
                New User
              </button>
              <button className="p-4 border-2 border-black bg-secondary font-bold uppercase text-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard transition-all">
                <span className="material-symbols-outlined text-2xl mb-2">category</span>
                <br />
                Add Category
              </button>
              <button className="p-4 border-2 border-black bg-tertiary font-bold uppercase text-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard transition-all">
                <span className="material-symbols-outlined text-2xl mb-2">flag</span>
                <br />
                View Reports
              </button>
              <button className="p-4 border-2 border-black bg-background-light font-bold uppercase text-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard transition-all">
                <span className="material-symbols-outlined text-2xl mb-2">analytics</span>
                <br />
                Analytics
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
