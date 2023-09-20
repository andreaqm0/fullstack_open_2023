import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = ({ country }) => {
    const [weather, setWeather] = useState()

    useEffect(() => {
        const API_KEY = import.meta.env.VITE_API_KEY
        axios
            .get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${country.capital}`)
            .then(res => res.data)
            .then(data => setWeather(data))
    }, [])
    return (
        <>
            {
                weather &&
                <>
                    <h2>weather in {country.capital}</h2>
                    <div>
                        <strong>temperature: </strong>
                        <span>{weather.current.temp_c}</span>
                        °C
                    </div>
                    <img src={weather.current.condition.icon} />
                    <div>
                        <strong>wind: </strong>
                        <span>{weather.current.wind_mph} mph</span>
                        <span> direction {weather.current.wind_dir}</span>
                    </div>
                </>
            }
        </>
    )
}

export default Weather