import React from 'react'

const Dog = ({ dog, selectedDog }) => {
    return (
        <span onClick={() => selectedDog(dog.id)}>
            {dog.name}
        </span>
    )
}

export default Dog