import React, { useEffect, useState } from 'react'

function Item({item}) {
    const [itemAmount, setItemAmount] = useState(1)

    const handleAmount = () => {
        setItemAmount(pre => {
            const data = pre + 1
            console.log(data, pre)
            return data
        })
        item.amount = itemAmount
    }
    return (
        <div className="" key={item.key}>
                    <br />
                    <hr />
                    key: {item.key } <br />
                    name: {item.name} <br />
                    price: {item.price} birr<br />
                    amount: {itemAmount} x<br />
                    <p onClick={handleAmount}>add</p>
                    saseID: {item.saleId} <br />
                 <br />
                </div>
    )
}
export default Item
