import { useNavigate } from "react-router-dom"

import styles from './BackButton.module.css';

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <>
            <button 
                className={styles.back_button}
                onClick={() => navigate(-1)}>
                    Voltar
            </button>
        </>
    )
}

export default BackButton;