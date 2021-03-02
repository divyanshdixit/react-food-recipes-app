import React from 'react'
import Recipe from './Recipe'

const RecipeList = ({recipes}) => {
    return (
        <div>
            <h2> Recipe List </h2>
            {
                recipes.map((val, index) => {
                    
                    return <Recipe val={val} id={index} key={index}/>
                })
            }
            
        </div>
    )
}

export default RecipeList
