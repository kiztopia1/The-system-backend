import React from 'react'
import './item.scss'
function Item({item}) {

    return (
        <div className="item row" key={item.key}>
                     <div className="amount col-2">{item.amount}X</div>
                     <div className='name col-7'>{item.name} </div>
                     <div className="price col-3">{item.price} Birr</div>

                    <div className=" col-2"></div>
                     <div className='name col-7'></div>
                     <div className="price col-3">{item.price} Birr</div>

                    <div className='col-2'></div>
                     <div className='name col-7'> </div>
                     <div className="price col-3">{item.price} Birr</div>
                </div>
    )
}
export default Item
