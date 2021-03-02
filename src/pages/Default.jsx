import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'

const Default = () => {
    return (
        <Header title="404" styleClass='default-hero'>
            <h2 className="text-light text-uppercase"> You are seeing wrong page.</h2>
            <NavLink to='/' className="btn btn-secondary"> Return Home </NavLink>
        </Header>
    )
}

export default Default
