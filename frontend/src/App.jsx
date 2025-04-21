import { Navigate, Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import NotificationsPage from "./pages/NotificationsPage";
import UnknownUser from "./pages/auth/UnknownUser";
import CommunityPage from "./pages/CommunityPage";
import SignUpPage from "./pages/auth/SignUpPage";
import LoginPage from "./pages/auth/LoginPage";
import NetworkPage from "./pages/NetworkPage";
import ProfilePage from "./pages/ProfilePage";
import LearnPage from "./pages/LearnPage";
import PostPage from "./pages/PostPage";
import HomePage from "./pages/HomePage";
import LearnHTMLPage from "./pages/learnPages/LearnHTMLPage";

import { axiosInstance } from "./lib/axios";

function App() {
  const { data: authUser, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/auth/me");
        return res.data;
      } catch (err) {
        if (err.response && err.response.status === 401) {
          return null;
        }
        toast.error(err.response?.data?.message || "Something went wrong");
        return null;
      }
    },
  });

  if (isLoading) return null;

  return (
    <Layout>
      <Routes>
        {/* Public routes */}
        <Route path="/welcome" element={<UnknownUser />} />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/" replace />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" replace />}
        />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute user={authUser}>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute user={authUser}>
              <NotificationsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/community"
          element={
            <ProtectedRoute user={authUser}>
              <CommunityPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/network"
          element={
            <ProtectedRoute user={authUser}>
              <NetworkPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/post/:postId"
          element={
            <ProtectedRoute user={authUser}>
              <PostPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/:username"
          element={
            <ProtectedRoute user={authUser}>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/learn"
          element={
            <ProtectedRoute user={authUser}>
              <LearnPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/learnhtml"
          element={
            <ProtectedRoute user={authUser}>
              <LearnHTMLPage />
            </ProtectedRoute>
          }
        />
        {/* Catch-all */}
        <Route
          path="*"
          element={<Navigate to={authUser ? "/" : "/login"} replace />}
        />
      </Routes>
      <Toaster />
    </Layout>
  );
}

export default App;
