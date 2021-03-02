import React from 'react'

const Recipe = ({val, id}) => {
    return (
        <div>
            <div class="card" style={{width: "18rem"}}>
            <img class="card-img-top" src={val.strCategoryThumb} alt={val.strCategory} width="200" height="200"/>
            <div class="card-body">
                <h5 class="card-title">{val.strCategory}</h5>
                <p class="card-text">{val.strCategoryDescription}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
    )
}

export default Recipe
