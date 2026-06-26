import { Route, Routes } from "react-router-dom"
import AuthLayout from "../layouts/AuthLayout"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"

function AppRoutes() {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes