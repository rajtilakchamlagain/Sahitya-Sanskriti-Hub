import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
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

  // If we reach here, they are either NOT logged in, or logged in as a normal user.
  // Hit them with the Troll Page!
  return <TrollPage />;
}
