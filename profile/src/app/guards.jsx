import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import { getApprovalDoc } from "../services/accessRequests";
import Loading from "../components/Loading";
import { auth } from "../firebase";

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

      // Always reload to get fresh emailVerified
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