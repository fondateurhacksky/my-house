import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl text-red-600 mb-4">Erreur 404</h1>
        <p className="text-lg text-gray-700 mb-4">La page que vous recherchez est introuvable.</p>
        <Link href="/" className="text-blue-600 hover:underline">
          Retour à la page d'accueil
        </Link>
      </div>
    </div>
  );
};

