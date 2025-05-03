import { Link, useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/AuthContext"
import { useState, useEffect, useRef } from "react"
import { ChevronDown, LogOut, User, Menu } from "lucide-react"
import logo from '/logo.png'

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  // Hide navbar on auth pages
  const isAuthPage = location.pathname === "/signin" || location.pathname === "/signup";
  if (isAuthPage) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-1.5 md:gap-2">
            <Link to="/" className="flex items-center justify-center">
              <img 
                src={logo} 
                alt="Logo" 
                className="h-8 md:h-9 w-auto my-2"
              />
            </Link>
            
            <h1 className="text-lg md:text-xl font-semibold text-[#8B5CF6] font-inter tracking-tight leading-none">
              Resego<span className="font-normal">AI</span>
            </h1>
          </div>
          {/* Centered desktop navigation links */}
          {!user && (
            <div className="hidden md:flex flex-1 justify-center">
              <nav className="flex gap-6">
                <Link to="/about" className="px-4 py-2 rounded-full bg-[#f3e8ff] text-[#7c3aed] font-semibold shadow-sm hover:bg-[#ede9fe] hover:text-[#6d28d9] transition-all">About</Link>
                <Link to="/features" className="px-4 py-2 rounded-full bg-[#f3e8ff] text-[#7c3aed] font-semibold shadow-sm hover:bg-[#ede9fe] hover:text-[#6d28d9] transition-all">Features</Link>
                <Link to="/blog" className="px-4 py-2 rounded-full bg-[#f3e8ff] text-[#7c3aed] font-semibold shadow-sm hover:bg-[#ede9fe] hover:text-[#6d28d9] transition-all">Blog</Link>
                <Link to="/faq" className="px-4 py-2 rounded-full bg-[#f3e8ff] text-[#7c3aed] font-semibold shadow-sm hover:bg-[#ede9fe] hover:text-[#6d28d9] transition-all">FAQ</Link>
              </nav>
            </div>
          )}

          {/* Mobile navigation menu */}
          <div className="md:hidden">
            <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="p-2">
              <Menu className="w-6 h-6" />
            </button>
            {showMobileMenu && !user && (
  <div ref={mobileMenuRef} className="absolute top-16 left-0 w-full flex justify-center z-50">
    <div className="bg-white/95 shadow-xl rounded-2xl p-5 flex flex-col items-center gap-3 max-w-xs w-full border border-[#e9d5ff]">
      <Link to="/about" className="w-full text-center px-4 py-2 rounded-full bg-[#f3e8ff] text-[#7c3aed] font-semibold shadow hover:bg-[#ede9fe] hover:text-[#6d28d9] transition-all" onClick={() => setShowMobileMenu(false)}>About</Link>
      <Link to="/features" className="w-full text-center px-4 py-2 rounded-full bg-[#f3e8ff] text-[#7c3aed] font-semibold shadow hover:bg-[#ede9fe] hover:text-[#6d28d9] transition-all" onClick={() => setShowMobileMenu(false)}>Features</Link>
      <Link to="/blog" className="w-full text-center px-4 py-2 rounded-full bg-[#f3e8ff] text-[#7c3aed] font-semibold shadow hover:bg-[#ede9fe] hover:text-[#6d28d9] transition-all" onClick={() => setShowMobileMenu(false)}>Blog</Link>
      <Link to="/faq" className="w-full text-center px-4 py-2 rounded-full bg-[#f3e8ff] text-[#7c3aed] font-semibold shadow hover:bg-[#ede9fe] hover:text-[#6d28d9] transition-all" onClick={() => setShowMobileMenu(false)}>FAQ</Link>
    </div>
  </div>
)}
          </div>

          {user && (
            <div className="flex-1 flex justify-center items-center mx-4">
              <div className="hidden md:flex items-center justify-center gap-8">
                <Link 
                  to="/research" 
                  className="text-gray-600 hover:text-primary transition-colors font-medium"
                >
                  Research
                </Link>
                <Link 
                  to="/inventory" 
                  className="text-gray-600 hover:text-primary transition-colors font-medium"
                >
                  Inventory
                </Link>
              </div>
              <div className="md:hidden flex justify-center w-full" ref={mobileMenuRef}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-gray-100/50"
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <Menu className="h-5 w-5 text-gray-600" />
                </Button>
                {showMobileMenu && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-8 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-[100]">
                    <Link
                      to="/research"
                      className="block px-4 py-2.5 text-sm text-center text-gray-700 hover:bg-gray-100 transition-colors font-medium"
                      onClick={() => setShowMobileMenu(false)}
                    >
                      Research
                    </Link>
                    <Link
                      to="/inventory"
                      className="block px-4 py-2.5 text-sm text-center text-gray-700 hover:bg-gray-100 transition-colors font-medium"
                      onClick={() => setShowMobileMenu(false)}
                    >
                      Inventory
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center ml-auto">
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <Button 
                  variant="ghost" 
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 hover:bg-gray-100/50"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <User className="h-4 h-4" />
                    </div>
                    <span className="hidden md:inline">{user.email?.split('@')[0]}</span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                </Button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[100]">
                    <div className="py-1">
                      <div className="px-4 py-2 text-sm text-gray-500 border-b">
                        Signed in as <span className="font-medium text-gray-900">{user.email}</span>
                      </div>
                      <button
                        onClick={handleSignOut}
                        className="w-full px-4 py-2 text-left text-sm flex items-center gap-2 text-red-600 hover:bg-red-50 transition-colors group"
                      >
                        <LogOut className="w-4 h-4 group-hover:text-red-600" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/signin">
                  <Button variant="outline" className="font-medium">Sign In</Button>
                </Link>
                <Link to="/signup">
                  <Button className="font-medium bg-[#8B5CF6] hover:bg-[#7C3AED]">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
