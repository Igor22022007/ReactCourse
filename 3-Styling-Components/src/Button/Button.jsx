import styles from './Button.module.css' // Tworzymy moduł styles do konkretnego elementu

function Button (){
    return(
        <button className={styles.button}>Moduł</button> //Wywołanie modułu
    );
}

export default Button