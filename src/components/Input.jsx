function Input({label, id, ...prop}) {
    return(
        <div>
            {label && (
                <label 
                htmlFor={id}
                className="mb-2 block text-sm text-zinc-500"
                >
                            {label}</label>
            )}
            <input
                id={id}
                {...prop}
                className="
                h-14
                w-full
                rounded-xl
                border
                border-zinc-300
                px-4
                text-zinc-900
                outline-none
                focus:border-zinc-500
                "
                />
        </div>
    )
}

export default Input