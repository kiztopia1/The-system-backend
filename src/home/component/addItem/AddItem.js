import React,{useRef} from 'react'
import axios from 'axios'
function AddItem() {
    const handleAddItem = (e) => {
        e.preventDefault();
        
        let data = {
            key: key.current.value,
            name: name.current.value,
            price: price.current.value,
            amount: amount.current.value
        }

        axios.post('http://127.0.0.1:8000//', data).then(res => {
            console.log(res.data)
        })
        
    }

    const key = useRef('')
    const name = useRef('')
    const price = useRef('')
    const amount = useRef('')
    return (
        <div>
            <h1>add item</h1>

            <form onSubmit={handleAddItem}>
                <div>
                    <label htmlFor="key">key</label>
                    <input type="text" name="key" id="key" ref={key}/>
                </div>
                <div>
                    <label htmlFor="name">name</label>
                    <input type="text" name="name" id="name" ref={name}/>
                </div>
                <div>
                    <label htmlFor="price">price</label>
                    <input type="text" name="price" id="price" ref={price} />
                </div>
                <div>
                    <label htmlFor="amount">amount</label>
                    <input type="text" name="amount" id="amount" ref={amount}/>
                </div>

                <button>add</button>
            </form>
        </div>
    )
}

export default AddItem
