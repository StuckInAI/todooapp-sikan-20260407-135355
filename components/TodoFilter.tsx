'use client';

import type { FilterType } from './TodoApp';

interface TodoFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  completedCount: number;
  onClearCompleted: () => void;
}

export default function TodoFilter({
  filter,
  onFilterChange,
  completedCount,
  onClearCompleted
}: TodoFilterProps) {
  const filters: FilterType[] = ['all', 'active', 'completed'];

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderTop: '1px solid #f1f5f9',
      borderBottom: '1px solid #f1f5f9',
      marginBottom: '8px',
      flexWrap: 'wrap',
      gap: '8px'
    }}>
      <div style={{ display: 'flex', gap: '4px' }}>
        {filters.map(f => (
          <button
            key={f}
            onClick={() => onFilterChange(f)}
            style={{
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: '600',
              background: filter === f ? 'linear-gradient(135deg, #6366f1, #4f46e5)' : 'transparent',
              color: filter === f ? '#fff' : '#64748b',
              border: filter === f ? 'none' : '1px solid #e2e8f0',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              textTransform: 'capitalize'
            }}
          >
            {f}
          </button>
        ))}
      </div>
      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          style={{
            padding: '6px 14px',
            borderRadius: '8px',
            fontSize: '0.85rem',
            fontWeight: '600',
            background: 'transparent',
            color: '#ef4444',
            border: '1px solid #fee2e2',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          Clear Completed ({completedCount})
        </button>
      )}
    </div>
  );
}
