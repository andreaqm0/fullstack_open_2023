import Weather from './Weather'

const Country = ({ country }) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital}</div>
            <div>population {country.population}</div>
            <h2>languages</h2>
            <ul>
                {
                    Object.values(country.languages).map((lang, index) => (
                        <li key={'lang-' + index}>{lang}</li>
                    ))
                }
            </ul>
            <img src={country.flags.png} alt={country.flags.alt || 'flag'} width={100} />
           <Weather country={country} />
        </div>
    )
}

export default Country