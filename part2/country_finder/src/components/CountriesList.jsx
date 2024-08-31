import Country from "./Country"

const CountriesList = ({countries}) => {
    console.log("props in countriesList ", countries)

    return (
        <>
            {countries.map(country => <p>{country.name.common}</p>)}
        </>
    )
}

export default CountriesList
