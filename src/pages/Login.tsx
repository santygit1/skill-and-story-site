
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the redirect path from query parameters (if any)
  const queryParams = new URLSearchParams(location.search);
  const redirectPath = queryParams.get('redirect') || '/';
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">
              {isLogin ? 'Welcome Back' : 'Create an Account'}
            </h1>
            
            {isLogin ? (
              <LoginForm onRegisterClick={toggleForm} redirectPath={redirectPath} />
            ) : (
              <RegisterForm onLoginClick={toggleForm} redirectPath={redirectPath} />
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
