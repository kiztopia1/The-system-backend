import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <Link to={'home'}>home</Link>     
            <Link to={'soldItems'}>  sold items</Link> 
        </div>
    )
}

export default Nav
