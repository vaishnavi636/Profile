import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ADMIN_UID } from "../config/admin";

import { getGrant, consumeOneView } from "../services/grants";
import { getApprovalDoc, requestRenewAccess } from "../services/accessRequests";

export default function Home() {
  const { user } = useAuth();
  const isAdmin = user?.uid === ADMIN_UID;

  const [approved, setApproved] = useState(false);
  const [grant, setGrant] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showProfile, setShowProfile] = useState(false);

  // renew request message
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const remainingViews = Number(grant?.remainingViews ?? 0);

  async function refresh() {
    if (!user) return;
    setLoading(true);

    const a = await getApprovalDoc(user.uid);
    setApproved(!!a);

    // Admin doesn't need grant, but we can still load it (harmless)
    const g = await getGrant(user.uid);
    setGrant(g);

    setLoading(false);
  }

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  async function onOpenProfile() {
    if (!user) return;

    // ✅ Admin: unlimited (no counter, no limit)
    if (isAdmin) {
      setShowProfile(true);
      return;
    }

    // ✅ Normal user: consumes 1 view; if none left -> cannot show
    try {
      await consumeOneView(user.uid);
      await refresh();
      setShowProfile(true);
    } catch (e) {
      await refresh();
      setShowProfile(false);
    }
  }

  async function onRequestAgain() {
    if (!user) return;
    setSending(true);
    await requestRenewAccess(user.uid, user.email, message);
    setSending(false);
    setMessage("");
    alert("Request sent to owner ✅");
  }

  if (loading) {
    return <div style={{ padding: 24, fontFamily: "system-ui" }}>Loading…</div>;
  }

  const canViewNow = isAdmin || remainingViews > 0;

  return (
    <div style={{ padding: 24, fontFamily: "system-ui", maxWidth: 980 }}>
      <h1>Welcome, Vaishnavi 👋</h1>
      <p style={{ color: "#555" }}>This is your private life-time profile space.</p>

      <div style={box}>
        <div>
          <b>Logged in:</b> {user?.email}
        </div>

        <div style={{ marginTop: 6 }}>
          <b>Status:</b>{" "}
          {approved ? (
            <span style={{ color: "green" }}>Approved</span>
          ) : (
            <span style={{ color: "orange" }}>Pending</span>
          )}
        </div>

        {/* ✅ Do NOT show view counts to users */}
        {isAdmin ? (
          <div style={{ marginTop: 6 }}>
            <b>Access level:</b> Unlimited (Owner)
          </div>
        ) : (
          <div style={{ marginTop: 6, color: "#666" }}>
            <b>Access level:</b> Limited (Owner-controlled)
          </div>
        )}

        <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
          <button onClick={onOpenProfile} disabled={!approved || (!isAdmin && !canViewNow)}>
            📜 Open Life Profile
          </button>

          {/* ✅ Admin link only visible to admin */}
          {isAdmin && (
            <Link to="/admin" style={{ ...btnLink, background: "#111", color: "#fff" }}>
              🛡️ Admin Panel
            </Link>
          )}

          <button onClick={() => signOut(auth)}>Logout</button>
        </div>

        {/* ✅ User: if cannot view now, show renew request (no mention of counts) */}
        {!isAdmin && approved && !canViewNow && (
          <div style={{ marginTop: 16 }}>
            <p style={{ marginBottom: 8, color: "#b45309" }}>
              Your access has expired. To continue, please send a request to the owner.
            </p>

            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write why you want to view the profile again..."
              style={{
                width: "100%",
                padding: 10,
                borderRadius: 10,
                border: "1px solid #ddd",
              }}
            />

            <div style={{ marginTop: 10 }}>
              <button onClick={onRequestAgain} disabled={sending || message.trim().length < 3}>
                {sending ? "Sending..." : "Request access again"}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ✅ Profile content merged into Home */}
      {showProfile && approved && (
        <div style={{ marginTop: 18, ...box }}>
          <h2 style={{ marginTop: 0 }}>Vaishnavi’s Life Profile (Private)</h2>
          <p style={{ color: "#555" }}>
            This section is visible only when access is allowed.
          </p>

          {/* Replace with your real sections */}
          <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
            <Section title="🏆 Achievements">
              Football certificates, awards, DesignOps recognition, etc.
            </Section>

            <Section title="🎓 Education">
              10th, 12th, BSc, MSc
            </Section>

            <Section title="💼 Experience">
              Capgemini, TCS, and key projects
            </Section>

            <Section title="🧩 Projects">
              External projects, hackathons, tools
            </Section>
          </div>
        </div>
      )}
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ padding: 12, borderRadius: 12, border: "1px solid #eee", background: "#fff" }}>
      <div style={{ fontWeight: 700, marginBottom: 6 }}>{title}</div>
      <div style={{ color: "#333" }}>{children}</div>
    </div>
  );
}

const box = {
  padding: 14,
  border: "1px solid #eee",
  borderRadius: 12,
  background: "#fafafa",
};

const btnLink = {
  display: "inline-block",
  padding: "8px 12px",
  borderRadius: 10,
  textDecoration: "none",
  border: "1px solid #ddd",
};