import React from 'react'

const Search = ({search, handleSubmit, handleChange}) => {
    return (
        <div className="container-fluid">
            <div className="text-center">
                <h2> Search recipes with HireCookOnline </h2>
                <p> Type recipes seprated by comma </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div class="input-group">
                <input type="text" class="form-control" name="search" value={search.search} onChange={handleChange} aria-label="Amount (to the nearest dollar)"/>
                <div class="input-group-append">
                    <button type="submit" class="btn btn-secondary">Search</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default Search
