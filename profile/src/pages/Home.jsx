import { useEffect, useMemo, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ADMIN_UID } from "../config/admin";

import { getGrant } from "../services/grants";
import { getApprovalDoc, requestRenewAccess } from "../services/accessRequests";

import "../styles/home.css";
import appreciationImg from "../assets/appreciation.png"; 

export default function Home() {
  const { user } = useAuth();
  const isAdmin = user?.uid === ADMIN_UID;

  const [approved, setApproved] = useState(false);
  const [grant, setGrant] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showRequestForm, setShowRequestForm] = useState(false);
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const [appName, setAppName] = useState("");
  const [appTitle, setAppTitle] = useState("");
  const [appDesc, setAppDesc] = useState("");
  const [appComment, setAppComment] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const remainingViews = Number(grant?.remainingViews ?? 0);
  const canViewNow = isAdmin || remainingViews > 0;

  const username = useMemo(() => {
    const email = user?.email || "";
    const beforeAt = email.split("@")[0] || "friend";
    const pretty = beforeAt.replace(/[._-]+/g, " ");
    return pretty.charAt(0).toUpperCase() + pretty.slice(1);
  }, [user?.email]);

  
  const RESUME_URL = "/resume/VaishnaviSharma_8805785260_CV.pdf";

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

  function submitAppreciation() {
    alert("Thanks! Appreciation saved locally for now ✅ (Firestore later)");
    setAppName("");
    setAppTitle("");
    setAppDesc("");
    setAppComment("");
  }

  if (loading) return <div style={{ padding: 24, fontFamily: "system-ui" }}>Loading…</div>;

  return (
    <div className="homePage">
      <div className="homeWrap">
        {/* Top bar */}
        <div className="homeTopBar">
          <div className="homePills">
            <span className="homePill">
              <b>Logged in:</b>&nbsp;{user?.email}
            </span>

            <span className="homePill">
              <b>Status:</b>&nbsp;
              {approved ? (
                <span style={{ color: "#16a34a", fontWeight: 700 }}>Approved</span>
              ) : (
                <span style={{ color: "#f59e0b", fontWeight: 700 }}>Pending</span>
              )}
            </span>
          </div>

          <div className="homeActions">
            {isAdmin && (
              <Link to="/admin" className="homeBtn homeBtnDark">
                🛡️ Admin Panel
              </Link>
            )}
            <button onClick={() => signOut(auth)} className="homeBtn">
              Logout
            </button>
          </div>
        </div>

        {/* Hero */}
        <div className="homeHero">
          <div className="homeTitle">Welcome, {username} 👋</div>
         

          <div className="homeActionRow">
            <a href={RESUME_URL} download className="homeBtn homeBtnDark">
              ⬇️ Download Resume
            </a>

            {approved && canViewNow ? (
              <Link to="/profile" className="homeBtn homeBtnPrimary">
                My Complete Profile →
              </Link>
            ) : approved && !canViewNow && !isAdmin ? (
              <button onClick={() => setShowRequestForm(true)} className="homeBtn">
                Request access
              </button>
            ) : (
              <div style={{ fontSize: 13, color: "#666", padding: "10px 12px" }}>
                Verify + get approval to access profile.
              </div>
            )}
          </div>

          {/* Renew request */}
          {!isAdmin && approved && showRequestForm && !canViewNow && (
            <div className="homeRenew">
              <div style={{ fontWeight: 900 }}>Access expired</div>
              <div style={{ color: "#92400e", marginTop: 6 }}>
                Please request access again to view the profile.
              </div>

              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write why you want to view the profile again..."
                className="homeTextarea"
                style={{ marginTop: 10 }}
              />

              <div style={{ marginTop: 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <button
                  onClick={onRequestAgain}
                  disabled={sending || message.trim().length < 3}
                  className="homeBtn homeBtnDark"
                >
                  {sending ? "Sending..." : "Send request"}
                </button>

                <button onClick={() => setShowRequestForm(false)} className="homeBtn">
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Row 1: Appreciation + Showcase (same height) */}
      <div className="homeSectionone"> Comment </div>

  <div className="appLayout">
  <div className="appImageWrap">
    <img src={appreciationImg} alt="Appreciation" />
  </div>

  <div className="appFormWrap">
   
    <div className="formGrid">

      <div className="field">
        <label className="homeLabelName">Your Name</label>
        <input className="homeInput" value={appName} onChange={(e) => setAppName(e.target.value)} />
      </div>

      <div className="field">
        <label className="homeLabel">Your Designation</label>
        <input className="homeInput" value={appTitle} onChange={(e) => setAppTitle(e.target.value)} />
      </div>

      <div className="field">
        <label className="homeLabel">Short Description</label>
        <input className="homeInput" value={appDesc} onChange={(e) => setAppDesc(e.target.value)} />
      </div>

      <div className="field">
        <label className="homeLabelMessage">Your Message</label>
        <textarea className="homeTextarea" rows={6} value={appComment} onChange={(e) => setAppComment(e.target.value)} />
      </div>

      <button
        onClick={submitAppreciation}
        disabled={appName.trim().length < 2 || appTitle.trim().length < 2 || appComment.trim().length < 5}
        className="homeBtn1 homeBtnDark"
      >
        Submit
      </button>
    </div>
  </div>
</div>

        {/* Section 2: Full-width appreciation comments (3 cards/row) */}
        <div className="homeSection">
          <div className="homeSectionHeader">
            <div>
              <div className="homeSectionTitle">Appreciation</div>
              
            </div>
          </div>

          <div className="homeGrid3">
            {PLACEHOLDER_TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="homeMiniCard">
                <div style={{ fontWeight: 900, fontSize: 13 }}>{t.name}</div>
                <div style={{ fontSize: 12, color: "#555", marginTop: 4 }}>{t.title}</div>
                <div style={{ fontSize: 13, marginTop: 10, color: "#222", lineHeight: 1.4 }}>{t.text}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

const PLACEHOLDER_TESTIMONIALS = [
  { name: "Aditi", title: "Designer", text: "Super reliable and delivers clean solutions under pressure." },
  { name: "Karan", title: "Engineer", text: "Great communication and very organized workflow." },
  { name: "Neha", title: "Manager", text: "Ownership mindset. Always thinks end-to-end." },
  ];