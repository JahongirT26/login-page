import { useState } from "react";
import { loginUser } from "../services/authApi";

export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); 

    const login = async(email, password) => {
        setError(null)
        setLoading(true)
        try {
            const data = await loginUser(email, password)
            return data
        } catch(error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    return ({
        login,
        loading,
        error
    })
}