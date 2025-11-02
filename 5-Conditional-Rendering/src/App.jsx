// conditional rendering = pozwala kontrolować co jest renderowane
//                     w Twojej aplikacji w zależności od warunków
//                    (pokazać, ukryć lub zmienić komponenty)

import UserGreeting from "./UserGreeting.jsx"

function App() {


  return (
    <>
    {/* Wartość boolean jest przypisywana do warunku w komponencie UserGreeting */}
      <UserGreeting isLoggedIn={true} username="IroXCode" />
      <UserGreeting isLoggedIn={false} username="IroXCode" />
      <UserGreeting isLoggedIn={true}/>
      {/* W ostatniej bedzie guest */}
    </>
  )
}

export default App
