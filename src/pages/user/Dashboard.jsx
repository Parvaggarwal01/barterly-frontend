import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar";
import DashboardHeader from "../../components/layout/DashboardHeader";
import skillService from "../../services/skillService";

const Dashboard = () => {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [mySkills, setMySkills] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user's skills from backend
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const response = await skillService.getMySkills();
        setMySkills(response.data || []);
      } catch (error) {
        console.error("Error fetching skills:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  // Calculate stats from fetched data
  const stats = {
    mySkills: mySkills.length,
    activeBarters: 5, // TODO: Fetch from barter service when available
    completedTrades: 28, // TODO: Fetch from barter service when available
    avgRating: 4.8, // TODO: Fetch from user rating service when available
  };

  // TODO: Replace with actual API call when barter service is ready
  const recentRequests = [
    {
      id: 1,
      fromSkill: "Guitar Lessons",
      toSkill: "Web Design",
      partner: "Alice M.",
      status: "pending",
      date: "Oct 24, 2023",
      avatars: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCqsxdLY_kdEEhRmwvfDjK3XwwMGzbEZp5qyYigkm_2201Bg_o4e1dSbthv9mU1datvt2IxGHg9UpxfCC-xN8eS8ki_JtOANlc_bjwQUlnU1xxuUfh89fMeCfuMhbL2ETyVPorUw-FKXlKfGLv34ktu2-otuMBEIqEZtzgv9HN-n-k9Rq25pULyeJ28YQxv2-jbTx-HBgcYiXirNLyfRiPmoAwbQjXuuBLQ1idQQtn2RXfQ4Alzph1nfOqfVUKC4XsJV6uKp-r6EA",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAu9hhPWl5OnaLMcQWbM82IKGvvdBOuwJ0Z8BtZp3VGDWjrsAWyvyaCTOGeqMU7abPeMLDQnyyMDPqe8dnua-8nx7f0ecmbJPi4sfA7ht5f4FdgmRXXPfYNpVx5VYeLP64Lpl7-honYazpjmcUfr_HEkywBu29wthtk7K-S1vdMtomna2cDth76hdsIiq16gueAFCfvSemCF8XvwfveZLafbmtZjw2rXWSvP5UIPoBbABFiUarmj61P16wuc1GlvkkHwtmz7BJ1nQ",
      ],
    },
    {
      id: 2,
      fromSkill: "Logo Design",
      toSkill: "SEO Audit",
      partner: "Marcus J.",
      status: "accepted",
      date: "Oct 22, 2023",
      avatars: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA0BJvZ6wB5KmI5nKRiiUzBX07T01qOdiFh3bXiuXyQ16O40PAyf2jRmS1olrY7ydiXmDwKLauR7KW5QliLJ02EfdjcfrRmppgsCHS_b81-bZ5D5KeG2TNIvpjDylVPi49gKV-yUfhxPj6dWy7fA3vYhHAZidYrwIK13zNpukZMau1a2JoMUWMI8cBwDHP5k3WmJuFYhwCdeh2pWclgWJNVvOutguYcUcnaq6kuhpHd1OFXx5QAxTxMkSXvGXRKhStI7f6xOZT3OA",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDEzJINHoh0em47Zbq6NEWbMDWyOr_0KaJfzzpGBp7e5gzQD8uKEYIyqV3fQosc1jMnFpDOpqU3_zRHOVqyeAoY41mn4a_H2gjKb9WxSmNtybdBqtKJ8p-Ea0a0Z4otYlxYik-CMZqveFWXMriYFHgqjHxdNyU8DUqzeMFwY_oyFgbXhLPj9SaAn0aDAhSqJUUucCThtOeiavbi2M-Q96nSrmgMz8Af29RHUDfNLzpdNIxJksmWRB8fsQJnGA_K3OliUKCXm4B_wA",
      ],
    },
    {
      id: 3,
      fromSkill: "Photography",
      toSkill: "Copywriting",
      partner: "Sarah L.",
      status: "rejected",
      date: "Oct 20, 2023",
      avatars: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ2LyLi67XDjo2lFnXkxtT79sHbObhZWm5fV6hhWvQ_meL4JC2VpIOmVtR9t47lCIlxvT4mpZvSoNdAS_3FTCdb3HiJh-E71xcjqBAJ2SvMfaDNbQmCrJp3MS-PhfWrWHQeN_elRrKxp0u5E0w0FUl3FZMWPDMCCjVfyeijge4lnnzVchRMbsG60KS09n-2d17R5VcJk3feeSzKTdxgy7eBfy_yqMCtg7jtOM4lpgh_nUDjYkFJeX577tJEm-dshY3PX9oYU6_dQ",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC1NRRpAtK-V3e8lijltXbHavrnuRdg3ksv4IE8de7GJkPgQfFwm4MLvVtI4Rbzpej9OpRXnj46zY2LLDHP0KD1nfJq-sk9NLU8i3-plICTP-blB-J_PAm6jUKodAJh0jwAzVVVTNvMB0065D55eTQZaT99qJRLAxP4xJzNZu_1Xx0jPSuwVO--bYd5raCd11D7cN8xA77hjxTq2V-bVXMdrk3ILb9mgPnXCQDFfpcwjbuevz35Z9-CO1thppffJ3kQY2yfr20h7w",
      ],
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-primary";
      case "accepted":
        return "bg-accent-teal";
      case "rejected":
        return "bg-accent-red text-white";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div className="font-display bg-[#FFFBF0] min-h-screen flex flex-col">
      {/* Dashboard Header */}
      <DashboardHeader
        onMenuClick={() => setShowMobileSidebar(!showMobileSidebar)}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          isOpen={showMobileSidebar}
          onClose={() => setShowMobileSidebar(false)}
        />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-6xl mx-auto flex flex-col gap-10">
            {/* Stats Row */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 - My Skills */}
              <div className="bg-primary border-2 border-black p-5 shadow-hard flex flex-col justify-between h-36 relative group hover:-translate-y-1 transition-transform cursor-pointer">
                <div className="flex justify-between items-start">
                  <h3 className="font-extrabold text-2xl uppercase leading-none">
                    My
                    <br />
                    Skills
                  </h3>
                  <span className="material-symbols-outlined text-4xl opacity-20 group-hover:opacity-100 transition-opacity">
                    construction
                  </span>
                </div>
                <p className="text-5xl font-bold tracking-tighter">
                  {stats.mySkills}
                </p>
              </div>

              {/* Card 2 - Active Barters */}
              <div className="bg-white border-2 border-black p-5 shadow-hard flex flex-col justify-between h-36 relative group hover:-translate-y-1 transition-transform cursor-pointer">
                <div className="flex justify-between items-start">
                  <h3 className="font-extrabold text-2xl uppercase leading-none">
                    Active
                    <br />
                    Barters
                  </h3>
                  <span className="material-symbols-outlined text-4xl opacity-20 group-hover:opacity-100 transition-opacity">
                    handshake
                  </span>
                </div>
                <p className="text-5xl font-bold tracking-tighter text-black">
                  {stats.activeBarters}
                </p>
              </div>

              {/* Card 3 - Completed Trades */}
              <div className="bg-secondary border-2 border-black p-5 shadow-hard flex flex-col justify-between h-36 relative group hover:-translate-y-1 transition-transform cursor-pointer">
                <div className="flex justify-between items-start">
                  <h3 className="font-extrabold text-2xl uppercase leading-none">
                    Completed
                    <br />
                    Trades
                  </h3>
                  <span className="material-symbols-outlined text-4xl opacity-20 group-hover:opacity-100 transition-opacity">
                    verified
                  </span>
                </div>
                <p className="text-5xl font-bold tracking-tighter">
                  {stats.completedTrades}
                </p>
              </div>

              {/* Card 4 - Avg Rating */}
              <div className="bg-white border-2 border-black p-5 shadow-hard flex flex-col justify-between h-36 relative group hover:-translate-y-1 transition-transform cursor-pointer">
                <div className="flex justify-between items-start">
                  <h3 className="font-extrabold text-2xl uppercase leading-none">
                    Avg
                    <br />
                    Rating
                  </h3>
                  <span className="material-symbols-outlined text-4xl opacity-20 group-hover:opacity-100 transition-opacity">
                    star
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <p className="text-5xl font-bold tracking-tighter">
                    {stats.avgRating}
                  </p>
                  <span className="text-sm font-bold text-gray-500">/5.0</span>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Recent Barter Requests */}
              <section className="lg:col-span-2 flex flex-col gap-5">
                <div className="flex items-end justify-between border-b-4 border-black pb-2">
                  <h2 className="text-3xl font-extrabold uppercase tracking-tight">
                    Recent Requests
                  </h2>
                  <Link
                    to="/requests"
                    className="text-sm font-bold underline hover:bg-black hover:text-white px-1"
                  >
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
                            <div
                              key={idx}
                              className={`w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-gray-200 ${idx === 0 ? "z-10" : "z-0"}`}
                            >
                              <img
                                className="w-full h-full object-cover"
                                src={avatar}
                                alt={`Avatar ${idx + 1}`}
                              />
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1 font-bold text-sm">
                            <span>{request.fromSkill}</span>
                            <span className="material-symbols-outlined text-base font-bold">
                              sync_alt
                            </span>
                            <span>{request.toSkill}</span>
                          </div>
                          <span className="text-xs text-gray-500 font-bold">
                            with {request.partner}
                          </span>
                        </div>
                      </div>
                      <div className="col-span-1 md:col-span-3 flex">
                        <span
                          className={`${getStatusColor(request.status)} border border-black px-2 py-1 text-xs font-bold uppercase shadow-hard-sm`}
                        >
                          {request.status}
                        </span>
                      </div>
                      <div className="col-span-1 md:col-span-2 text-sm font-bold">
                        {request.date}
                      </div>
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
                  <h2 className="text-3xl font-extrabold uppercase tracking-tight">
                    My Skills
                  </h2>
                  <Link
                    to="/post-skill"
                    className="bg-primary hover:bg-primary-dark text-black border-2 border-black px-3 py-1 text-xs font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm font-bold">
                      add
                    </span>
                    Add New
                  </Link>
                </div>

                {loading ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="text-center">
                      <span className="material-symbols-outlined text-4xl animate-spin">
                        refresh
                      </span>
                      <p className="font-bold uppercase text-sm mt-2">
                        Loading skills...
                      </p>
                    </div>
                  </div>
                ) : mySkills.length === 0 ? (
                  <div className="bg-white border-2 border-black p-8 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="material-symbols-outlined text-6xl opacity-20 mb-4">
                      lightbulb
                    </span>
                    <p className="font-bold uppercase mb-2">No skills yet</p>
                    <p className="text-sm text-gray-600 mb-4">
                      Start by adding your first skill
                    </p>
                    <Link
                      to="/post-skill"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-black border-2 border-black px-4 py-2 font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      <span className="material-symbols-outlined">add</span>
                      Post Your First Skill
                    </Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4">
                    {mySkills.slice(0, 3).map((skill) => {
                      // Determine category color
                      const categoryColor = skill.category?.name
                        ? skill.category.name.toLowerCase().includes("tech") ||
                          skill.category.name.toLowerCase().includes("coding")
                          ? "bg-accent-pink"
                          : skill.category.name
                                .toLowerCase()
                                .includes("creative") ||
                              skill.category.name
                                .toLowerCase()
                                .includes("design")
                            ? "bg-accent-teal"
                            : "bg-primary"
                        : "bg-gray-200";

                      return (
                        <div
                          key={skill._id}
                          className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow relative"
                        >
                          <div className="absolute top-0 right-0 p-2 flex gap-2">
                            <Link
                              to={`/my-skills?edit=${skill._id}`}
                              className="w-8 h-8 flex items-center justify-center border-2 border-black bg-white hover:bg-neutral-100 active:translate-x-0.5 active:translate-y-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
                            >
                              <span className="material-symbols-outlined text-sm">
                                edit
                              </span>
                            </Link>
                          </div>
                          <span
                            className={`inline-block ${categoryColor} border border-black text-[10px] font-bold uppercase px-2 py-0.5 mb-2`}
                          >
                            {skill.category?.name || "Uncategorized"}
                          </span>
                          <h3 className="text-xl font-bold leading-tight mb-1 pr-16">
                            {skill.title}
                          </h3>
                          <p className="text-xs text-gray-600 font-bold mb-2">
                            Level:{" "}
                            <span className="uppercase">{skill.level}</span>
                          </p>
                          <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                            <span className="material-symbols-outlined text-sm">
                              visibility
                            </span>
                            <span
                              className={
                                skill.isActive
                                  ? "text-accent-teal"
                                  : "text-gray-400"
                              }
                            >
                              {skill.isActive ? "Active" : "Inactive"}
                            </span>
                            {skill.verificationStatus === "approved" && (
                              <>
                                <span className="mx-1">•</span>
                                <span className="material-symbols-outlined text-sm text-accent-teal">
                                  verified
                                </span>
                                <span className="text-accent-teal">
                                  Verified
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {!loading && mySkills.length > 3 && (
                  <Link
                    to="/my-skills"
                    className="text-center py-3 border-2 border-black bg-white hover:bg-neutral-100 font-bold text-sm uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                  >
                    View All {mySkills.length} Skills →
                  </Link>
                )}
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
