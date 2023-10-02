import React, { useState } from 'react'
import { phonedetails } from './Productsdata'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products() {
  const [item,setitems]=useState(phonedetails)
  const decqty= (id) =>{
    const newitem=item.map((i) =>
    i.id === id && i.qty >1 ?{...i,qty:i.qty-1}:i
    );
    setitems(newitem)

  }

  const incqty= (id) =>{
    const newitem=item.map((i) =>
    i.id === id?{...i,qty:i.qty+1}:i
    );
    setitems(newitem)

  }

  return (
    <div className="container">
      <h1 className="bg-info text-white">Products</h1>
      {item.map((i)=>{
        return(
          <div className='d-inline-flex'>
          <Card className="shadow p-3 m-2 bg-body rounded" style={{ width: '13rem' }}>

        <Card.Img 
        style={{ height: '15rem' }}
        className='p-2'
        variant="top" img src={i.image} />
        <Card.Body>
          <Card.Title className='text-primary'>{i.model}</Card.Title>
          <Card.Text> {i.des}</Card.Text>
          <h5>Price :₹{i.price}</h5>
          <div>
            <p>Qty:
              <Button onClick={()=> decqty(i.id)} className='m-1'>
                -
              </Button>
              {i.qty}
              <Button onClick={()=> incqty(i.id)} className='m-1'>
                +
              </Button>

           
            </p>
          </div>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
      </div>

        )
        

      }
      
      )}
      
    </div>
  )
}

export default Products
