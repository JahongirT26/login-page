import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useLogin } from "../hooks/useAuth"
import { LoaderCircle } from "lucide-react"
import Input from "../components/input"

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {
        error,
        loading,
        login,
    } = useLogin()

    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault()

        if (!email.trim() || !password.trim()) {
            return
        }

        const success = await login(email, password)

        if (success) {
            navigate('/profile')
        }
    }

    return (
        <section className="w-full max-w-md">
            <form 
                onSubmit={handleLogin}
                className="
                rounded-2xl
                bg-white
                p-10"
            >
                {error && (
                <p className="mt-4 rounded-lg bg-red-500/10 p-3 text-sm text-red-400">
                    {error}
                </p>
                )}
                <h1 
                      className="
                        mb-8
                        text-center
                        text-3xl
                        font-semibold
                        text-zinc-900
                        "
                >
                    Вход в аккаунт
                </h1>
                <div>
                    <Input
                        id="email"
                        label="Электронная почта"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        required
                    />
                </div>
                <div className="mt-5">
                    <Input
                    id="password"
                    label="Пароль"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="*******"
                    required                                      
                    />
                </div>
                <button
                    type="button"
                    className="
                        mb-6
                        text-sm
                        text-zinc-500
                    "
                >
                    Не помню пароль
                </button>                
                <button 
                    type="submit"
                    disabled={loading || !email.trim() || !password.trim()}
                    className="
                        flex
                        items-center
                        justify-center
                        h-14
                        w-full
                        rounded-xl
                        bg-zinc-700
                        font-medium
                        text-white
                        transition
                        hover:bg-zinc-800
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                        "
                >
                    {loading && (
                        <LoaderCircle className="h-4 w-4 animate-spin text-center" />
                    )}
                        {loading ? 'Входим...' : 'Вход'}
                </button>
                <div className="my-8 flex items-center gap-4">
                    <div className="h-px flex-1 bg-zinc-300" />
                    <span className="text-sm text-zinc-500">
                        Аккаунта еще нет
                    </span>
                    <div className="h-px flex-1 bg-zinc-300" />
                </div>
                <Link
                    to="/register"
                    className="
                        flex h-14 w-full items-center justify-center
                        rounded-xl
                        border border-zinc-500
                        font-medium
                        text-zinc-900
                        transition
                        hover:bg-zinc-100
                    "
                >
                    Зарегистрироваться
                </Link>
            </form>
            <p className="mt-6 text-center text-xs text-zinc-500">
                Продолжая, вы соглашаетесь с нашими{" "}
                <Link to="/terms" className="underline">
                Условиями использования
                </Link>{" "}
                и{" "}
                <Link to="/privacy" className="underline">
                Политикой конфиденциальности
                </Link>
                .
            </p>
        </section>
    )
}

export default LoginPage
