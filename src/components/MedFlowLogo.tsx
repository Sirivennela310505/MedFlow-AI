import { Activity, Plus, Zap } from 'lucide-react';

export function MedFlowLogo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = { sm: 'h-8', md: 'h-10', lg: 'h-14' };
  const textSizes = { sm: 'text-lg', md: 'text-xl', lg: 'text-3xl' };

  return (
    <div className="flex items-center gap-2">
      <div className={`relative ${sizes[size]} aspect-square`}>
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoGrad" x1="0" y1="0" x2="48" y2="48">
              <stop offset="0%" stopColor="hsl(207, 90%, 54%)" />
              <stop offset="100%" stopColor="hsl(207, 90%, 42%)" />
            </linearGradient>
          </defs>
          <circle cx="24" cy="24" r="23" fill="url(#logoGrad)" />
          {/* Medical cross */}
          <rect x="20" y="12" width="8" height="24" rx="2" fill="white" />
          <rect x="12" y="20" width="24" height="8" rx="2" fill="white" />
          {/* AI circuit dots */}
          <circle cx="10" cy="10" r="2" fill="white" opacity="0.6" />
          <circle cx="38" cy="10" r="2" fill="white" opacity="0.6" />
          <circle cx="10" cy="38" r="2" fill="white" opacity="0.6" />
          <circle cx="38" cy="38" r="2" fill="white" opacity="0.6" />
          {/* Circuit lines */}
          <line x1="12" y1="10" x2="20" y2="18" stroke="white" strokeWidth="1" opacity="0.4" />
          <line x1="36" y1="10" x2="28" y2="18" stroke="white" strokeWidth="1" opacity="0.4" />
          <line x1="12" y1="38" x2="20" y2="30" stroke="white" strokeWidth="1" opacity="0.4" />
          <line x1="36" y1="38" x2="28" y2="30" stroke="white" strokeWidth="1" opacity="0.4" />
        </svg>
      </div>
      <div>
        <h1 className={`${textSizes[size]} font-bold text-foreground tracking-tight leading-none`}>
          MedFlow <span className="text-primary">AI</span>
        </h1>
      </div>
    </div>
  );
}
