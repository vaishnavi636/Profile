import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ADMIN_UID } from "../config/admin";

import { getGrant } from "../services/grants";
import { getApprovalDoc, requestRenewAccess } from "../services/accessRequests";

export default function Home() {
  const { user } = useAuth();
  const isAdmin = user?.uid === ADMIN_UID;

  const [approved, setApproved] = useState(false);
  const [grant, setGrant] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showRequestForm, setShowRequestForm] = useState(false);
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const remainingViews = Number(grant?.remainingViews ?? 0);
  const canViewNow = isAdmin || remainingViews > 0;

  async function refresh() {
    if (!user) return;
    setLoading(true);

    const a = await getApprovalDoc(user.uid);
    setApproved(!!a);

    const g = await getGrant(user.uid);
    setGrant(g);

    setLoading(false);
  }

  useEffect(() => {
    refresh();

    // Auto-open request form if redirected from /profile due to expired access
    if (location.state?.expired) {
      setShowRequestForm(true);
      navigate("/home", { replace: true, state: {} });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, location.key]);

  async function onRequestAgain() {
    if (!user) return;
    setSending(true);
    try {
      await requestRenewAccess(user.uid, user.email, message);
      alert("Request sent to owner ✅");
      setMessage("");
      setShowRequestForm(false);
    } finally {
      setSending(false);
    }
  }

  if (loading) {
    return <div style={{ padding: 24, fontFamily: "system-ui" }}>Loading…</div>;
  }

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

        <div style={{ marginTop: 6, color: "#666" }}>
          <b>Access level:</b>{" "}
          {isAdmin ? "Unlimited (Owner)" : "Limited (Owner-controlled)"}
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
          {/* ✅ View Profile ONLY when canViewNow */}
          {approved && canViewNow && (
            <Link to="/profile" style={{ ...btnLink, background: "#111", color: "#fff" }}>
              View Profile
            </Link>
          )}

          {/* ✅ Request access button when views exhausted */}
          {approved && !canViewNow && !isAdmin && (
            <button onClick={() => setShowRequestForm(true)}>
              Request access
            </button>
          )}

          {/* Admin Panel only for admin */}
          {isAdmin && (
            <Link to="/admin" style={{ ...btnLink, background: "#111", color: "#fff" }}>
              🛡️ Admin Panel
            </Link>
          )}

          <button onClick={() => signOut(auth)}>Logout</button>
        </div>

        {/* ✅ Request form */}
        {!isAdmin && approved && showRequestForm && !canViewNow && (
          <div style={{ marginTop: 16 }}>
            <p style={{ marginBottom: 8, color: "#b45309" }}>
              Your access has expired. Please request access again to view the profile.
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

            <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
              <button onClick={onRequestAgain} disabled={sending || message.trim().length < 3}>
                {sending ? "Sending..." : "Send request"}
              </button>

              <button
                onClick={() => setShowRequestForm(false)}
                style={{ background: "#fff", border: "1px solid #ddd" }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
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
  padding: "10px 14px",
  borderRadius: 10,
  textDecoration: "none",
  border: "1px solid #ddd",
};