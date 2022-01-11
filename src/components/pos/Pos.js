import axios from 'axios'
import React,{useRef,useState,useEffect} from 'react'
import AddItem from '../addItemForm/AddItem'
import AddItemToPos from './addItemToPos'
import Item from './Item'
import './pos.scss'
function Pos() {
    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0)
    
    
    const addSoldItem = (item) => {

        const soldItem = {
            key: item.key,
            name: item.name,
            price: item.price,
            amount: 1,
            saleId: 'kira',
            date: Date.now()
        }
        setItems(prevItems => {
            if(prevItems.find(oldItem => oldItem.key == item.key) != undefined){
                prevItems.map(oldItem => {
                    if(oldItem.key == item.key){
                        oldItem.amount = Number(oldItem.amount) + 1
                    }
                })
                return [...prevItems]
            }else{
                return [...prevItems, soldItem]
            }
        })
        // setItems(prevItems => [...prevItems, soldItem])
    }

    
    useEffect(() => {
        const calcTotal = () => {
            let sum = 0
            items.forEach(function(item){

                sum = Number(item.price * item.amount) + sum
            }) 
            setTotal(sum)
        }
        calcTotal()
    }, [items])

    const handelProcessSale = () => {
        items.map(item => {

            const data  = {
                item: item.key,
                saleId: 'kira',
                amount: item.amount +1,
                date:  '2021-12-24'
            }
            axios.post('http://127.0.0.1:8000/pos/add', data).then(res => {

                if(res.status == 201){
                    setItems([])
                }
            })
        })
    }
    return (
        <div className='pos'>
            <AddItemToPos addSoldItem={addSoldItem} ></AddItemToPos>
            <div className="pos-main">

                <div className="items">

                {
                    items.map(item => (
                        <>
                        <Item key={item.key} item={item} ></Item>
                        </>
                        
                        ))
                    }
                </div>

            

                <div className='pos-bottom'>
                    <div className="total ">
                    <div className='total-div'><p>Sub Total</p> <p>{total}.00 Birr</p></div>
                    <div className=' total-div'><p>Tax</p> <p>{Math.floor(total * 0.15)}.00 Birr</p></div>
                    <div className='total-div '><p className='bold-w'>Total</p> <p className='bold-w'>{Math.floor(total * 0.15) + Number(total)}.00 Birr</p></div>
                    </div>
                    <button className='btn btn-sm btn-primary process-btn bold' onClick={handelProcessSale}>process</button>
                </div>
            </div>
        </div>
    )
}

export default Pos;
