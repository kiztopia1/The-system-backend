import React from 'react'
import './item.scss'
function Item({item}) {

    return (
        <div className="item row" key={item.key}>
                     <div className="amount col-1 bold-w">{item.amount}X</div>
                     <div className='name col-8 bold-w'>{item.name} </div>
                     <div className="price col-3 bold-w">{Number(item.price)+ Math.floor((item.price * 0.15))} Birr</div>

                    <div className=" col-1"></div>
                     <div className='name col-8'>{item.name}</div>
                     <div className="price col-3">+ {item.price} Birr</div>

                    <div className='col-1'></div>
                     <div className='name col-8'>Tax</div>
                     <div className="price col-3"> + {Math.floor(item.price * 0.15)} Birr</div>
                </div>
    )
}
export default Item
