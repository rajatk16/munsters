import React from 'react';
import './App.css';
import {CardList} from './components/CardList';
import { SearchBox } from './components/SearchBox';

class App extends React.Component {
  state = {
    monsters: [],
    searchField: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json()
      }).then(users => {
        this.setState({monsters: users})
      })
  } 

  handleChange = (event) => {
    this.setState({searchField: event.target.value})
  }
  
  render() {
    const {searchField, monsters} = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className="App">
        <h1>Munsters</h1>
        <SearchBox
          placeholder="Enter Monster Name"
          searchField={searchField}
          handleChange={this.handleChange}  
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
