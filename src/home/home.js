import React from 'react'
import './home.scss'
import Pos from '../components/pos/Pos'

import AddItem from '../components/addItemForm/AddItem'
function Home() {
    return (
        <div className='home'>
            <div className="home-nav">
                manu
            </div>
            <div className=' home-child main'>
                <h2>hagere Inventory </h2>
                <AddItem></AddItem>
            </div>
            <div className="home-child pos">
                <h2 className="pos-header">tab #1</h2>
                <Pos/>
            </div>
            
        </div>
    )
}

export default Home
