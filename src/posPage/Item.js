import React, {  useState } from 'react'

function Item({item}) {

    return (
        <div className="" key={item.key}>
                    <br />
                    <hr />
                    key: {item.key } <br />
                    name: {item.name} <br />
                    price: {item.price} birr<br />
                    amount: {item.amount} x<br />
                 <br />
                </div>
    )
}
export default Item
