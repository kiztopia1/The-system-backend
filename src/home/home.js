import React from 'react'
import './home.scss'


import AddItem from '../components/addItemForm/AddItem'
function Home() {
    return (
        <div className='home'>
            
            <div className='main-container container'>
                <AddItem></AddItem>

            </div>
            
        </div>
    )
}

export default Home
