import styles from './App.module.scss';

import NavBar from './components/NavBar';
import recipes from './data/recipes.js';
import List from './components/List';
import SearchBar from './components/SearchBar'

const App = () => {

  return (
    <>
      <NavBar />

      <div>
        <List recipes={recipes} alternateCard={true} />
      </div>
    </>
  );
}

export default App;
