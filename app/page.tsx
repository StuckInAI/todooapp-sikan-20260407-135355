import TodoApp from '../components/TodoApp';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '40px 16px' }}>
      <TodoApp />
    </main>
  );
}
