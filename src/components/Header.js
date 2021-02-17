import React from 'react'

const Header = ({search, setSearch, getSearch}) => {
    return (
        <div className = 'main-header'>
            <h3>Movies</h3>

            <input 
                type='search' 
                value={search}
                placeholder = 'Search...'
                onChange = {getSearch}
            />
            
        </div>
    )
}

export default Header
