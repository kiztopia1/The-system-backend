import axios from 'axios'
import React,{useRef,useState,useEffect} from 'react'
import AddItem from '../addItem/AddItem'
import Item from './Item'

function PosPage() {
    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0)
    const key = useRef('')
    const handleAddItem = () => {
        axios.get(`http://127.0.0.1:8000/${key.current.value}`).then(res => {
            addSoldItem(res.data)
            
        })
    }
    const addSoldItem = (item) => {

        const soldItem = {
            key: item.key,
            name: item.name,
            price: item.price,
            amount: 1,
            saleId: 'kira',
            date: Date.now()
        }
        setItems(prevItems => [...prevItems, soldItem])
    }

    
    useEffect(() => {
        const calcTotal = () => {
            let sum = 0
            items.forEach(function(item){
                console.log(item)
                console.log(item.price, item.amount)
                sum = Number(item.price * item.amount) + sum
            }) 
            setTotal(sum)
        }
        calcTotal()
    }, [items])

    const handelProcessSale = () => {
        items.map(item => {
            console.log(item)
            const data  = {
                item: item.key,
                saleId: 'kira',
                amount: item.amount +1,
                date:  '2021-12-24'
            }
            axios.post('http://127.0.0.1:8000/sold/add', data).then(res => {
                console.log(res)
                if(res.status == 201){
                    setItems([])
                }
            })
        })
    }

    return (
        <div>
            <h1>POS page</h1>

            <div className="search" >
                <label htmlFor="key">bar code</label>
                <input type="text" name="key" id="key" ref={key}/>
                <button onClick={handleAddItem} >add</button>
            </div>

            <div className="items">
                {console.log(items, 'new items')}
               {
                   items.map(item => (
                       <>
                       <Item key={item.key} item={item} ></Item>
                       <hr/>
                       <p >add</p>
                         <br />
                       <hr/>
                       </>
                    
                ))
               }
            </div>

            <div className="total">
                <p>total</p>
                {total}
            </div>

            <div>
                <button onClick={handelProcessSale}>process</button>
            </div>
        </div>
    )
}

export default PosPage
