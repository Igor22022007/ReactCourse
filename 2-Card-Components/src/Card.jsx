import profilePic from './assets/profile.png'

function Card(){
    return(
        <div className="card">
            {/* Wprowadzenie zdjęcia profilowego z folderu assets */}
            <img className="cardImage" src={profilePic} alt="profile picture" /> 
            <h2 className="cardTitle">IroXCode</h2>
            <p className="cardText">I'm learning to program games in 2026</p>
        </div>
    );
}

export default Card;