import { Outlet } from 'react-router-dom';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <h1>GitHub Finder</h1>
      <Outlet />
    </div>
  )
}

export default App;
