import axios from 'axios';
import React, {useState, useEffect} from 'react'
import RecipeList from '../components/RecipeList'
import Search from '../components/Search'

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState({
        search:''
    });

    useEffect(() => {

        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((res) => {
                console.log(res)
                setRecipes(res.data.categories)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setSearch( (prev) => {
            return {
                ...prev,
                [name] : [value]
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            
            <Search search={search} handleSubmit={handleSubmit} handleChange={handleChange}/>
            <RecipeList recipes={recipes}/>
            
        </div>
    )
}

export default Recipes
