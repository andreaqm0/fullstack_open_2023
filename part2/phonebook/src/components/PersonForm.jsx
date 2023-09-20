import React, {useState} from 'react'

const PersonForm = ({ persons, setPersons }) => {
    const [newPerson, setNewPerson] = useState({ name: '', number: '' })
    const changeHandler = (e) => {
        setNewPerson({
            ...newPerson,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (!newPerson.name || !newPerson.number) return alert('You\'re missing the name or number')
        if (persons.some(person => person.name === newPerson.name.trim())) return alert(`${newPerson.name} is already added to phonebook`)
        setPersons([
            ...persons,
            { id: persons.length + 1, name: newPerson.name.trim(), number: newPerson.number.trim() }
        ])
        setNewPerson({ name: '', number: '' })
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                name: <input type='text' name='name' value={newPerson.name} onChange={changeHandler} />
            </div>
            <div>
                number: <input type='tel' name='number' value={newPerson.number} onChange={changeHandler} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm