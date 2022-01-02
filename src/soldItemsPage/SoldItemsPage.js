import axios from 'axios'
import React, { useState,useEffect } from 'react'


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
  useEffect(() => {
    const updateLabel = () => {
      let labels = []
      let dataSet = []
      items.map(item => {
        if(labels.indexOf(item.item) != -1){
          dataSet[labels.indexOf(item.item)] += Number(item.amount)
        }else{
          dataSet.push(Number(item.amount))
          labels.push(item.item)
        }
      } )
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
            <h1>Todays sell</h1>
            {items.map(item => {
                return(
                  item.date
                )
            })}
            <Bar options={options} data={data} />
            <span onClick={handleTodaySell}>load</span>
        </div>
    )
}

export default SoldItemsPage



