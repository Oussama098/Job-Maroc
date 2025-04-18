import { useState } from 'react';
import {
  ChevronsLeft,
  ChevronsRight,
  ArrowLeft,
  User,
  Mail,
  Lock,
  School,
  GraduationCap,
  Calendar,
  MapPin,
  IdCard
} from 'lucide-react';

export default function SignupTalent() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));



  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <StepTitle title="Informations personnelles" />
            <div className="grid grid-cols-2 gap-6">
              <InputWithIcon label="Prénom" name="prenom" icon={<User />}  />
              <InputWithIcon label="Nom" name="nom" icon={<User />}  />
              <InputWithIcon label="Email" name="email" type="email" icon={<Mail />}  />
              <InputWithIcon label="Date de naissance" name="dateNaissance" type="date" icon={<Calendar />}  />
              <InputWithIcon label="Ville de naissance" name="villeNaissance" icon={<MapPin />}  />
              <InputWithIcon label="Carte d'identité" name="carteIdentite" icon={<IdCard />}  />
              <InputWithIcon label="N° Apogée" name="apogee" icon={<User />}  />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <StepTitle title="Informations universitaires" />
            <div className="grid grid-cols-2 gap-6">
              <InputWithIcon label="École / Université" name="ecole" icon={<School />}  />
              <InputWithIcon label="Spécialité" name="specialite" icon={<GraduationCap />}  />
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Niveau d'études</label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                  <select
                    name="niveau"
                    
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Sélectionnez un niveau</option>
                    <option value="licence">Licence</option>
                    <option value="master">Master</option>
                    <option value="doctorat">Doctorat</option>
                  </select>
                </div>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Joindre l'attestation</label>
                <input
                  type="file"
                  name="attestation"
                  accept=".pdf,.jpg,.jpeg,.png"
                  
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-green-600 file:text-white hover:file:bg-green-700 transition"
                />
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <StepTitle title="Sécurisation du compte" />
            <div className="grid grid-cols-2 gap-6">
              <InputWithIcon label="Mot de passe" name="motDePasse" type="password" icon={<Lock />}  />
              <InputWithIcon label="Confirmation du mot de passe" name="confirmationMotDePasse" type="password" icon={<Lock />}  />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 font-sans">
      <div className="bg-white w-full max-w-5xl p-10 rounded-xl shadow-xl transition-all duration-300 ease-in-out">
        <div className="mb-6 flex justify-between items-center">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex items-center text-gray-600 hover:text-green-600 transition"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Retour</span>
          </button>
          <div className="flex items-center">
            <div className="flex space-x-2">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className={`w-3 h-3 rounded-full ${step >= num ? 'bg-green-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <span className="ml-3 text-green-600 font-bold">Étape {step} sur 3</span>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Formulaire d'inscription talent
        </h2>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-10">{renderStep()}</div>

          <div className="flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium transition"
              >
                <ChevronsLeft className="inline-block mr-1" />
                Précédent
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="ml-auto px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition"
              >
                Suivant
                <ChevronsRight className="inline-block ml-1" />
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition"
              >
                S'inscrire
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

function StepTitle({ title }) {
  return <h3 className="text-xl font-semibold mb-6 text-gray-700">{title}</h3>;
}

function InputWithIcon({ label, name, type = 'text', icon, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <div className="absolute left-3 top-3.5 text-gray-400">{icon}</div>
        <input
          type={type}
          name={name}
          onChange={onChange}
          placeholder={label}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
    </div>
  );
}
