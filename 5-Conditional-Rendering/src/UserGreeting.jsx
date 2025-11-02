
function UserGreeting (props){

    //1 Sposób zwykły if
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please log in to continue</h2>
    // }

    //2 Sposób ternary operator

    // return(props.isLoggedIn ? <h2 className="welcome-message">Hi {props.username}!</h2> : <h2 className="login-prompt">Please log in to continue</h2>)

    // Lub można zadeklarować w zmiennej

    // Podstawowe propsy
    const {
        isLoggedIn = false,
        username = "Guest",
    } = props

    const welcomeMessage =  <h2 className="welcome-message">
                            Hi {username}!
                            </h2>;

    const loginPrompt =     <h2 className="login-prompt">
                            Please log in to continue
                            </h2>;

    return(isLoggedIn ? welcomeMessage : loginPrompt)
}

export default UserGreeting