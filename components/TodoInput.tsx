'use client';

import { useState } from 'react';
import type { Priority } from './TodoApp';

interface TodoInputProps {
  onAdd: (text: string, priority: Priority) => void;
}

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text, priority);
    setText('');
  };

  const priorityColors: Record<Priority, string> = {
    low: '#22c55e',
    medium: '#f59e0b',
    high: '#ef4444'
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        background: focused ? '#f0f4ff' : '#f8fafc',
        border: focused ? '2px solid #6366f1' : '2px solid #e2e8f0',
        borderRadius: '12px',
        padding: '8px 8px 8px 16px',
        transition: 'all 0.2s ease'
      }}>
        <span style={{ fontSize: '1.2rem' }}>📝</span>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Add a new todo..."
          style={{
            flex: 1,
            border: 'none',
            background: 'transparent',
            outline: 'none',
            fontSize: '1rem',
            color: '#1e293b',
            padding: '4px 0'
          }}
        />
        <select
          value={priority}
          onChange={e => setPriority(e.target.value as Priority)}
          style={{
            border: `2px solid ${priorityColors[priority]}`,
            borderRadius: '8px',
            padding: '6px 10px',
            fontSize: '0.8rem',
            fontWeight: '600',
            color: priorityColors[priority],
            background: '#fff',
            outline: 'none',
            cursor: 'pointer'
          }}
        >
          <option value="low">🟢 Low</option>
          <option value="medium">🟡 Medium</option>
          <option value="high">🔴 High</option>
        </select>
        <button
          type="submit"
          disabled={!text.trim()}
          style={{
            background: text.trim() ? 'linear-gradient(135deg, #6366f1, #4f46e5)' : '#e2e8f0',
            color: text.trim() ? '#fff' : '#94a3b8',
            border: 'none',
            borderRadius: '10px',
            padding: '8px 18px',
            fontWeight: '700',
            fontSize: '0.9rem',
            cursor: text.trim() ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap'
          }}
        >
          + Add
        </button>
      </div>
    </form>
  );
}
