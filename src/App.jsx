import React, { useState, useEffect, Fragment } from 'react';
import Orders from './components/Orders';
import Navbar from './components/Navbar';

function useOrders() {
  const [orders, setOrders] = useState([])
  const url = 'https://eshop-deve.herokuapp.com/api/v2/orders'
  const headers = {
    method: 'GET',
    headers: {
      authorization: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ'
    }
  }

  useEffect(() => {
    getOrders()
  }, [])

  const getOrders = async () => {
    const response = await fetch(url, headers)
    const data = await response.json()
    setOrders(data.orders)
    console.log(data.orders)
  }

  return orders;
}

export function App() {
const orders = useOrders()
  return (
    <Fragment>
      <Navbar/>
      <Orders orders={orders} />
    </Fragment>
  )
}