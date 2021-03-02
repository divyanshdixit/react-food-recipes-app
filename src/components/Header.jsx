import React from 'react'

const Header = ({title, styleClass, children}) => {
    return (
        <div>
            <header>
                <div className="container-fluid">
                    <div className={`${styleClass} align-items-center row`}>
                        <div className="col text-center">
                            <h1 className="text-light text-uppercase"> {title} </h1>
                            {children}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

Header.defaultProps = {
    title:'Header default title',
    styleClass:'header-hero'
}
export default Header
