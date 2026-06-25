export const loginUser = async (username, password) => {
    const res = await fetch('https://dummyjson.com/auth/login',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    })

    if (!res.ok) {
        const error = await res.json()
        throw new Error((error.message) || "Не удалось войти")
    }
    return res.json()
}