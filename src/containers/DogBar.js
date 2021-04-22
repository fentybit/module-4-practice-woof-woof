import React from 'react';
import Dog from '../components/Dog'

class DogBar extends React.Component {
    render() {
        const { dogs, selectedDog } = this.props

        return (
            dogs.map(dog => <Dog key={dog.id} dog={dog} selectedDog={selectedDog} />)
        )
    }
}

export default DogBar