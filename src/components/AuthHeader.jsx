import React, { useState, useEffect, useRef } from 'react';
import { User, LogIn, LogOut, Settings } from 'lucide-react';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './AuthHeader.css';

export default function AuthHeader() {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Admin emails list
  const adminEmails = ['rjtiksrm@gmail.com', 'rajtilakchamlagain@gmail.com']; 

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      unsubscribe();
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setDropdownOpen(false);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setDropdownOpen(false);
      navigate('/'); // Redirect to home on logout
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const isAdmin = user && adminEmails.includes(user.email);

  return (
    <div className="auth-header-container" ref={dropdownRef}>
      <button 
        className="auth-profile-trigger" 
        onClick={() => setDropdownOpen(!dropdownOpen)}
        title={user ? user.displayName : "Guest Account"}
      >
        {user ? (
          <img src={user.photoURL} alt="Profile" className="auth-profile-pic" referrerPolicy="no-referrer" />
        ) : (
          <div className="auth-guest-avatar">
            <User size={20} />
          </div>
        )}
      </button>

      {dropdownOpen && (
        <div className="auth-dropdown-menu">
          <div className="auth-dropdown-header">
            {user ? (
              <>
                <strong>{user.displayName}</strong>
                <span>{user.email}</span>
              </>
            ) : (
              <>
                <strong>Guest User</strong>
                <span>Not signed in</span>
              </>
            )}
          </div>

          <div className="auth-dropdown-body">
            {user ? (
              <>
                <button className="auth-dropdown-item" onClick={() => {
                  navigate('/profile');
                  setDropdownOpen(false);
                }}>
                  <User size={16} />
                  <span>My Profile</span>
                </button>
                {isAdmin && (
                  <button className="auth-dropdown-item admin-link" onClick={() => {
                    navigate('/admin/dashboard');
                    setDropdownOpen(false);
                  }}>
                    <Settings size={16} />
                    <span>Admin Dashboard</span>
                  </button>
                )}
                <button className="auth-dropdown-item logout-link" onClick={handleSignOut}>
                  <LogOut size={16} />
                  <span>Sign Out</span>
                </button>
              </>
            ) : (
              <button className="auth-dropdown-item google-login-btn" onClick={handleGoogleSignIn}>
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="G" className="google-icon" />
                <span>Sign in with Google</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
