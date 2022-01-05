import React from 'react'
import './item.scss'
function Item({item}) {

    return (
        <div className="" key={item.key}>
                    name: {item.name} <br />
                    price: {item.price} birr<br />
                    amount: {item.amount} x<br />
                </div>
    )
}
export default Item
