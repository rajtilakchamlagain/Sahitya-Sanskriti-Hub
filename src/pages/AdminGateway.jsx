import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import TrollPage from './TrollPage';

export default function AdminGateway() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  // List of authorized admin emails
  const adminEmails = ['rjtiksrm@gmail.com', 'rajtilakchamlagain@gmail.com']; 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      
      // If they are an admin, let them into the dashboard immediately
      if (currentUser && adminEmails.includes(currentUser.email)) {
        navigate('/admin/dashboard');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  if (loading) return <div style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Checking access...</div>;

  // If they are not logged in, prompt them to log in
  if (!user) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', backgroundColor: '#fafafa' }}>
        <h2 style={{ color: '#333' }}>Admin Authentication Required</h2>
        <p style={{ color: '#666' }}>Please sign in to access the admin dashboard.</p>
        <button 
          onClick={() => signInWithPopup(auth, googleProvider)}
          style={{ 
            display: 'flex', alignItems: 'center', gap: '10px', 
            padding: '12px 24px', backgroundColor: '#fff', color: '#444', 
            border: '1px solid #ddd', borderRadius: '8px', cursor: 'pointer', 
            fontWeight: '600', fontSize: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
          }}
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="G" style={{ width: '20px' }} />
          Sign in with Google
        </button>
      </div>
    );
  }

  // If we reach here, they are logged in as a normal user (not in adminEmails).
  // Hit them with the Troll Page!
  return <TrollPage />;
}
