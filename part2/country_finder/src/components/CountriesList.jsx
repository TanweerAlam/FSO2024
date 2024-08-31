import { useEffect, useState } from "react"
import Country from "./Country"

const CountriesList = ({countries}) => {
    console.log("props in countriesList ", countries)
    const [showDetails, setShowDetails] = useState(true)
    const [showCountry, setShowCountry] = useState(null)

    useEffect(() => {
    }, [showDetails])

    const handleShowDetails = (id) => {
        // console.log("showDetails Before: ", showDetails)
        setShowDetails(showDetails => !showDetails)
        // console.log("showDetails After: ", showDetails)


        if (showDetails) {
            // console.log("Show details now", showDetails)
            const country = countries.find(country => country.ccn3 === id)
            // console.log("Country to pass in country props", country)
            setShowCountry(country)
        }
    }

    if (showCountry){
        return (<> <Country country={showCountry} /> </>)
    }


    return (
        <div>
            {countries.map(country =>
                <p key={country.ccn3}>{country.name.common} <button onClick={() => handleShowDetails(country.ccn3)}>show</button></p>
            )}
        </div>
    )
}

export default CountriesList
