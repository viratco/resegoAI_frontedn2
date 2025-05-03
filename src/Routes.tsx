import { Routes as RouterRoutes, Route, Navigate, useLocation } from 'react-router-dom'
import { SignIn } from './components/auth/SignIn'
import { SignUp } from './components/auth/SignUp'
import { ProtectedRoute } from './components/ProtectedRoute'
import ResearchSearch from './pages/ResearchSearch'
import ResearchReport from './pages/ResearchReport'
import Inventory from './pages/Inventory'
import Index from './pages/Index'
import Navbar from './components/Navbar'
import { useAuth } from '@/contexts/AuthContext'
import PaperDetails from './pages/PaperDetails'
import About from './pages/About';
import Features from './pages/Features';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';

export function Routes() {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <>
      <Navbar />
      <RouterRoutes>
        <Route 
          path="/" 
          element={user ? <Navigate to="/research" replace /> : <Index />} 
        />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route 
          path="/research" 
          element={
            <ProtectedRoute>
              <ResearchSearch />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/research-search" 
          element={
            <Navigate 
              to="/research" 
              replace 
              state={location.state || {}} 
            />
          } 
        />
        <Route 
          path="/research-report" 
          element={
            <ProtectedRoute>
              <ResearchReport />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/inventory" 
          element={
            <ProtectedRoute>
              <Inventory />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/paper-details" 
          element={
            <ProtectedRoute>
              <PaperDetails />
            </ProtectedRoute>
          } 
        />
      </RouterRoutes>
    </>
  )
} 