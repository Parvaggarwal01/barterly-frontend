import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../services/authService';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = authService.getUser();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  // Placeholder data - will be replaced with API calls
  const stats = {
    mySkills: 12,
    activeBarters: 5,
    completedTrades: 28,
    avgRating: 4.8
  };

  const recentRequests = [
    {
      id: 1,
      fromSkill: 'Guitar Lessons',
      toSkill: 'Web Design',
      partner: 'Alice M.',
      status: 'pending',
      date: 'Oct 24, 2023',
      avatars: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCqsxdLY_kdEEhRmwvfDjK3XwwMGzbEZp5qyYigkm_2201Bg_o4e1dSbthv9mU1datvt2IxGHg9UpxfCC-xN8eS8ki_JtOANlc_bjwQUlnU1xxuUfh89fMeCfuMhbL2ETyVPorUw-FKXlKfGLv34ktu2-otuMBEIqEZtzgv9HN-n-k9Rq25pULyeJ28YQxv2-jbTx-HBgcYiXirNLyfRiPmoAwbQjXuuBLQ1idQQtn2RXfQ4Alzph1nfOqfVUKC4XsJV6uKp-r6EA',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAu9hhPWl5OnaLMcQWbM82IKGvvdBOuwJ0Z8BtZp3VGDWjrsAWyvyaCTOGeqMU7abPeMLDQnyyMDPqe8dnua-8nx7f0ecmbJPi4sfA7ht5f4FdgmRXXPfYNpVx5VYeLP64Lpl7-honYazpjmcUfr_HEkywBu29wthtk7K-S1vdMtomna2cDth76hdsIiq16gueAFCfvSemCF8XvwfveZLafbmtZjw2rXWSvP5UIPoBbABFiUarmj61P16wuc1GlvkkHwtmz7BJ1nQ'
      ]
    },
    {
      id: 2,
      fromSkill: 'Logo Design',
      toSkill: 'SEO Audit',
      partner: 'Marcus J.',
      status: 'accepted',
      date: 'Oct 22, 2023',
      avatars: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA0BJvZ6wB5KmI5nKRiiUzBX07T01qOdiFh3bXiuXyQ16O40PAyf2jRmS1olrY7ydiXmDwKLauR7KW5QliLJ02EfdjcfrRmppgsCHS_b81-bZ5D5KeG2TNIvpjDylVPi49gKV-yUfhxPj6dWy7fA3vYhHAZidYrwIK13zNpukZMau1a2JoMUWMI8cBwDHP5k3WmJuFYhwCdeh2pWclgWJNVvOutguYcUcnaq6kuhpHd1OFXx5QAxTxMkSXvGXRKhStI7f6xOZT3OA',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDEzJINHoh0em47Zbq6NEWbMDWyOr_0KaJfzzpGBp7e5gzQD8uKEYIyqV3fQosc1jMnFpDOpqU3_zRHOVqyeAoY41mn4a_H2gjKb9WxSmNtybdBqtKJ8p-Ea0a0Z4otYlxYik-CMZqveFWXMriYFHgqjHxdNyU8DUqzeMFwY_oyFgbXhLPj9SaAn0aDAhSqJUUucCThtOeiavbi2M-Q96nSrmgMz8Af29RHUDfNLzpdNIxJksmWRB8fsQJnGA_K3OliUKCXm4B_wA'
      ]
    },
    {
      id: 3,
      fromSkill: 'Photography',
      toSkill: 'Copywriting',
      partner: 'Sarah L.',
      status: 'rejected',
      date: 'Oct 20, 2023',
      avatars: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ2LyLi67XDjo2lFnXkxtT79sHbObhZWm5fV6hhWvQ_meL4JC2VpIOmVtR9t47lCIlxvT4mpZvSoNdAS_3FTCdb3HiJh-E71xcjqBAJ2SvMfaDNbQmCrJp3MS-PhfWrWHQeN_elRrKxp0u5E0w0FUl3FZMWPDMCCjVfyeijge4lnnzVchRMbsG60KS09n-2d17R5VcJk3feeSzKTdxgy7eBfy_yqMCtg7jtOM4lpgh_nUDjYkFJeX577tJEm-dshY3PX9oYU6_dQ',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC1NRRpAtK-V3e8lijltXbHavrnuRdg3ksv4IE8de7GJkPgQfFwm4MLvVtI4Rbzpej9OpRXnj46zY2LLDHP0KD1nfJq-sk9NLU8i3-plICTP-blB-J_PAm6jUKodAJh0jwAzVVVTNvMB0065D55eTQZaT99qJRLAxP4xJzNZu_1Xx0jPSuwVO--bYd5raCd11D7cN8xA77hjxTq2V-bVXMdrk3ILb9mgPnXCQDFfpcwjbuevz35Z9-CO1thppffJ3kQY2yfr20h7w'
      ]
    }
  ];

  const mySkills = [
    { id: 1, name: 'UI/UX Design', category: 'Creative', level: 'Expert', progress: 90 },
    { id: 2, name: 'Guitar Playing', category: 'Music', level: 'Intermediate', progress: 60 },
    { id: 3, name: 'Frontend Dev', category: 'Tech', level: 'Advanced', progress: 80 }
  ];

  const handleLogout = async () => {
    try {
      await authService.logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      // Still navigate to login even if API call fails
      navigate('/login');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-primary';
      case 'accepted':
        return 'bg-secondary';
      case 'rejected':
        return 'bg-tertiary text-white';
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <div className="font-display bg-neutral-surface min-h-screen flex flex-col overflow-hidden">
      {/* Top Navbar */}
      <header className="h-20 bg-white border-b-4 border-black flex items-center justify-between px-6 z-20 relative">
        <div className="flex items-center gap-3">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setShowMobileSidebar(!showMobileSidebar)}
            className="md:hidden w-10 h-10 border-2 border-black bg-white hover:bg-primary flex items-center justify-center shadow-hard-sm active:translate-x-0.5 active:translate-y-0.5 transition-all"
          >
            <span className="material-symbols-outlined">{showMobileSidebar ? 'close' : 'menu'}</span>
          </button>
          
          <div className="w-10 h-10 bg-primary border-2 border-black flex items-center justify-center shadow-hard-sm">
            <span className="material-symbols-outlined text-black text-2xl font-bold">swap_horiz</span>
          </div>
          <Link to="/" className="text-2xl font-bold tracking-tighter italic hover:text-primary transition-colors">
            BARTERLY
          </Link>
        </div>

        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="hidden md:flex relative group">
            <input
              className="bg-white border-2 border-black px-4 py-2 w-64 text-sm font-bold placeholder-gray-500 focus:outline-none focus:ring-0 shadow-hard-sm transition-all focus:shadow-hard placeholder:font-medium"
              placeholder="SEARCH SKILLS..."
              type="text"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-black">
              <span className="material-symbols-outlined text-xl">search</span>
            </button>
          </div>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative w-10 h-10 border-2 border-black bg-white hover:bg-neutral-100 flex items-center justify-center shadow-hard-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-hard-sm transition-all"
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-tertiary border-2 border-black rounded-full shadow-hard-sm"></span>
            </button>

            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="absolute top-12 right-0 w-80 bg-white border-2 border-black shadow-hard-lg z-50">
                <div className="border-b-2 border-black p-3 bg-neutral-100">
                  <h4 className="font-bold text-sm uppercase">Notifications</h4>
                </div>
                <div className="flex flex-col">
                  <div className="p-3 border-b-2 border-black hover:bg-primary/20 cursor-pointer flex gap-3 border-l-4 border-l-primary">
                    <span className="material-symbols-outlined text-sm pt-1">handshake</span>
                    <div>
                      <p className="text-xs font-bold">New Offer</p>
                      <p className="text-xs">Alice wants to trade Guitar for Coding.</p>
                    </div>
                  </div>
                  <div className="p-3 border-b-2 border-black hover:bg-secondary/20 cursor-pointer flex gap-3 border-l-4 border-l-secondary">
                    <span className="material-symbols-outlined text-sm pt-1">check_circle</span>
                    <div>
                      <p className="text-xs font-bold">Trade Accepted</p>
                      <p className="text-xs">Bob accepted your Web Design offer.</p>
                    </div>
                  </div>
                  <div className="p-3 hover:bg-tertiary/20 cursor-pointer flex gap-3 border-l-4 border-l-tertiary">
                    <span className="material-symbols-outlined text-sm pt-1">cancel</span>
                    <div>
                      <p className="text-xs font-bold">Trade Declined</p>
                      <p className="text-xs">Sarah declined your offer.</p>
                    </div>
                  </div>
                </div>
                <div className="p-2 bg-neutral-50 border-t-2 border-black text-center">
                  <button className="text-xs font-bold uppercase hover:text-primary-dark">
                    Mark all as read
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User Avatar */}
          <Link to="/profile" className="w-10 h-10 border-2 border-black overflow-hidden shadow-hard-sm hover:shadow-hard transition-all">
            <img
              alt="User Avatar"
              className="w-full h-full object-cover"
              src={user?.avatar || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user?.name || 'User')}
            />
          </Link>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Mobile Overlay */}
        {showMobileSidebar && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setShowMobileSidebar(false)}
          ></div>
        )}

        {/* Sidebar */}
        <aside className={`
          w-[240px] bg-white border-r-2 border-black flex flex-col shrink-0 overflow-y-auto z-40
          fixed md:static inset-y-0 left-0 top-20 md:top-0
          transform transition-transform duration-300 ease-in-out
          ${showMobileSidebar ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          {/* Mini Profile */}
          <div className="p-6 border-b-2 border-black flex flex-col items-center text-center bg-neutral-50">
            <div className="w-20 h-20 border-2 border-black mb-3 shadow-hard-sm overflow-hidden">
              <img
                alt="User Avatar Large"
                className="w-full h-full object-cover"
                src={user?.avatar || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user?.name || 'User') + '&size=128'}
              />
            </div>
            <h3 className="font-bold text-lg leading-tight uppercase">{user?.name || 'User'}</h3>
            <span className="text-xs font-bold bg-black text-white px-2 py-0.5 mt-1">PRO TRADER</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col flex-1 py-4">
            <Link
              to="/dashboard"
              onClick={() => setShowMobileSidebar(false)}
              className="flex items-center gap-3 px-6 py-4 bg-primary border-y-2 border-black font-bold text-sm tracking-wide hover:bg-primary-dark transition-colors"
            >
              <span className="material-symbols-outlined">dashboard</span>
              OVERVIEW
            </Link>
            <Link
              to="/my-skills"
              onClick={() => setShowMobileSidebar(false)}
              className="flex items-center gap-3 px-6 py-4 border-b-2 border-black font-bold text-sm tracking-wide hover:bg-neutral-100 transition-colors group"
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">lightbulb</span>
              MY SKILLS
            </Link>
            <Link
              to="/requests"
              onClick={() => setShowMobileSidebar(false)}
              className="flex items-center justify-between px-6 py-4 border-b-2 border-black font-bold text-sm tracking-wide hover:bg-neutral-100 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">swap_calls</span>
                REQUESTS
              </div>
              <span className="bg-tertiary text-black text-xs px-1.5 py-0.5 border border-black shadow-hard-sm">3</span>
            </Link>
            <Link
              to="/messages"
              onClick={() => setShowMobileSidebar(false)}
              className="flex items-center justify-between px-6 py-4 border-b-2 border-black font-bold text-sm tracking-wide hover:bg-neutral-100 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">chat</span>
                MESSAGES
              </div>
              <span className="bg-tertiary text-black text-xs px-1.5 py-0.5 border border-black shadow-hard-sm">5</span>
            </Link>
            <Link
              to="/bookmarks"
              onClick={() => setShowMobileSidebar(false)}
              className="flex items-center gap-3 px-6 py-4 border-b-2 border-black font-bold text-sm tracking-wide hover:bg-neutral-100 transition-colors group"
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">bookmark</span>
              BOOKMARKS
            </Link>
            <Link
              to="/profile"
              onClick={() => setShowMobileSidebar(false)}
              className="flex items-center gap-3 px-6 py-4 border-b-2 border-black font-bold text-sm tracking-wide hover:bg-neutral-100 transition-colors group"
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">person</span>
              PROFILE
            </Link>
            <Link
              to="/settings"
              onClick={() => setShowMobileSidebar(false)}
              className="flex items-center gap-3 px-6 py-4 border-b-2 border-black font-bold text-sm tracking-wide hover:bg-neutral-100 transition-colors group"
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">settings</span>
              SETTINGS
            </Link>
          </nav>

          <div className="p-6 mt-auto">
            <button
              onClick={() => {
                setShowMobileSidebar(false);
                handleLogout();
              }}
              className="w-full flex items-center justify-center gap-2 border-2 border-black py-2 bg-white hover:bg-tertiary hover:text-white transition-colors shadow-hard-sm font-bold text-sm active:translate-x-0.5 active:translate-y-0.5"
            >
              <span className="material-symbols-outlined text-lg">logout</span>
              LOGOUT
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10 relative">
          <div className="max-w-6xl mx-auto flex flex-col gap-10">
            {/* Stats Row */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 - My Skills */}
              <div className="bg-primary border-2 border-black p-5 shadow-hard flex flex-col justify-between h-36 relative group hover:-translate-y-1 transition-transform cursor-pointer">
                <div className="flex justify-between items-start">
                  <h3 className="font-extrabold text-2xl uppercase leading-none">My<br/>Skills</h3>
                  <span className="material-symbols-outlined text-4xl opacity-20 group-hover:opacity-100 transition-opacity">construction</span>
                </div>
                <p className="text-5xl font-bold tracking-tighter">{stats.mySkills}</p>
              </div>

              {/* Card 2 - Active Barters */}
              <div className="bg-white border-2 border-black p-5 shadow-hard flex flex-col justify-between h-36 relative group hover:-translate-y-1 transition-transform cursor-pointer">
                <div className="flex justify-between items-start">
                  <h3 className="font-extrabold text-2xl uppercase leading-none">Active<br/>Barters</h3>
                  <span className="material-symbols-outlined text-4xl opacity-20 group-hover:opacity-100 transition-opacity">handshake</span>
                </div>
                <p className="text-5xl font-bold tracking-tighter text-black">{stats.activeBarters}</p>
              </div>

              {/* Card 3 - Completed Trades */}
              <div className="bg-secondary border-2 border-black p-5 shadow-hard flex flex-col justify-between h-36 relative group hover:-translate-y-1 transition-transform cursor-pointer">
                <div className="flex justify-between items-start">
                  <h3 className="font-extrabold text-2xl uppercase leading-none">Completed<br/>Trades</h3>
                  <span className="material-symbols-outlined text-4xl opacity-20 group-hover:opacity-100 transition-opacity">verified</span>
                </div>
                <p className="text-5xl font-bold tracking-tighter">{stats.completedTrades}</p>
              </div>

              {/* Card 4 - Avg Rating */}
              <div className="bg-white border-2 border-black p-5 shadow-hard flex flex-col justify-between h-36 relative group hover:-translate-y-1 transition-transform cursor-pointer">
                <div className="flex justify-between items-start">
                  <h3 className="font-extrabold text-2xl uppercase leading-none">Avg<br/>Rating</h3>
                  <span className="material-symbols-outlined text-4xl opacity-20 group-hover:opacity-100 transition-opacity">star</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <p className="text-5xl font-bold tracking-tighter">{stats.avgRating}</p>
                  <span className="text-sm font-bold text-gray-500">/5.0</span>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Recent Barter Requests */}
              <section className="lg:col-span-2 flex flex-col gap-5">
                <div className="flex items-end justify-between border-b-4 border-black pb-2">
                  <h2 className="text-3xl font-extrabold uppercase tracking-tight">Recent Requests</h2>
                  <Link to="/requests" className="text-sm font-bold underline hover:bg-black hover:text-white px-1">
                    View All
                  </Link>
                </div>

                <div className="bg-white border-2 border-black shadow-hard flex flex-col">
                  {/* Header Row */}
                  <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 border-b-2 border-black bg-neutral-100 font-bold text-xs uppercase tracking-wide">
                    <div className="col-span-5">Trade Details</div>
                    <div className="col-span-3">Status</div>
                    <div className="col-span-2">Date</div>
                    <div className="col-span-2 text-right">Action</div>
                  </div>

                  {/* Rows */}
                  {recentRequests.map((request) => (
                    <div
                      key={request.id}
                      className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-4 border-b-2 border-black last:border-b-0 items-center hover:bg-neutral-50 transition-colors"
                    >
                      <div className="col-span-1 md:col-span-5 flex items-center gap-3">
                        <div className="flex -space-x-2 shrink-0">
                          {request.avatars.map((avatar, idx) => (
                            <div key={idx} className={`w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-gray-200 ${idx === 0 ? 'z-10' : 'z-0'}`}>
                              <img className="w-full h-full object-cover" src={avatar} alt={`Avatar ${idx + 1}`} />
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1 font-bold text-sm">
                            <span>{request.fromSkill}</span>
                            <span className="material-symbols-outlined text-base font-bold">sync_alt</span>
                            <span>{request.toSkill}</span>
                          </div>
                          <span className="text-xs text-gray-500 font-bold">with {request.partner}</span>
                        </div>
                      </div>
                      <div className="col-span-1 md:col-span-3 flex">
                        <span className={`${getStatusColor(request.status)} border border-black px-2 py-1 text-xs font-bold uppercase shadow-hard-sm`}>
                          {request.status}
                        </span>
                      </div>
                      <div className="col-span-1 md:col-span-2 text-sm font-bold">{request.date}</div>
                      <div className="col-span-1 md:col-span-2 flex justify-end">
                        <button className="bg-transparent hover:bg-neutral-100 text-black border-2 border-black px-3 py-1 text-xs font-bold uppercase transition-colors active:translate-x-0.5 active:translate-y-0.5">
                          Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* My Active Skills */}
              <section className="flex flex-col gap-5">
                <div className="flex items-end justify-between border-b-4 border-black pb-2">
                  <h2 className="text-3xl font-extrabold uppercase tracking-tight">My Skills</h2>
                  <button className="bg-primary hover:bg-primary-dark text-black border-2 border-black px-3 py-1 text-xs font-bold uppercase shadow-hard-sm active:translate-x-0.5 active:translate-y-0.5 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm font-bold">add</span>
                    Add New
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {mySkills.map((skill) => (
                    <div key={skill.id} className="bg-white border-2 border-black p-4 shadow-hard hover:shadow-hard-lg transition-shadow relative">
                      <div className="absolute top-0 right-0 p-2 flex gap-2">
                        <button className="w-8 h-8 flex items-center justify-center border-2 border-black bg-white hover:bg-neutral-100 active:translate-x-0.5 active:translate-y-0.5 shadow-hard-sm">
                          <span className="material-symbols-outlined text-sm">edit</span>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center border-2 border-black bg-white hover:bg-tertiary hover:text-white active:translate-x-0.5 active:translate-y-0.5 shadow-hard-sm">
                          <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                      </div>
                      <span className="inline-block bg-neutral-200 border border-black text-[10px] font-bold uppercase px-1 mb-2">
                        {skill.category}
                      </span>
                      <h3 className="text-xl font-bold leading-tight mb-1">{skill.name}</h3>
                      <p className="text-xs text-gray-500 font-bold mb-4">Level: {skill.level}</p>
                      <div className="w-full bg-gray-200 h-2 border border-black">
                        <div className="bg-black h-full" style={{ width: `${skill.progress}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
