interface Props {
    message: string;
    type: string;
}

export function Alert({message, type}: Props) {

    const typeAlert = `alert alert-${type}`

    return (
        <div className={typeAlert} role="alert">
            {message}
        </div>
    )
}