'use client';

import { useState } from 'react';
import type { Todo, Priority } from './TodoApp';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

const priorityConfig: Record<Priority, { color: string; bg: string; label: string }> = {
  low: { color: '#16a34a', bg: '#dcfce7', label: 'Low' },
  medium: { color: '#d97706', bg: '#fef3c7', label: 'Medium' },
  high: { color: '#dc2626', bg: '#fee2e2', label: 'High' }
};

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [hovered, setHovered] = useState(false);

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editText.trim()) return;
    onEdit(todo.id, editText);
    setEditing(false);
  };

  const handleEditCancel = () => {
    setEditText(todo.text);
    setEditing(false);
  };

  const priority = priorityConfig[todo.priority];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '14px 16px',
        background: hovered ? '#f8fafc' : '#fff',
        border: '2px solid',
        borderColor: todo.completed ? '#e2e8f0' : priority.bg,
        borderRadius: '12px',
        transition: 'all 0.2s ease',
        opacity: todo.completed ? 0.7 : 1
      }}
    >
      <button
        onClick={() => onToggle(todo.id)}
        style={{
          width: '24px',
          height: '24px',
          minWidth: '24px',
          borderRadius: '50%',
          border: todo.completed ? 'none' : '2px solid #cbd5e1',
          background: todo.completed ? 'linear-gradient(135deg, #6366f1, #4f46e5)' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          fontSize: '0.8rem',
          color: '#fff',
          flexShrink: 0
        }}
      >
        {todo.completed ? '✓' : ''}
      </button>

      <div style={{ flex: 1, minWidth: 0 }}>
        {editing ? (
          <form onSubmit={handleEditSubmit} style={{ display: 'flex', gap: '8px' }}>
            <input
              autoFocus
              value={editText}
              onChange={e => setEditText(e.target.value)}
              style={{
                flex: 1,
                border: '2px solid #6366f1',
                borderRadius: '8px',
                padding: '4px 10px',
                fontSize: '0.95rem',
                outline: 'none',
                color: '#1e293b'
              }}
            />
            <button
              type="submit"
              style={{
                background: '#6366f1',
                color: '#fff',
                borderRadius: '8px',
                padding: '4px 12px',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleEditCancel}
              style={{
                background: '#e2e8f0',
                color: '#64748b',
                borderRadius: '8px',
                padding: '4px 12px',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}
            >
              Cancel
            </button>
          </form>
        ) : (
          <div>
            <span style={{
              fontSize: '0.95rem',
              color: todo.completed ? '#94a3b8' : '#1e293b',
              textDecoration: todo.completed ? 'line-through' : 'none',
              fontWeight: '500',
              wordBreak: 'break-word'
            }}>
              {todo.text}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
              <span style={{
                display: 'inline-block',
                background: priority.bg,
                color: priority.color,
                borderRadius: '6px',
                padding: '2px 8px',
                fontSize: '0.72rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {priority.label}
              </span>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                {new Date(todo.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        )}
      </div>

      {!editing && (
        <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
          <button
            onClick={() => { setEditing(true); setEditText(todo.text); }}
            title="Edit"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: '#f0f4ff',
              color: '#6366f1',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              border: '1px solid #e0e7ff'
            }}
          >
            ✏️
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            title="Delete"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: '#fff1f2',
              color: '#ef4444',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              border: '1px solid #fee2e2'
            }}
          >
            🗑️
          </button>
        </div>
      )}
    </div>
  );
}
