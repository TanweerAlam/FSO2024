import CountriesList from "./CountriesList"
import Country from "./Country"

const Countries = ({countries}) => {
    console.log("props in Countries", countries)

    if (countries.length === 1) {
        const country = countries[0]

        return(
            <>
                <Country country={country} />
            </>
        )
    }

    return (
        <>
            {
                (countries.length > 10)
                    ? <p>Too many matches, specify another filter</p>
                    : <CountriesList countries={countries} />
            }
        </>
    )
}

export default Countries
