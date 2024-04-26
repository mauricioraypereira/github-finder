import { RepositoriesProps } from "../../types/repositories";

import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { RiGitRepositoryLine } from "react-icons/ri";

const Repository = ({ 
    name,
    language,
    html_url,
    forks_count,
    stargazers_count,
}: RepositoriesProps) => {
  return (
    <div>
        <h3>{name}</h3>
        <p>
            <BsCodeSlash />
            {language}
        </p>
        <div>
            <div>
                <AiOutlineStar />
                <span>{stargazers_count}</span>
            </div>
            <div>
                <AiOutlineFork />
                <span>{forks_count}</span>
            </div>
        </div>
        <a href={html_url} target="_blank">
            <span>Ver código</span>
            <RiGitRepositoryLine />
        </a>
    </div>
  )
}

export default Repository
