import { useEffect, useState } from "react";

function FilterMenuLeft(props) {

    const [filter, setFilter] = useState({
        search: "",
        isAvailable: true,
        minRating: "",
        maxRating: "",
        minPrice: "",
        maxPrice: "",
    })

    const applyFilter = () => {
        props.applyFilter(generateQS(filter))
    }

    const generateQS = (object) => {
        let vals = []
        for (const key in object) {
            if (object[key] != "") {
                vals.push(key + "=" + object[key])
            }
        }
        return vals.join("&")
    }


    return (
        <ul className="list-group list-group-flush rounded">
            <li className="list-group-item">
                <h5 className="mt-1 mb-2">Search</h5>
                <div className="d-flex flex-column">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Search products..."
                        aria-label="search input"
                        onChange={(e) => {
                            setFilter({ ...filter, search: e.target.value })
                        }}
                    />
                    <br></br>
                    <div className="form-check">
                        <input defaultChecked={filter.isAvailable} className="form-check-input" type="checkbox" onChange={() => {
                            setFilter({ ...filter, isAvailable: filter.isAvailable ? false : true })
                        }} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Is Available
                        </label>
                    </div>
                </div>
            </li>

            <li className="list-group-item">
                <h5 className="mt-1 mb-2">Rating Range</h5>
                <div className="d-grid d-block mb-3">
                    <div className="form-floating mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Min"
                            defaultValue={filter.minRating}
                            onChange={(e) => setFilter({ ...filter, minRating: e.target.value })}
                        />
                        <label htmlFor="floatingInput">Min Rating</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Max"
                            defaultValue={filter.maxRating}
                            onChange={(e) => setFilter({ ...filter, maxRating: e.target.value })}
                        />
                        <label htmlFor="floatingInput">Max Rating</label>
                    </div>
                </div>
            </li>

            <li className="list-group-item">
                <h5 className="mt-1 mb-2">Price Range</h5>
                <div className="d-grid d-block mb-3">
                    <div className="form-floating mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Min"
                            defaultValue={filter.minPrice}
                            onChange={(e) => setFilter({ ...filter, minPrice: e.target.value })}
                        />
                        <label htmlFor="floatingInput">Min Price</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Max"
                            defaultValue={filter.maxPrice}
                            onChange={(e) => setFilter({ ...filter, maxPrice: e.target.value })}
                        />
                        <label htmlFor="floatingInput">Max Price</label>
                    </div>
                    <button onClick={() => { applyFilter() }} className="btn btn-dark">Apply</button>
                </div>
            </li>
        </ul>
    );
}

export default FilterMenuLeft