import React, { useState } from 'react'
import './home.scss'
import Pos from '../components/pos/Pos'
import {Link} from 'react-router-dom'
import AddItem from '../components/addItemForm/AddItem'
function Home() {
    const [posTabs, setPosTabs] = useState(1)
    const poses = () => {
        let pos = []
        for(let p = 0; p < posTabs; p++){
            pos.push(<li className=''><Pos/></li>)
        }
        console.log(pos)
        return pos
    }
    const handlePos = () => {
        const newTab = posTabs
        setPosTabs(newTab + 1)
    }
    return (
        <div className='home'>
            <div className="home-nav">
                nav
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
                <h2 className="pos-header">
                    <span className="titile">tab #1</span>
                    <button className="btn btn-danger">X</button>
                    <button className="btn btn-primary" onClick={handlePos}>+</button>
                </h2>
                {poses()}

            </div>
            
        </div>
    )
}

export default Home
