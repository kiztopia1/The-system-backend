import axios from 'axios'
import React,{useRef,useState} from 'react'

function PosPage() {
    const [items, setItems] = useState([])
    const key = useRef('')
    const handleAddItem = () => {
        axios.get(`http://127.0.0.1:8000/${key.current.value}`).then(res => {
            setItems(prevItems => [...prevItems, res.data])
            console.log(items)
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
               { items.map(item => (
                   <div className="">
                       <br />
                       <hr />
                       name: {item.name} <br />
                       price: {item.price}
                    <br />
                   </div>
               ))
            }
            </div>
        </div>
    )
}

export default PosPage
