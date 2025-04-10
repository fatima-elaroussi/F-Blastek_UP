import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";
import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoSettings } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoLogOut } from "react-icons/io5";

function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // State variables
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Get auth token from localStorage
  const professional = localStorage.getItem("professional");
  const token: string | null = professional ? JSON.parse(professional)?.token : null;

  // Check login status and handle scroll effects
  useEffect(() => {
    const handleAuth = () => {
      setIsLoggedIn(!!token);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Handle clicks outside dropdown to close it
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    handleAuth();
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [token]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("professional");
    setIsLoggedIn(false);
    navigate("/login/applicant");
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      <nav 
        className={`transition-all duration-300 py-4 px-6 ${
          scrolled 
            ? "bg-white shadow-md" 
            : "bg-transparent backdrop-blur-sm bg-opacity-10"
        }`}
      >
        <div className="container flex items-center justify-between mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <span className={`text-2xl font-bold ${scrolled ? "text-[#20B486]" : "text-[#20B486]"}`}>
              F'Blastek
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <NavLink 
                className={({isActive}) => 
                  `text-lg font-medium transition-colors ${
                    scrolled 
                      ? isActive ? "text-[#20B486]" : "text-gray-700 hover:text-[#20B486]" 
                      : isActive ? "text-[#F98C60]" : "text-white hover:text-[#F98C60] drop-shadow-[0_1px_0px_rgba(0,0,0,0.8)]"
                  }`
                } 
                to="/" 
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                className={({isActive}) => 
                  `text-lg font-medium transition-colors ${
                    scrolled 
                      ? isActive ? "text-[#20B486]" : "text-gray-700 hover:text-[#20B486]" 
                      : isActive ? "text-[#F98C60]" : "text-white hover:text-[#F98C60] drop-shadow-[0_1px_0px_rgba(0,0,0,0.8)]"
                  }`
                } 
                to="/About" 
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                className={({isActive}) => 
                  `text-lg font-medium transition-colors ${
                    scrolled 
                      ? isActive ? "text-[#20B486]" : "text-gray-700 hover:text-[#20B486]" 
                      : isActive ? "text-[#F98C60]" : "text-white hover:text-[#F98C60] drop-shadow-[0_1px_0px_rgba(0,0,0,0.8)]"
                  }`
                } 
                to="/services" 
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink 
                className={({isActive}) => 
                  `text-lg font-medium transition-colors ${
                    scrolled 
                      ? isActive ? "text-[#20B486]" : "text-gray-700 hover:text-[#20B486]" 
                      : isActive ? "text-[#F98C60]" : "text-white hover:text-[#F98C60] drop-shadow-[0_1px_0px_rgba(0,0,0,0.8)]"
                  }`
                } 
                to="/help" 
              >
                Help
              </NavLink>
            </li>
          </ul>

          {/* User Authentication Controls */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  className="flex items-center justify-center w-10 h-10 text-white bg-gradient-to-r from-[#20B486] to-[#1A9A70] rounded-full focus:outline-none hover:shadow-lg transition-all duration-300"
                  onClick={toggleDropdown}
                  aria-label="User menu"
                >
                  <CgProfile size={20} />
                </button>
                
                {/* Dropdown menu with animation */}
                {isOpen && (
                  <div className="absolute right-0 z-10 w-56 mt-2 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 animate-fade-in-down">
                    <div className="px-4 py-3 bg-gradient-to-r from-[#20B486] to-[#1A9A70]">
                      <p className="text-sm font-medium text-white">User Menu</p>
                    </div>
                    <NavLink
                      to="/professional/dashboard/profile"
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={toggleDropdown}
                    >
                      <CgProfile className="mr-3 text-[#20B486]" size={18} /> Profile
                    </NavLink>
                    <NavLink
                      to="/settings"
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={toggleDropdown}
                    >
                      <IoSettings className="mr-3 text-[#20B486]" size={18} /> Settings
                    </NavLink>
                    <div className="border-t border-gray-100"></div>
                    <button
                      className="flex items-center w-full px-4 py-3 text-sm text-red-500 hover:bg-gray-50 transition-colors"
                      onClick={handleLogout}
                    >
                      <IoLogOut className="mr-3" size={18} /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <NavLink 
                  to="user/login"
                  className="px-5 py-2 text-sm font-medium text-white bg-[#20B486] hover:bg-[#19a075] rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  Sign In
                </NavLink>
                <NavLink 
                  to="register"
                  className="px-5 py-2 text-sm font-medium text-white bg-[#F98C60] hover:bg-[#f87a45] rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  Sign Up
                </NavLink>
              </div>
            )}

            {/* Mobile Menu Button - You'd need to implement the mobile menu functionality */}
            <button className="flex md:hidden items-center text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;