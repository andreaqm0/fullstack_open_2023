import React, { useState } from 'react'
import personsServ from '../services/persons'

const PersonForm = ({ persons, setPersons, setMessage }) => {
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
        if (persons.some(person => person.name === newPerson.name.trim())) {
            if (window.confirm(`${newPerson.name.trim()} is already added to phonebook, replace the old number with new one?`)) {
                const oldData = persons.find((person) => person.name === newPerson.name.trim());
                personsServ
                    .update(oldData.id, { ...oldData, number: newPerson.number })
                    .then(res => {
                        setPersons(persons.map(person => person.id === oldData.id ? res : person))
                        setNewPerson({ name: '', number: '' })
                        setMessage({success: true, text: `${oldData.name} updated`})
                    })
                    .catch(() => setMessage({success: false, text: `Information of ${oldData.name} has already been removed from server`}))
            }
            return
        }
        personsServ
            .create({ id: persons.length + 1, name: newPerson.name.trim(), number: newPerson.number.trim() })
            .then(res => {
                setPersons(persons.concat(res))
                setNewPerson({ name: '', number: '' })
                setMessage({success: true, text: `Added ${res.name}`})
            })
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