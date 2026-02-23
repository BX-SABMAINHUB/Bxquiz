import { useRouter } from 'next/navigation'; // ← CORREGIDO
import { auth } from '../firebase';

export default function Dashboard() {
  const router = useRouter();

  if (!auth.currentUser) {
    router.replace('/');
    return null;
  }

  return (
    <div style={{ padding: '100px', textAlign: 'center' }}>
      <h1>Bienvenido a BxQuiz, {auth.currentUser.email}</h1>
      <button
        onClick={() => router.push('/create-quiz')}
        style={{ padding: '20px 60px', fontSize: '1.5rem', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '12px' }}
      >
        Crear Quiz
      </button>
    </div>
  );
}
