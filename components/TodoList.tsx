'use client';

import TodoItem from './TodoItem';
import type { Todo } from './TodoApp';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

export default function TodoList({ todos, onToggle, onDelete, onEdit }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '48px 24px',
        color: '#94a3b8'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎉</div>
        <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#64748b' }}>No todos here!</p>
        <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>Add a new task to get started.</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
