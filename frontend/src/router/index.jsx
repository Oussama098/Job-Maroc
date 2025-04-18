import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/authentication/Login";
import LandingPage from "../pages/LandingPage";
import SignupChoice from "../pages/authentication/SignupChoice"
import SignupRecruteur from "../pages/authentication/SignupRecruteur"
import SignupEtudiant from "../pages/authentication/SignupTalent"
export const router = createBrowserRouter([
    {
        path:'/',
        element:<LandingPage/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/signup/choice',
        element:<SignupChoice/>
    },
    {
        path:'/signup/etudiant',
        element:<SignupEtudiant/>
    },
    {
        path:'/signup/recruteur',
        element:<SignupRecruteur/>
    }
])