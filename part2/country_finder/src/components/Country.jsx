const Country = ({country}) => {
    // console.log("props in Country", country)
    const {name, capital, area, languages, flags} = country
    console.log(`Name ${name} Capital ${capital} Area ${area}`)
    console.log('Languages ', languages)

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h2>languages</h2>
            <ul>
                {
                    Object.values(languages).map(language => <li>{language}</li>)
                }
            </ul>
            <img src={flags.png} alt="national flag" width={240} height={140} />
        </div>
    )
}

export default Country
