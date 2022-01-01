import axios from 'axios'
import React, { useState } from 'react'

function SoldItemsPage() {

    const handleTodaySell = () => {
        axios.get('http://localhost:8000/sold?date=2021-12-24').then(res => {
            if(res.status == 200){
                setItems(res.data)
            }
        })
        }
    const [items, setItems] = useState([])
    return (
        <div>
            <h1>Todays sell</h1>
            {items.map(item => {
                return(
                    <div>
                        {item.item}
                    </div>
                )
            })}
            <span onClick={handleTodaySell}>load</span>
        </div>
    )
}

export default SoldItemsPage
