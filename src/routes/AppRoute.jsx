import { Route, Routes } from "react-router-dom"
import AuthLayout from "../layouts/AuthLayout"
import LoginPage from "../pages/LoginPage"

function AppRoutes() {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<LoginPage />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes