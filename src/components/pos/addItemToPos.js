import React,{useRef} from 'react'
import axios from 'axios';
function AddItemToPos({addSoldItem}) {
    const key = useRef('')
    const handleAddItem = (e) => {
        e.preventDefault();
        
        axios.get(`http://127.0.0.1:8000/item/${key.current.value}`).then(res => {
            addSoldItem(res.data)
            
        })
    }
    return (
        <form onSubmit={handleAddItem} className="search form-group" >
                <label htmlFor="key">bar code</label>
                <input class="form-control" type="text" name="key" id="key" ref={key}/>
                <button className='btn btn-sm btn-primary' type='submit' >add</button>
        </form>
    )
}

export default AddItemToPos
