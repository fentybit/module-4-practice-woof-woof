import React from 'react';
import './App.css';
import DogBar from './containers/DogBar'
import DogContainer from './containers/DogContainer'

class App extends React.Component {
  state = {
    dogs: [],
    dogClicked: false,
    filter: false
  }

  componentDidMount() {
    fetch('http://localhost:3000/pups')
      .then(resp => resp.json())
      .then(fetchedDogs => this.setState({ dogs: fetchedDogs }))
  }

  changeFilter = () => {
    this.setState({ filter: !this.state.filter })
  }

  selectedDog = (id) => {
    let foundDog = this.state.dogs.find(dog => dog.id === id)
    this.setState({ dogClicked: foundDog })
  }

  handleToggle = (id) => {
    fetch(`http://localhost:3000/pups/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        isGoodDog: !this.state.dogClicked.isGoodDog
      })
    })
      .then(resp => resp.json())
      .then(revisedDog => this.setState({ dogClicked: revisedDog }))
  }

  filteredDogs = () => {
    if (this.state.filter) {
      return this.state.dogs.filter(dog => dog.isGoodDog)
    } else {
      return this.state.dogs
    }
  }

  render() {
    return (
      <div className="App">
        <div id="filter-div">
          <button id="good-dog-filter" onClick={this.changeFilter}>Filter good dogs: {this.state.filter ? 'ON' : 'OFF'}</button>
        </div>

        <div id="dog-bar">
          <DogBar dogs={this.filteredDogs()} selectedDog={this.selectedDog} />
        </div>

        <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          <div id="dog-info">
            <DogContainer dog={this.state.dogClicked} handleToggle={this.handleToggle} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;