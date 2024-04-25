import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import BackButton from '../../components/buttons/backbutton/BackButton';

import styles from './Repositories.module.css';

const Repositories = () => {
  const  { username } = useParams();

  return <div>
    <BackButton />
    Repositórios de {username}
  </div>
}

export default Repositories