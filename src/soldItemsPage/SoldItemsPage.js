import axios from 'axios'
import React, { useState,useEffect } from 'react'
import './soldItemPage.scss'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'todays sale',
    },
  },
};




function SoldItemsPage() {
  const [items, setItems] = useState([])
  const [labels, setLabels] = useState([])
  const [dataSet, setData] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const updateLabel = () => {
      let labels = []
      let dataSet = []
      let total = 0
      items.map(item => {
        if(labels.indexOf(item.item) != -1){
          dataSet[labels.indexOf(item.item)] += Number(item.amount)
          total = total+Number(item.amount)
        }else{
          dataSet.push(Number(item.amount))
          labels.push(item.item)
          total = total+Number(item.amount)
        }
      } )
      setTotal(total)
      setLabels(labels)
      setData(dataSet)
    }
    updateLabel()
  }, [items])
  const data = {
    labels,
    datasets: [
      {
        label: '2014-3-13',
        data: dataSet,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
    const handleTodaySell = () => {
        axios.get('http://localhost:8000/sold-items?date=2021-12-24').then(res => {
            if(res.status == 200){
                setItems(res.data)
            }
        })
        }
    return (
        <div className='container'>
            <h1>Todays sale</h1>
            <div>
              <p className="total">
                Total Revenue<br/>
                {total } birr
              </p>
            </div>
            <Bar options={options} data={data} />
            <button className='btn btn-sm btn-warning' onClick={handleTodaySell}>load</button>
        </div>
    )
}

export default SoldItemsPage



