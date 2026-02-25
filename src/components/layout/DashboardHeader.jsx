import { useState } from "react";
import authService from "../../services/authService";

const DashboardHeader = ({ onMenuClick }) => {
  const [notifications] = useState([
    {
      id: 1,
      type: "offer",
      title: "New Offer",
      message: "Alice wants to trade Guitar for Coding.",
      color: "primary",
    },
    {
      id: 2,
      type: "accepted",
      title: "Trade Accepted",
      message: "Bob accepted your Web Design offer.",
      color: "accent-teal",
    },
  ]);

  const user = authService.getCurrentUser();

  return (
    <header className="h-20 bg-white border-b-4 border-black flex items-center justify-between px-6 z-20 relative shrink-0">
      {/* Left: Logo and Menu */}
      <div className="flex items-center gap-3">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="md:hidden w-10 h-10 border-2 border-black bg-primary hover:bg-[#e6c300] flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>

        {/* Logo */}
        <div className="w-10 h-10 bg-primary border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <span className="material-symbols-outlined text-black text-2xl font-bold">
            swap_horiz
          </span>
        </div>
        <h1 className="text-2xl font-bold tracking-tighter italic">BARTERLY</h1>
      </div>

      {/* Right: Search, Notifications, Avatar */}
      <div className="flex items-center gap-6">
        {/* Search Bar (Hidden on mobile) */}
        <div className="hidden md:flex relative group">
          <input
            className="bg-white border-2 border-black px-4 py-2 w-64 text-sm font-bold placeholder-gray-500 focus:outline-none focus:ring-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] placeholder:font-medium"
            placeholder="SEARCH SKILLS..."
            type="text"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-black">
            <span className="material-symbols-outlined text-xl">search</span>
          </button>
        </div>

        {/* Notifications */}
        <div className="relative group">
          <button className="relative w-10 h-10 border-2 border-black bg-white hover:bg-neutral-100 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
            <span className="material-symbols-outlined">notifications</span>
            {notifications.length > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#FF8B94] border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></span>
            )}
          </button>

          {/* Notifications Dropdown */}
          <div className="absolute top-12 right-0 w-80 bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-50 hidden group-hover:block hover:block">
            <div className="border-b-2 border-black p-3 bg-neutral-100">
              <h4 className="font-bold text-sm uppercase">Notifications</h4>
            </div>
            <div className="flex flex-col">
              {notifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`p-3 border-b-2 border-black hover:bg-${notif.color}/20 cursor-pointer flex gap-3 border-l-4 ${
                    notif.color === "primary"
                      ? "border-l-primary"
                      : "border-l-[#4ECDC4]"
                  }`}
                >
                  <span className="material-symbols-outlined text-sm pt-1">
                    {notif.type === "offer" ? "handshake" : "check_circle"}
                  </span>
                  <div>
                    <p className="text-xs font-bold">{notif.title}</p>
                    <p className="text-xs">{notif.message}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-2 border-t-2 border-black">
              <button className="w-full text-xs font-bold uppercase underline hover:text-[#e6c300] py-2">
                Mark all as read
              </button>
            </div>
          </div>
        </div>

        {/* User Avatar */}
        <div className="w-10 h-10 border-2 border-black rounded-none overflow-hidden shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl text-gray-400">
                person
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
