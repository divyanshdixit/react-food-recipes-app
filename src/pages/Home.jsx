import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'

const Home = () => {
    return (
        <div>
            <Header title="Food Recipes">
                <NavLink to="/recipes" className="btn btn-secondary"> Search Recipes </NavLink>
            </Header>
        </div>
    )
}

export default Home
