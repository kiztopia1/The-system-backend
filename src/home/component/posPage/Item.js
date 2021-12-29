import React, { useEffect, useState } from 'react'

function Item({item}) {
    const [amount, setAmount] = useState(0)
    return (
        <div className="" key={item.key}>
                    <br />
                    <hr />
                    key: {item.key } <br />
                    name: {item.name} <br />
                    price: {item.price} birr<br />
                    amount: {item.amount} x<br />
                    saseID: {item.saleId} <br />
                 <br />
                </div>
    )
}
export default Item
