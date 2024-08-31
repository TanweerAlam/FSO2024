import { useEffect, useState } from "react"
import axios from 'axios'
import Countries from "./components/Countries"

const App = () => {
  // console.log("App loaded")
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])
  const [responseMessage, setResponseMessage] = useState('')

  // const [countriesToShow, setCountriesToShow] = useState([])

  useEffect(() => {
    if (value.length){
      axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        console.log(response)
        setCountries(response.data)
        console.log(countries)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }, [value])

  const countriesToShow = value.length
    ? countries.filter(country => {
      const name = country.name.common.toLowerCase()
      return name.includes(value.toLowerCase())})
    : countries

  console.log("countries to show at first render", countriesToShow)

  const handleValueChange = (event) => {
    setValue(event.target.value)
  }



  return (
    <>
      <form>
        <label >find countries</label>
        <input placeholder="Enter country" onChange={handleValueChange} />
      </form>
      {
        <Countries countries={countriesToShow} />
      }
    </>
  )
}

export default App
