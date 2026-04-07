'use client';

interface TodoStatsProps {
  total: number;
  active: number;
  completed: number;
}

export default function TodoStats({ total, active, completed }: TodoStatsProps) {
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '12px',
      padding: '20px 24px'
    }}>
      <StatCard label="Total" value={total} color="#6366f1" bg="#eef2ff" emoji="📋" />
      <StatCard label="Active" value={active} color="#f59e0b" bg="#fffbeb" emoji="⚡" />
      <StatCard label="Done" value={`${completed} (${completionRate}%)`} color="#22c55e" bg="#f0fdf4" emoji="✅" />
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: string | number;
  color: string;
  bg: string;
  emoji: string;
}

function StatCard({ label, value, color, bg, emoji }: StatCardProps) {
  return (
    <div style={{
      background: bg,
      borderRadius: '12px',
      padding: '14px',
      textAlign: 'center',
      border: `1px solid ${color}22`
    }}>
      <div style={{ fontSize: '1.4rem', marginBottom: '4px' }}>{emoji}</div>
      <div style={{ fontSize: '1.1rem', fontWeight: '800', color }}>{value}</div>
      <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</div>
    </div>
  );
}
