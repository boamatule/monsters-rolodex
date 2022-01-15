import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }
  
  handleChange = (e) => {
    this.setState({ searchField: e.target.vlaue });
  }
  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder="Search monsters"
          handleChange={e => this.setState({ searchField: e.target.value})}
      />
        <CardList monsters={filterMonsters}/>
      </div>
    );
  }
}

export default App;
