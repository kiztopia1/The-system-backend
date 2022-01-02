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
        axios.post('http://127.0.0.1:8000/', data).then(res => {
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
                <div className='form-group'>
                    <label htmlFor="key">key</label>
                    <input  className="form-control" type="text" name="key" id="key" ref={key}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="name">name</label>
                    <input className="form-control" type="text" name="name" id="name" ref={name}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="price">price</label>
                    <input className="form-control" type="text" name="price" id="price" ref={price} />
                </div>
                <div className='form-group'>
                    <label htmlFor="amount">amount</label>
                    <input className="form-control" type="text" name="amount" id="amount" ref={amount}/>
                </div>

                <button className='btn btn-sm btn-primary'>add</button>
            </form>
        </div>
    )
}

export default AddItem
