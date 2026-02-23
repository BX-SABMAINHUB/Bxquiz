import { useRouter } from 'next/navigation'; // ← CORREGIDO
import { auth } from '../firebase';

export default function Dashboard() {
  const router = useRouter();

  if (!auth.currentUser) {
    router.replace('/');
    return null;
  }

  return (
    <div style={{ padding: '100px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ marginBottom: '40px' }}>Bienvenido a BxQuiz</h1>
      <p style={{ fontSize: '1.3rem', marginBottom: '30px' }}>
        {auth.currentUser.email}
      </p>
      <button
        onClick={() => router.push('/create-quiz')}
        style={{
          padding: '16px 60px',
          fontSize: '1.4rem',
          background: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}
      >
        Crear Quiz
      </button>
    </div>
  );
}
