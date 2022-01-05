import React from 'react'
import './home.scss'
import Pos from '../components/pos/Pos'

import AddItem from '../components/addItemForm/AddItem'
function Home() {
    return (
        <div className='home'>
            
            <div className='main'>
                <AddItem></AddItem>
            </div>
            <div className="pos">
                <Pos/>
            </div>
            
        </div>
    )
}

export default Home
