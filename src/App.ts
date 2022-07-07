import { useState, useEffect } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

function App() {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilterMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField),
    );
    setFilterMonsters(newFilterMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder="Search monsters" onChangeHandler={onSearchChange} />
      <CardList monsters={filterMonsters} />
    </div>
  );
}

export default App;
