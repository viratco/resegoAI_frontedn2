import { useLocation, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";

const SignUpConfirmation = () => {
  const location = useLocation();
  const { email, message } = location.state || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F1F0FB] via-white to-[#E5DEFF]">
      <div className="absolute inset-0 opacity-10 bg-grid-pattern" />
      <div className="w-full max-w-md p-8 mx-4">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-[#E5DEFF] text-center relative overflow-hidden">
          {/* Success indicator */}
          <div className="absolute top-0 left-0 right-0 bg-[#8B5CF6]/10 py-2 text-[#8B5CF6] text-sm font-medium flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Registration Successful
          </div>

          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 mt-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          
          <h1 className="text-2xl font-bold mb-4 text-gray-900">Verify Your Email</h1>
          <p className="text-gray-600 mb-4">
            We've sent a verification link to:
          </p>
          <div className="bg-primary/5 py-3 px-4 rounded-lg mb-6">
            <span className="font-medium text-primary">{email}</span>
          </div>

          <div className="space-y-6 mb-8">
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Next steps:</h3>
              <ol className="text-sm text-gray-600 space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <span className="font-medium text-primary">1.</span>
                  Check your email inbox (and spam folder)
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium text-primary">2.</span>
                  Click the verification link in the email
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium text-primary">3.</span>
                  Sign in to access your account
                </li>
              </ol>
            </div>
            <p className="text-sm text-gray-500">
              {message || "Didn't receive the email? Check your spam folder or contact support."}
            </p>
          </div>
          
          <div className="space-y-4">
            <Link to="/signin">
              <Button className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white">
                <span>Continue to Sign In</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <p className="text-sm text-gray-500">
              Need help? <a href="#" className="text-primary hover:underline">Contact Support</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpConfirmation; 