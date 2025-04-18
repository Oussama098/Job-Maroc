export default function SignupRecruteur() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Inscription Recruteur</h2>
          <input type="text" placeholder="Nom de l'entreprise" className="w-full p-2 mb-4 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
          <input type="password" placeholder="Mot de passe" className="w-full p-2 mb-4 border rounded" />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">S’inscrire</button>
        </form>
      </div>
    );
  }
  