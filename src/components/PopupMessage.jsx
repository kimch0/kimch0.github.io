import "./PopupMessage.css"

function PopupMessage({ message }) {

    return (
        <div className="message">
            <h3>{message}</h3>
        </div>
    )
}

export default PopupMessage