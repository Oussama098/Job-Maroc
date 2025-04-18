import { useState } from "react";
import { Globe, ChevronDown, Eye, EyeOff, Lock, Mail, ArrowLeft } from "lucide-react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const schema = yup.object({
  email: yup.string().email("Email invalide").required("Email requis"),
  password: yup.string().required("Mot de passe requis"),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const submit = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Logo */}
      <div className="w-full max-w-md mb-4">
        <button
          onClick={() => window.history.back()}
          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          <span className="text-sm font-medium">Retour</span>
        </button>
      </div>

      <div className="mb-6">
      <div className="flex items-center">
              <div className="bg-[blue] w-12 h-12 flex items-center justify-center rounded-sm">
                <span className="text-white text-3xl font-bold">J</span>
              </div>
              <div className="flex flex-col ml-2">
              <span className="text-black text-3xl font-extrabold leading-none mt-2 pl-[-3px]">Talent</span>
              <span className="text-sm text-gray-700 pl-10">JOB Maroc</span>
              </div>
            </div>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">Connectez-vous</h1>
          <p className="text-gray-500 mt-1 text-sm">Utilisez vos identifiants Job Maroc</p>
        </div>

        {/* Google Login */}
        <button className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-lg py-3 px-4 mb-6 hover:bg-gray-100 transition duration-200 shadow-sm">
          <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          <span className="font-medium text-sm">Se connecter avec Google</span>
        </button>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm text-gray-500 font-medium bg-white px-4">OU</div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(submit)} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                id="email"
                type="email"
                {...register("email")}
                placeholder="Adresse e-mail"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-invalid={!!errors.email}
              />
            </div>
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Mot de passe
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Mot de passe sécurisé"
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-invalid={!!errors.password}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                aria-label="Afficher/Masquer mot de passe"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-md"
          >
            Connexion
          </button>
        </form>

        {/* Bottom Links */}
        <div className="flex justify-between mt-6 text-sm text-gray-600">
          <span>
            Pas de compte ?{" "}
            <Link to="/signup/choice" className="text-blue-600 hover:text-blue-700 font-medium">
              S'inscrire
            </Link>
          </span>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            Mot de passe oublié ?
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 w-full max-w-md text-sm text-gray-500 flex justify-between items-center px-2">
        <span className="-ml-4">&copy; {new Date().getFullYear()} Job Maroc . Tous droits réservés.</span>
        <div className="flex items-center gap-4">
          <button className="flex items-center text-gray-700 hover:text-gray-900">
            <span className="w-3 h-3 bg-red-600 rounded-full mr-2"></span>
            Maroc <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          <div className="flex items-center">
            <Globe className="h-4 w-4 mr-1" />
            <span>Français</span>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
