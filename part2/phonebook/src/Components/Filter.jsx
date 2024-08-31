const Filter = (props) => {
    // console.log("Props in filter ", props)

    return (
        <div>
            filter shown with <input value={props.filterName} onChange={props.handleFilterName} />
        </div>
    )
}

export default Filter
