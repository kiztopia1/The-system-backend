import React from 'react'
import './home.scss'
import Pos from '../components/pos/Pos'
import {Link} from 'react-router-dom'
import AddItem from '../components/addItemForm/AddItem'
function Home() {
    return (
        <div className='home'>
            <div className="home-nav">
                manu
            </div>
            <div className=' home-child main'>
                <h2>hagere Inventory </h2>
                <div className="main-cards row">
                <div className="card  main-card  hover col-3 dark">
                        <h4>Alerts</h4>
                        <Link to={'/home'}>go</Link>
                    </div>
                    <div className="card  main-card  hover col-3 pink">
                        <h4>Alerts</h4>
                        <Link to={'/home'}>go</Link>
                    </div>
                    <div className="card  main-card  hover col-3 blue">
                        <h4>Alerts</h4>
                        <Link to={'/home'}>go</Link>
                    </div>
                    <div className="card  main-card  hover col-3 blue">
                        <h4>Alerts</h4>
                        <Link to={'/home'}>go</Link>
                    </div>
                    <div className="card  main-card  hover col-3 dark ">
                        <h4>Alerts</h4>
                        <Link to={'/home'}>go</Link>
                    </div>
                    <div className="card  main-card  hover col-3 dark ">
                        <h4>Alerts</h4>
                        <Link to={'/home'}>go</Link>
                    </div>
                </div>
            </div>
            <div className="home-child pos">
                <h2 className="pos-header">tab #1</h2>
                <Pos/>
            </div>
            
        </div>
    )
}

export default Home
