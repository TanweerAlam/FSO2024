import { useEffect, useState } from "react"
import axios from 'axios'

const Country = ({country}) => {
    // console.log("props in Country", country)
    const [weather, setWeather] = useState(null)

    const name = country.name.common
    const {capital, area, languages, flags, latlng} = country
    const api_key = import.meta.env.VITE_WEATHER_API
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=${api_key}`

    // console.log(`Name ${name} Capital ${capital} Area ${area}`)
    // console.log('Languages ', languages)
    // console.log(weatherURL)

    useEffect(() => {
        axios
            .get(weatherURL)
            .then(response => {
                // console.log(response.data)
                setWeather(response.data)
                // console.log(weather)
            })
            .catch(error => console.log(error.status))
    }, [])

    return (
        <div>
            <h1>{name}</h1>
            <p>capital {capital}</p>
            <p>area {area}</p>
            <h2>languages</h2>
            <ul>
                {
                    Object.values(languages).map((language, index) => <li key={index}>{language}</li>)
                }
            </ul>
            <img src={flags.png} alt="national flag" width={240} height={140} />
            <h2>Weather in {name}</h2>
            <p>temperature {weather && (weather.main.temp - 273.15).toFixed(2)} celsius</p>
            <img src={`https://openweathermap.org/img/wn/${weather && weather.weather[0].icon}@2x.png`} alt="weather" />
            <p>wind {weather && weather.wind.speed}</p>
        </div>
    )
}

export default Country
