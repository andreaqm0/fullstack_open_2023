import React from 'react'

const Countries = ({ countries, setFilter }) => {
    return (
        <>
            {
                countries.map((country, index) => (
                    <div key={'c-'+index}>{country.name.common} <button onClick={() => setFilter(country.name.common)}>show</button></div>
                ))
            }
        </>
    )
}

export default Countries