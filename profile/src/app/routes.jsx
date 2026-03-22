import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Waiting from "../pages/Waiting";
import Profile from "../pages/Profile";
import Admin from "../pages/Admin";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

import { RequireAuth, RequireApproved, RequireProfileView } from "./guards";
import { useAuth } from "../contexts/AuthContext";
import { getApprovalDoc } from "../services/accessRequests";
import Loading from "../components/Loading";

import ProfileAssetsUploader from "../admin/ProfileAssetsUploader";
import ProfileDataSeeder from "../admin/ProfileDataSeeder";

function IndexRedirect() {
  const { user, authLoading } = useAuth();
  const [checking, setChecking] = useState(true);
  const [approved, setApproved] = useState(false);

  useEffect(() => {
    async function run() {
      if (!user) {
        setChecking(false);
        return;
      }

      await user.reload();

      if (!user.emailVerified) {
        setChecking(false);
        return;
      }

      const ok = await getApprovalDoc(user.uid);
      setApproved(!!ok);
      setChecking(false);
    }

    if (!authLoading) run();
  }, [user, authLoading]);

  if (authLoading || checking) return <Loading />;

  if (!user) return <Navigate to="/login" replace />;
  if (!user.emailVerified) return <Navigate to="/waiting" replace />;
  if (!approved) return <Navigate to="/waiting" replace />;

  return <Navigate to="/home" replace />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<IndexRedirect />} />

      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/waiting"
        element={
          <RequireAuth>
            <Waiting />
          </RequireAuth>
        }
      />

      <Route
        path="/home"
        element={
          <RequireApproved>
            <Home />
          </RequireApproved>
        }
      />

      <Route path="/admin/profile-assets-uploader" element={<ProfileAssetsUploader />} />
       <Route path="/admin/profile-seeder" element={<ProfileDataSeeder />} />
      {/* ✅ Profile is protected by view-counter */}
      <Route
        path="/profile"
        element={
          <RequireProfileView>
            <Profile />
          </RequireProfileView>
        }
      />

      <Route
        path="/admin"
        element={
          <RequireAuth>
            <Admin />
          </RequireAuth>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}