import { UserProps } from "../../types/user"

import { MdLocationPin } from "react-icons/md";

import { Link } from "react-router-dom";

import styles from './User.module.css';

const User = ({ 
    login,
    avatar_url,
    followers,
    following,
    location,
}: UserProps) => {
  return (
    <div className={styles.user_main}>
        <img src={avatar_url} alt={login} />
        <h2>{login}</h2> 
        {location && (
            <p className={styles.location_main}>
                <MdLocationPin />
                <span>{location}</span>
            </p>
        )}
        <div className={styles.location_stats}>
            <div>
                <p>Seguidores:</p>
                <p className={styles.numbers}>
                    {followers}
                </p>
            </div>
            <div>
                <p>Seguindo:</p>
                <p className={styles.numbers}>
                    {following}
                </p>
            </div>
        </div>
        <Link to={`/repositories/${login}`}>Ver melhores projetos</Link>
    </div>
  )
}

export default User