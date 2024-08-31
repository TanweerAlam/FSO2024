const Notification = ({message}) => {
    if (message === null) {
        return null
    }
    console.log("In Notification, message is", message)

    return (
        <div className={message.type}>
            {message.message}
        </div>
    )
}

export default Notification
