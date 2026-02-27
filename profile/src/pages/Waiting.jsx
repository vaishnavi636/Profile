import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { sendEmailVerification } from "firebase/auth";
import { getApprovalDoc, getMyRequest } from "../services/accessRequests";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function Waiting() {
  const { user } = useAuth();
  const [status, setStatus] = useState("Checking...");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    async function run() {
      if (!user) return;

      await auth.currentUser?.reload();
      const verified = auth.currentUser?.emailVerified;

      if (!verified) {
        setStatus("Email not verified. Please verify your email, then refresh.");
        return;
      }

      const approval = await getApprovalDoc(user.uid);
      if (approval) {
        setStatus("Approved ✅ You can enter now.");
        return;
      }

      const req = await getMyRequest(user.uid);
      if (req?.status === "REJECTED") {
        setStatus("Request rejected ❌ Contact the owner.");
        return;
      }

      setStatus("Verified ✅ Waiting for owner approval…");
    }

    run();
  }, [user]);

  async function resend() {
    if (!auth.currentUser) return;
    setBusy(true);
    await sendEmailVerification(auth.currentUser);
    setBusy(false);
  }

  return (
    <div style={{ padding: 24, fontFamily: "system-ui" }}>
      <h2>Access status</h2>
      <p>{status}</p>

      {status.includes("Approved") && (
        <div style={{ marginTop: 12 }}>
          <Link
            to="/home"
            style={{
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: 8,
              background: "#111",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Go to Home
          </Link>
        </div>
      )}

      {!auth.currentUser?.emailVerified && (
        <button onClick={resend} disabled={busy} style={{ marginTop: 12 }}>
          {busy ? "Sending..." : "Resend verification email"}
        </button>
      )}

      <div style={{ marginTop: 12 }}>
        <button onClick={() => window.location.reload()}>Refresh</button>
      </div>

      <div style={{ marginTop: 16 }}>
        <Link to="/login">Back to login</Link>
      </div>
    </div>
  );
}