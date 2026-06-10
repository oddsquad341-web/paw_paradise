import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4" style={{ background: '#f4f1e5' }}>
      <img src="/assets/icons/green-paw.png" alt="" className="w-20 mb-6 opacity-30" />
      <h1 className="display-lg mb-3" style={{ color: '#1a1f3c' }}>Page not found</h1>
      <p className="body-lg mb-8" style={{ color: '#666' }}>This page has run off to play. Let's go somewhere we know.</p>
      <Link href="/" className="btn-primary">Back to home</Link>
    </div>
  );
}
