import React from 'react'
import './home.scss'

import PosPage from '../posPage/PosPage'
import AddItem from '../components/addItemForm/AddItem'
function Home() {
    return (
        <div className='home'>
            
            <div className='main-container container'>
                <AddItem></AddItem>
                <PosPage/>
            </div>
            
        </div>
    )
}

export default Home
