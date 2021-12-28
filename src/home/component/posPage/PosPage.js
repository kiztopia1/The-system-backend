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
            key: item.key,
            name: item.name,
            price: item.price,
            amount: 1,
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
    useEffect(() => {
        
       
       listItems()
       
    },[items]) 
    const handleAmount = (key) => {
        console.log('boom ***************')
        items.map(item => {
            console.log(item.key , key)
            if(item.key == key){
                console.log(item, 'item')
                let newAmount =item.amount ++
                console.log(newAmount, 'new')
                return {...item, amount: newAmount }
            }
            else{
                return item
            }
        })
        console.log(items)
    }
    const listItems = () => {
        return (
             items.map(item => (
                <div className="" key={item.key}>
                    <br />
                    <hr />
                    key: {item.key } <br />
                    name: {item.name} <br />
                    price: {item.price}, <br />
                    amount: {item.amount} <strong onClick={() => handleAmount(item.key)} >add</strong>  sum<br />
                    saseID: {item.saleId} <br />
                 <br />
                </div>
            ))
        )
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
               { listItems()
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
