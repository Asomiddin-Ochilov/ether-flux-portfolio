// @ts-nocheck
import { createFileRoute, Link, Outlet, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { HiOutlineHome, HiOutlineFolder, HiOutlineNewspaper, HiOutlineMail, HiOutlineCog, HiOutlineLogout, HiOutlineSearch, HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

const ADMIN_AUTH_KEY = "nova-admin-auth";

function isAdminAuthenticated() {
  return typeof window !== "undefined" && localStorage.getItem(ADMIN_AUTH_KEY) === "true";
}

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

const nav = [
  { to:"/admin", label:"Dashboard", icon:<HiOutlineHome/>, exact:true },
  { to:"/admin/projects", label:"Projects", icon:<HiOutlineFolder/> },
  { to:"/admin/blogs", label:"Blogs", icon:<HiOutlineNewspaper/> },
  { to:"/admin/messages", label:"Messages", icon:<HiOutlineMail/> },
  { to:"/admin/settings", label:"Settings", icon:<HiOutlineCog/> },
];

function AdminLayout() {
  const loc = useLocation();
  const navigate = useNavigate();
  const [auth, setAuth] = useState(isAdminAuthenticated());
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("admin-dark-mode") !== "false";
    }
    return true;
  });
  const isLoginPage = loc.pathname === "/admin/login";

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("lp-dark");
    } else {
      document.documentElement.classList.remove("lp-dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("admin-dark-mode", newMode ? "true" : "false");
  };

  useEffect(() => {
    setAuth(isAdminAuthenticated());
  }, [loc.pathname]);

  useEffect(() => {
    if (!auth && !isLoginPage) {
      navigate({ to: "/admin/login", replace: true });
    }
    if (auth && isLoginPage) {
      navigate({ to: "/admin", replace: true });
    }
  }, [auth, isLoginPage, navigate]);

  const handleLogout = () => {
    localStorage.removeItem(ADMIN_AUTH_KEY);
    localStorage.clear(); // Clear all localStorage data
    setAuth(false);
    navigate({ to: "/admin/login", replace: true });
  };

  if (!auth && !isLoginPage) {
    return null;
  }

  if (auth && isLoginPage) {
    return null;
  }

  if (isLoginPage) {
    return <div className="lp-app"><div className="lp-blob b1"/><div className="lp-blob b2"/><Outlet/></div>;
  }

  return (
    <div className="lp-app" style={{padding:0}}>
      <div className="lp-blob b1"/><div className="lp-blob b2"/>
      <div className="lp-admin">
        <aside className="lp-admin-side" style={{position:"fixed", left:0, top:0, bottom:0, zIndex:100, overflowY:"auto"}}>
          <div className="lp-logo"><span className="lp-logo-dot"/> Asomiddin<span style={{color:"var(--gl-2)"}}>.</span>admin</div>
          {nav.map(n=>{
            const isExactMatch = loc.pathname === n.to;
            const isSubRoute = !n.exact && loc.pathname.startsWith(n.to + "/");
            const active = isExactMatch || isSubRoute;
            return (
              <Link key={n.to} to={n.to} className={active?"active":""}>
                <span style={{fontSize:18,display:"inline-flex"}}>{n.icon}</span> {n.label}
              </Link>
            );
          })}
          <div style={{marginTop:"auto", display:"flex", flexDirection:"column", gap:10}}>
            <button
              onClick={handleLogout}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "none",
                border: "none",
                padding: 0,
                color: "var(--txt-mut)",
                cursor: "pointer",
              }}
            >
              <HiOutlineLogout /> Logout
            </button>
            <Link to="/" style={{color:"var(--txt-mut)"}}>
              Back to site
            </Link>
          </div>
        </aside>
        <div className="lp-admin-main" style={{marginLeft: "var(--sidebar-width, 280px)"}}>
          <div className="lp-admin-top">
            <h1>{(nav.find(n=> {
              const isExactMatch = loc.pathname === n.to;
              const isSubRoute = !n.exact && loc.pathname.startsWith(n.to + "/");
              return isExactMatch || isSubRoute;
            })?.label) || "Admin"}</h1>
            <div style={{display:"flex",gap:10,alignItems:"center"}}>
              <button onClick={toggleDarkMode} style={{background:"none",border:"none",cursor:"pointer",color:"var(--txt-mut)",fontSize:20,display:"flex",alignItems:"center"}}>{isDarkMode ? <HiOutlineSun/> : <HiOutlineMoon/>}</button>
              <div style={{position:"relative"}}>
                <HiOutlineSearch style={{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",color:"var(--txt-mut)"}}/>
                <input placeholder="Search anything…" style={{paddingLeft:38}}/>
              </div>
              <div style={{width:42,height:42,borderRadius:12,background:"var(--grad-pp)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:600}}>N</div>
            </div>
          </div>
          <Outlet/>
        </div>
      </div>
    </div>
  );
}
