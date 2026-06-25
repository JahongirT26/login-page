import { Outlet } from "react-router-dom"

function AuthLayout() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <main className="flex flex-1 items-center justify-center px-4">
                <Outlet/>
            </main>
            <footer className="py-6 text-center text-sm text-slate-500">
                    © 2026 Jahongir. Все права защищены.
            </footer>
        </div>
    )
}

export default AuthLayout