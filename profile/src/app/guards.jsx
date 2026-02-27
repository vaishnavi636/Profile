import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import { getApprovalDoc } from "../services/accessRequests";
import Loading from "../components/Loading";
import { auth } from "../firebase";
import { ADMIN_UID } from "../config/admin";
import { consumeOneView, getGrant } from "../services/grants";

export function RequireAuth({ children }) {
  const { user, authLoading } = useAuth();
  if (authLoading) return <Loading />;
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

export function RequireApproved({ children }) {
  const { user, authLoading } = useAuth();
  const [loading, setLoading] = useState(true);
  const [approved, setApproved] = useState(false);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    async function run() {
      if (!user) {
        setLoading(false);
        return;
      }

      await auth.currentUser?.reload();
      const isVerified = !!auth.currentUser?.emailVerified;
      setVerified(isVerified);

      if (!isVerified) {
        setApproved(false);
        setLoading(false);
        return;
      }

      const approval = await getApprovalDoc(user.uid);
      setApproved(!!approval);
      setLoading(false);
    }

    if (!authLoading) run();
  }, [user, authLoading]);

  if (authLoading || loading) return <Loading />;
  if (!user) return <Navigate to="/login" replace />;
  if (!verified) return <Navigate to="/waiting" replace />;
  if (!approved) return <Navigate to="/waiting" replace />;

  return children;
}

/**
 * ✅ Use this ONLY for /profile
 * - Admin: allow (no counter)
 * - Normal user: consumes 1 view when entering profile
 * - If no views: redirect to /home with state { expired: true }
 */
export function RequireProfileView({ children }) {
  const { user, authLoading } = useAuth();
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    async function run() {
      if (!user) {
        setLoading(false);
        return;
      }

      const isAdmin = user.uid === ADMIN_UID;
      if (isAdmin) {
        setAllowed(true);
        setLoading(false);
        return;
      }

      // Must be approved + verified first (same logic as RequireApproved)
      await auth.currentUser?.reload();
      if (!auth.currentUser?.emailVerified) {
        setAllowed(false);
        setLoading(false);
        return;
      }

      const approval = await getApprovalDoc(user.uid);
      if (!approval) {
        setAllowed(false);
        setLoading(false);
        return;
      }

      // If no grant or no views, redirect to /home
      const grant = await getGrant(user.uid);
      const remaining = Number(grant?.remainingViews ?? 0);
      if (remaining <= 0) {
        setAllowed(false);
        setLoading(false);
        return;
      }

      // ✅ Consume one view NOW (entering /profile)
      try {
        await consumeOneView(user.uid);
        setAllowed(true);
      } catch (e) {
        setAllowed(false);
      } finally {
        setLoading(false);
      }
    }

    if (!authLoading) run();
  }, [user, authLoading]);

  if (authLoading || loading) return <Loading />;
  if (!user) return <Navigate to="/login" replace />;

  if (!allowed) {
    return <Navigate to="/home" replace state={{ expired: true, from: location.pathname }} />;
  }

  return children;
}