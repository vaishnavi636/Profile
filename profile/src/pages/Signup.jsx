import "../styles/auth.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase";
import { createOrUpdateInitialRequest } from "../services/accessRequests";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setBusy(true);

    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);

      // Send verification email
      await sendEmailVerification(cred.user);

      // Create access request as PENDING (INITIAL)
      await createOrUpdateInitialRequest(cred.user.uid, cred.user.email);

      // Go to waiting page
      navigate("/waiting", { replace: true });
    } catch (err) {
      setError(err?.message || "Signup failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="auth-wrap">
      <form className="auth-card" onSubmit={onSubmit}>
        <h1>Request access</h1>
        <p style={{ marginTop: 0, color: "#666", fontSize: 13 }}>
          Create an account, verify your email, then wait for approval.
        </p>

        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />

        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />

        <button disabled={busy}>{busy ? "Creating..." : "Create account"}</button>

        {error && <div className="auth-error">{error}</div>}

        <div className="auth-help">
          Already requested? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}