// @ts-nocheck
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const ADMIN_AUTH_KEY = "nova-admin-auth";
const VALID_EMAIL = "admin@nova.dev";
const VALID_PASSWORD = "admin123";

function isAdminAuthenticated() {
  return typeof window !== "undefined" && localStorage.getItem(ADMIN_AUTH_KEY) === "true";
}

export const Route = createFileRoute("/admin/login")({ component: Login });

function Login() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAdminAuthenticated()) {
      nav({ to: "/admin", replace: true });
    }
  }, [nav]);

  return (
    <div className="lp-login" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", }}>
      <div className="lp-login-card" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="lp-logo" style={{marginBottom:24}}><span className="lp-logo-dot"/> Admin<span style={{color:"var(--gl-2)"}}></span></div>
        <h2>Xush kelibsiz</h2>
        <p className="sub">O'zingizning boshqaruv markaziga kiring.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const email = form.email.value.trim();
            const password = form.password.value;
            setError("");

            if (!email || !password) {
              setError("Email va parolni kiriting.");
              return;
            }

            setLoading(true);
            setTimeout(() => {
              if (email === VALID_EMAIL && password === VALID_PASSWORD) {
                localStorage.setItem(ADMIN_AUTH_KEY, "true");
                nav({ to: "/admin", replace: true });
              } else {
                setLoading(false);
                setError("Email yoki parol noto‘g‘ri.");
              }
            }, 500);
          }}
          style={{ display: "flex", flexDirection: "column", gap: 14 }}
        >
          <div className="lp-field">
            <label>Email</label>
            <input name="email" type="email" defaultValue={VALID_EMAIL} />
          </div>
          <div className="lp-field">
            <label>Parol</label>
            <input name="password" type="password" defaultValue={VALID_PASSWORD} />
          </div>
          <button className="lp-btn lp-btn-primary" type="submit" disabled={loading}>
            {loading ? "Kiritilmoqda…" : "Kirish →"}
          </button>
        </form>
        {error ? (
          <p style={{ marginTop: 12, color: "#fa5252", fontSize: 14, textAlign: "center" }}>
            {error}
          </p>
        ) : null}
        <div style={{ marginTop: 18, textAlign: "center", color: "var(--txt-mut)", fontSize: 14 }}>
          <a
            href="/"
            style={{
              color: "var(--gl-2)",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            ← Portfolioga qaytish
          </a>
        </div>
      </div>
    </div>
  );
}
