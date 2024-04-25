import { RepositoriesProps } from '../../types/repositories';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import BackButton from '../../components/buttons/backbutton/BackButton';
import Loader from '../../components/loader/Loader';

import styles from './Repositories.module.css';

const Repositories = () => {
    const  { username } = useParams();

    const [repositories, setRepositories] = useState<RepositoriesProps[] | [] | null>(null);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const loadResponse = async function(username: string) {
            setIsLoading(true);
            
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            
            const dataResponse = await response.json();

            setIsLoading(false);
        };

        if (username) {
            loadResponse(username);
        }


        
    }, [])

    return <div>
        <BackButton />
        Repositórios de {username}
    </div>
}

export default Repositories