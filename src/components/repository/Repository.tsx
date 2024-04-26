import { RepositoriesProps } from "../../types/repositories";

import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { RiGitRepositoryLine } from "react-icons/ri";

import styles from "./Repository.module.css";

const Repository = ({ 
    name,
    language,
    html_url,
    forks_count,
    stargazers_count,
}: RepositoriesProps) => {
  return (
    <div className={styles.repository_container}>
        <h3>{name}</h3>
        <p className={styles.language_container}>
            <BsCodeSlash />
            <span>{language}</span>
        </p>
        <div className={styles.stats_container}>
            <div>
                <AiOutlineStar />
                <span>{stargazers_count}</span>
            </div>
            <div>
                <AiOutlineFork />
                <span>{forks_count}</span>
            </div>
        </div>
        <a 
            href={html_url}
            target="_blank"
            className={styles.repository_button}>
            <span>Ver código</span>
            <RiGitRepositoryLine />
        </a>
    </div>
  )
}

export default Repository
