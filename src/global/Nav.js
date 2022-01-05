import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className='container'>
            <Link to={'home'}>home</Link>     
            <Link to={'soldItems'}>  sold items</Link> 
            <Link to={'posPage'}>Pos page</Link> 
        </div>
    )
}

export default Nav
