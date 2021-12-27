import React from 'react'
import './home.scss'


import AddItem from './component/addItem/AddItem'
function Home() {
    return (
        <div className='home'>
            
            <div className='main-container'>
                <AddItem></AddItem>
            </div>
            
        </div>
    )
}

export default Home
