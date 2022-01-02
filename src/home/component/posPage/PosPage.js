import axios from 'axios'
import React,{useRef,useState,useEffect} from 'react'
import AddItem from '../addItem/AddItem'
import Item from './Item'

function PosPage() {
    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0)
    const key = useRef('')
    const handleAddItem = (e) => {
        e.preventDefault();
        
        axios.get(`http://127.0.0.1:8000/item/${key.current.value}`).then(res => {
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
            axios.post('http://127.0.0.1:8000/pos/add', data).then(res => {
                console.log(res)
                if(res.status == 201){
                    setItems([])
                }
            })
        })
    }
    // const data = [{"item":1,"saleId":"posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac","amount":13},
    // {"item":2,"saleId":"hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero","amount":25},
    // {"item":3,"saleId":"quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices","amount":17},
    // {"item":4,"saleId":"lacus at turpis donec posuere metus vitae ipsum aliquam non","amount":82},
    // {"item":5,"saleId":"nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum","amount":10},
    // {"item":6,"saleId":"cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae","amount":81},
    // {"item":7,"saleId":"vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum","amount":59},
    // {"item":8,"saleId":"natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et","amount":41},
    // {"item":9,"saleId":"suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae","amount":26},
    // {"item":10,"saleId":"tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec","amount":42},
    // {"item":11,"saleId":"ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec","amount":79},
    // {"item":12,"saleId":"ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in","amount":65},
    // {"item":13,"saleId":"habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis","amount":69},
    // {"item":14,"saleId":"morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum","amount":60},
    // {"item":15,"saleId":"scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis","amount":49},
    // {"item":16,"saleId":"at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in","amount":36},
    // {"item":17,"saleId":"non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris","amount":53},
    // {"item":18,"saleId":"mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer","amount":14},
    // {"item":19,"saleId":"penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida","amount":43},
    // {"item":20,"saleId":"venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat","amount":24},
    // {"item":21,"saleId":"vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci","amount":46},
    // {"item":22,"saleId":"velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum","amount":58},
    // {"item":23,"saleId":"consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo","amount":37},
    // {"item":24,"saleId":"scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a","amount":63},
    // {"item":25,"saleId":"convallis nulla neque libero convallis eget eleifend luctus ultricies eu","amount":45},
    // {"item":26,"saleId":"augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus","amount":50},
    // {"item":27,"saleId":"maecenas ut massa quis augue luctus tincidunt nulla mollis molestie","amount":62},
    // {"item":28,"saleId":"rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa","amount":35},
    // {"item":29,"saleId":"lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in","amount":23},
    // {"item":30,"saleId":"vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor","amount":62},
    // {"item":31,"saleId":"sapien non mi integer ac neque duis bibendum morbi non","amount":67},
    // {"item":32,"saleId":"lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue","amount":70},
    // {"item":33,"saleId":"gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum","amount":24},
    // {"item":34,"saleId":"dui vel nisl duis ac nibh fusce lacus purus aliquet","amount":23},
    // {"item":35,"saleId":"cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac","amount":68},
    // {"item":36,"saleId":"tempus vivamus in felis eu sapien cursus vestibulum proin eu mi","amount":40},
    // {"item":37,"saleId":"nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh","amount":15},
    // {"item":38,"saleId":"nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer","amount":90},
    // {"item":39,"saleId":"varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede","amount":59},
    // {"item":40,"saleId":"volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum","amount":34},
    // {"item":41,"saleId":"nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at","amount":69},
    // {"item":42,"saleId":"placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel","amount":25},
    // {"item":43,"saleId":"habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem","amount":36},
    // {"item":44,"saleId":"est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et","amount":31},
    // {"item":45,"saleId":"nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec","amount":71},
    // {"item":46,"saleId":"elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam","amount":36},
    // {"item":47,"saleId":"lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere","amount":62},
    // {"item":48,"saleId":"est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum","amount":63},
    // {"item":49,"saleId":"luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin","amount":48},
    // {"item":50,"saleId":"vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus","amount":74},
    // {"item":51,"saleId":"quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in","amount":86},
    // {"item":52,"saleId":"metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus","amount":57},
    // {"item":53,"saleId":"in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt","amount":29},
    // {"item":54,"saleId":"turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris","amount":89},
    // {"item":55,"saleId":"augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia","amount":45},
    // {"item":56,"saleId":"varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus","amount":90},
    // {"item":57,"saleId":"sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien","amount":79},
    // {"item":58,"saleId":"justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id","amount":82},
    // {"item":59,"saleId":"duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus","amount":78},
    // {"item":60,"saleId":"luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis","amount":23},
    // {"item":61,"saleId":"consequat lectus in est risus auctor sed tristique in tempus sit","amount":36},
    // {"item":62,"saleId":"dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non","amount":15},
    // {"item":63,"saleId":"sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus","amount":34},
    // {"item":64,"saleId":"aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate","amount":52},
    // {"item":65,"saleId":"purus eu magna vulputate luctus cum sociis natoque penatibus et magnis","amount":31},
    // {"item":66,"saleId":"orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum","amount":85},
    // {"item":67,"saleId":"hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt","amount":63},
    // {"item":68,"saleId":"id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla","amount":58},
    // {"item":69,"saleId":"nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit","amount":10},
    // {"item":70,"saleId":"risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum","amount":83},
    // {"item":71,"saleId":"ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae","amount":70},
    // {"item":72,"saleId":"a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam","amount":61},
    // {"item":73,"saleId":"suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique","amount":13},
    // {"item":74,"saleId":"eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat","amount":32},
    // {"item":75,"saleId":"dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien","amount":33},
    // {"item":76,"saleId":"at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus","amount":30},
    // {"item":77,"saleId":"aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio","amount":39},
    // {"item":78,"saleId":"ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra","amount":53},
    // {"item":79,"saleId":"id ornare imperdiet sapien urna pretium nisl ut volutpat sapien","amount":54},
    // {"item":80,"saleId":"primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut","amount":80},
    // {"item":81,"saleId":"quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec","amount":82},
    // {"item":82,"saleId":"ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio","amount":44},
    // {"item":83,"saleId":"enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum","amount":38},
    // {"item":84,"saleId":"consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus","amount":84},
    // {"item":85,"saleId":"justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est","amount":47},
    // {"item":86,"saleId":"a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam","amount":52},
    // {"item":87,"saleId":"ipsum dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non","amount":68},
    // {"item":88,"saleId":"ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices","amount":80},
    // {"item":89,"saleId":"enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac","amount":50},
    // {"item":90,"saleId":"mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin","amount":82},
    // {"item":91,"saleId":"aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed","amount":17},
    // {"item":92,"saleId":"eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc","amount":37},
    // {"item":93,"saleId":"a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam","amount":83},
    // {"item":94,"saleId":"nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo","amount":68},
    // {"item":95,"saleId":"donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit","amount":15},
    // {"item":96,"saleId":"elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in","amount":23},
    // {"item":97,"saleId":"lacus morbi quis tortor id nulla ultrices aliquet maecenas leo","amount":58},
    // {"item":98,"saleId":"ornare consequat lectus in est risus auctor sed tristique in","amount":82},
    // {"item":99,"saleId":"sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus","amount":41},
    // {"item":100,"saleId":"cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec","amount":62}]
    // useEffect(()=> {
    //     data.map(item => {
    //         const data  = {
    //             item: item.item,
    //             saleId: 'kira',
    //             amount: item.amount +1,
    //             date:  '2021-12-24'
    //         }
    //         axios.post('http://127.0.0.1:8000/pos/add', data).then(res => {
    //             if(res.status == 201){
    //                 console.log(res)
    //             }
    //         })
    //     })
    // },[])
    return (
        <div>
            <h1>POS page</h1>

            <form onSubmit={handleAddItem} className="search form-group" >
                <label htmlFor="key">bar code</label>
                <input class="form-control" type="text" name="key" id="key" ref={key}/>
                <button className='btn btn-sm btn-primary' type='submit' >add</button>
            </form>

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
                <button className='btn btn-sm btn-primary' onClick={handelProcessSale}>process</button>
            </div>
        </div>
    )
}

export default PosPage
