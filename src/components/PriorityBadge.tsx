import { cn } from '@/lib/utils';
import type { PriorityLevel } from '@/lib/triage';

interface PriorityBadgeProps {
  priority: PriorityLevel | string;
  size?: 'sm' | 'md';
}

const config: Record<string, { bg: string; text: string; emoji: string }> = {
  LOW: { bg: 'bg-priority-low', text: 'priority-low', emoji: '🟢' },
  MODERATE: { bg: 'bg-priority-moderate', text: 'priority-moderate', emoji: '🟡' },
  HIGH: { bg: 'bg-priority-high', text: 'priority-high', emoji: '🟠' },
  EMERGENCY: { bg: 'bg-priority-emergency', text: 'priority-emergency', emoji: '🔴' },
};

export function PriorityBadge({ priority, size = 'md' }: PriorityBadgeProps) {
  const c = config[priority] || config.LOW;
  return (
    <span className={cn(
      'inline-flex items-center gap-1 rounded-full font-semibold',
      c.bg, c.text,
      size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'
    )}>
      {c.emoji} {priority}
    </span>
  );
}
