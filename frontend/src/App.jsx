import { Navigate, replace, Route, Routes } from "react-router-dom";
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
import TermsPage from "./pages/TermsPage";

import UnknownUserRo from "./pages/auth/UnknownUserRo";
import SignUpRo from "./pages/auth/SignUpRo";
import LoginPageRo from "./pages/auth/LoginPageRo";
import HomePageRo from "./pages/HomePageRo";
import LearnPageRo from "./pages/LearnPageRo";
import LearnHTMLPageRo from "./pages/learnPages/LearnHTMLPageRo";
import CommunityPageRo from "./pages/CommunityPageRo";
import NetworkPageRo from "./pages/NetworkPageRo";
import NotificationsPageRo from "./pages/NotificationsPageRo";
import ProfilePageRo from "./pages/ProfilePageRo";
import TermsPageRo from "./pages/TermsPageRo";

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
    <div className="min-h-screen bg-bg-princ">
      <Routes>
        {/* Public routes */}
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/" replace />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" replace />}
        />
        <Route
          path="/signupro"
          element={!authUser ? <SignUpRo /> : <Navigate to="/ro" replace />}
        />
        <Route
          path="/loginro"
          element={!authUser ? <LoginPageRo /> : <Navigate to="/ro" replace />}
        />

        <Route path="/welcome" element={<UnknownUser />} />
        <Route path="/terms" element={<TermsPage />} />

        <Route path="/welcomero" element={<UnknownUserRo />} />
        <Route path="/signupro" element={<SignUpRo />} />
        <Route path="/loginro" element={<LoginPageRo />} />
        <Route path="/termsro" element={<TermsPageRo />} />

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
          path="/ro"
          element={
            <ProtectedRoute user={authUser}>
              <HomePageRo />
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
          path="/notificationsro"
          element={
            <ProtectedRoute user={authUser}>
              <NotificationsPageRo />
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
          path="/communityro"
          element={
            <ProtectedRoute user={authUser}>
              <CommunityPageRo />
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
          path="/networkro"
          element={
            <ProtectedRoute user={authUser}>
              <NetworkPageRo />
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
          path="/profilero/:username"
          element={
            <ProtectedRoute user={authUser}>
              <ProfilePageRo />
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
          path="/learnro"
          element={
            <ProtectedRoute user={authUser}>
              <LearnPageRo />
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
        <Route
          path="/learnhtmlro"
          element={
            <ProtectedRoute user={authUser}>
              <LearnHTMLPageRo />
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
    </div>
  );
}

export default App;
