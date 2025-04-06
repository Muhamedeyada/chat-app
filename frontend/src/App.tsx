import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import SettingsPage from "./pages/SettingsPage"
import ProfilePage from "./pages/ProfilePage"
import { useAuthStore } from "./store/useAuthStore"
import { useEffect } from "react"
import { Loader2 } from "lucide-react"
import { User } from "./types/authTypes"

const App =()=>{
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore() as {
    authUser: User | null;
    checkAuth: () => Promise<void>;
    isCheckingAuth: boolean;
  };
    useEffect(()=>{
    checkAuth()
  },[checkAuth])
  console.log({authUser})
  if(isCheckingAuth &&!authUser){
    return <Loader2 className="animate-spin" >Loading...</Loader2>
  }
  return (
    <div >
    <Navbar/>
     <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  )
}
export default App