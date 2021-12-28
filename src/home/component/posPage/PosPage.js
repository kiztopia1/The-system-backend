import axios from 'axios'
import React,{useRef,useState,useEffect} from 'react'
import AddItem from '../addItem/AddItem'

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
            name: item.name,
            price: item.price,
            amount: item.amount,
            saleId: 'kira'
        }
        setItems(prevItems => [...prevItems, soldItem])
    }
    useEffect(() => {
        const calcTotal = () => {
            let sum = 0
            items.forEach(function(item){
                sum = Number(item.price) + sum
            }) 
            setTotal(sum)
        }
        calcTotal()
    }, [items])
    
    return (
        <div>
            <h1>POS page</h1>

            <div className="search" >
                <label htmlFor="key">bar code</label>
                <input type="text" name="key" id="key" ref={key}/>
                <button onClick={handleAddItem} >add</button>
            </div>

            <div className="items">
               { items.map(item => (
                   <div className="">
                       <br />
                       <hr />
                       name: {item.name} <br />
                       price: {item.price}, <br />
                       amount: {item.amount} <strong>add</strong>  sum<br />
                       saseID: {item.saleId} <br />
                    <br />
                   </div>
               ))
            }
            </div>

            <div className="total">
                <p>total</p>
                {total}
            </div>
        </div>
    )
}

export default PosPage
