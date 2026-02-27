import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { ADMIN_UID } from "../config/admin";
import { Link } from "react-router-dom";

import {
  listPendingRequests,
  approveUser,
  rejectUser,
} from "../services/accessRequests";
import { getGrant } from "../services/grants";

export default function Admin() {
  const { user } = useAuth();
  const isAdmin = user?.uid === ADMIN_UID;

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  async function refresh() {
    setLoading(true);
    setErrMsg("");

    try {
      const pending = await listPendingRequests();

      const withStats = await Promise.all(
        pending.map(async (r) => {
          // If grants doc doesn't exist yet, getGrant returns null (fine)
          const g = await getGrant(r.uid);
          return {
            ...r,
            remainingViews: Number(g?.remainingViews ?? 0),
            totalViewsConsumed: Number(g?.totalViewsConsumed ?? 0),
          };
        })
      );

      setRequests(withStats);
    } catch (e) {
      console.error("Admin refresh failed:", e);
      setErrMsg(e?.message || "Failed to load requests.");
      setRequests([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isAdmin) {
    return (
      <div style={{ padding: 24, fontFamily: "system-ui" }}>
        <h2>Access denied</h2>
        <Link to="/home">Back</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 24, fontFamily: "system-ui", maxWidth: 900 }}>
      <h1>Admin Approval Panel</h1>

      <div style={{ marginBottom: 14 }}>
        <Link to="/home">← Back to Home</Link>
        <button onClick={refresh} style={{ marginLeft: 12 }}>
          Refresh
        </button>
      </div>

      {loading ? (
        <p>Loading…</p>
      ) : errMsg ? (
        <div style={{ padding: 12, border: "1px solid #fca5a5", borderRadius: 10 }}>
          <b style={{ color: "#b91c1c" }}>Error:</b> {errMsg}
          <div style={{ marginTop: 8, color: "#444" }}>
            Open DevTools Console — you will see the exact Firestore error.
          </div>
        </div>
      ) : requests.length === 0 ? (
        <p>No pending requests.</p>
      ) : (
        <div style={{ display: "grid", gap: 12 }}>
          {requests.map((r) => (
            <div key={r.uid} style={card}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <div>
                  <div style={{ fontWeight: 700 }}>{r.email}</div>
                  <div style={{ color: "#666", fontSize: 13 }}>
                    Type: <b>{r.reason}</b>
                  </div>

                  {r.message ? (
                    <div
                      style={{
                        marginTop: 8,
                        padding: 10,
                        borderRadius: 10,
                        background: "#fafafa",
                        border: "1px solid #eee",
                      }}
                    >
                      <b>User message:</b>
                      <div style={{ marginTop: 6 }}>{r.message}</div>
                    </div>
                  ) : null}

                  <div style={{ marginTop: 10, color: "#666", fontSize: 13 }}>
                    Stats — Remaining: <b>{r.remainingViews}</b>, Total viewed:{" "}
                    <b>{r.totalViewsConsumed}</b>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <button
                    onClick={async () => {
                      await approveUser(r.uid, r.email);
                      await refresh();
                    }}
                  >
                    Approve (set 2 views)
                  </button>

                  <button
                    onClick={async () => {
                      await rejectUser(r.uid);
                      await refresh();
                    }}
                    style={{ background: "#fff", border: "1px solid #ddd" }}
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const card = {
  border: "1px solid #eee",
  borderRadius: 12,
  padding: 14,
  background: "#fff",
};