import React from 'react'

class DogContainer extends React.Component {
    render() {
        const { dog, handleToggle } = this.props
        return (
            <>
                <img src={dog.image} />
                <h2>{dog.name}</h2>
                <button onClick={() => handleToggle(dog.id)}>{dog.isGoodDog ? 'Good Dog!' : 'Bad Dog!'}</button>
            </>
        )
    }
}

export default DogContainer