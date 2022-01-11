import React from 'react'

function addItemToPos(handleAddItem,key) {
    return (
        <form onSubmit={handleAddItem} className="search form-group" >
                <label htmlFor="key">bar code</label>
                <input class="form-control" type="text" name="key" id="key" ref={key}/>
                <button className='btn btn-sm btn-primary' type='submit' >add</button>
        </form>
    )
}

export default addItemToPos
