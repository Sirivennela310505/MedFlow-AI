import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth, UserRole } from '@/contexts/AuthContext';
import { MedFlowLogo } from '@/components/MedFlowLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Stethoscope, ShieldCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const roles: { value: UserRole; label: string; icon: React.ReactNode; desc: string }[] = [
  {
    value: 'patient',
    label: 'Patient',
    icon: <User className="h-5 w-5" />,
    desc: 'Check symptoms & book appointments',
  },
  {
    value: 'doctor',
    label: 'Doctor',
    icon: <Stethoscope className="h-5 w-5" />,
    desc: 'Manage patients & cases',
  },
  {
    value: 'admin',
    label: 'Admin',
    icon: <ShieldCheck className="h-5 w-5" />,
    desc: 'Hospital management & analytics',
  },
];

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole>('patient');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const { login, signup, user, loading, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const redirectByRole = (role: UserRole) => {
    if (role === 'patient') {
      navigate('/patient', { replace: true });
    } else if (role === 'doctor') {
      navigate('/doctor', { replace: true });
    } else if (role === 'admin') {
      navigate('/admin', { replace: true });
    }
  };

  useEffect(() => {
    if (!loading && isAuthenticated && user?.role) {
      redirectByRole(user.role);
    }
  }, [loading, isAuthenticated, user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      if (isSignUp) {
        if (selectedRole !== 'patient') {
          toast({
            title: 'Doctor/Admin signup disabled',
            description: 'For demo, use existing Doctor/Admin accounts and sign in.',
            variant: 'destructive',
          });
          return;
        }

        const result = await signup(email, password, fullName, selectedRole);

        if (result?.error) {
          toast({
            title: 'Sign up failed',
            description: result.error,
            variant: 'destructive',
          });
        } else {
          toast({
            title: 'Patient account created',
            description: 'Now sign in with your new patient account.',
          });
          setIsSignUp(false);
          setFullName('');
          setPassword('');
        }
      } else {
        const result = await login(email, password);

        if (result?.error) {
          toast({
            title: 'Login failed',
            description: result.error,
            variant: 'destructive',
          });
        } else {
          toast({
            title: 'Login successful',
            description: 'Redirecting to your dashboard...',
          });

          setTimeout(() => {
            if (user?.role) {
              redirectByRole(user.role);
            } else {
              redirectByRole(selectedRole);
            }
          }, 1000);
        }
      }
    } catch (err) {
      toast({
        title: 'Something went wrong',
        description: err instanceof Error ? err.message : 'Unexpected error',
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex justify-center mb-4">
            <MedFlowLogo size="lg" />
          </Link>
          <p className="text-muted-foreground">
            {isSignUp ? 'Create your account' : 'Sign in to access your dashboard'}
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-elevated p-8 border border-border/50">
          <div className="grid grid-cols-3 gap-2 mb-6">
            {roles.map((r) => (
              <button
                key={r.value}
                type="button"
                onClick={() => setSelectedRole(r.value)}
                className={`flex flex-col items-center gap-1.5 p-3 rounded-xl text-xs font-medium transition-all ${
                  selectedRole === r.value
                    ? 'bg-primary text-primary-foreground shadow-card'
                    : 'bg-secondary text-secondary-foreground hover:bg-accent'
                }`}
              >
                {r.icon}
                {r.label}
              </button>
            ))}
          </div>

          <p className="text-xs text-center text-muted-foreground mb-6">
            {roles.find((r) => r.value === selectedRole)?.desc}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="mt-1"
                  required
                />
              </div>
            )}

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1"
                required
                minLength={6}
              />
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={submitting || loading}>
              {submitting || loading
                ? 'Please wait...'
                : isSignUp
                ? 'Create Account'
                : 'Sign In'}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-sm text-primary hover:underline"
            >
              {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
            </button>
          </div>

          {isSignUp && selectedRole !== 'patient' && (
            <p className="mt-4 text-xs text-center text-red-500">
              Doctor/Admin signup is disabled. Use existing accounts with Sign In.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}