import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  MDBBtn,
} from "mdb-react-ui-kit";
import { deleteFromCart, emptyCart } from '../Redux/Slice/cartSlice';
import { useNavigate } from 'react-router-dom';



function Cart() {
  const dispatch = useDispatch()
  const cartArray = useSelector((state)=>state.cartReducer)
  const [total,setTotal] = useState(0)
  const navigate = useNavigate()
  const getCartTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }

  const emptyCarts = ()=>{
    alert("order Placed Successfully")
    dispatch(emptyCart())
    navigate('/')
  }

  useEffect(()=>{
    getCartTotal()
  },[cartArray])
  
console.log(cartArray);
  return (
    <div style={{overflow:'hidden'}}>
      <Row>
        <Col>
        <table className='m-5'>
          <thead>
          <tr>
              <th className='border border-2 p-2'>Id</th>
              <th className='border border-2 p-2'>Name</th>
              <th className='border border-2 p-2'>Image</th>
              <th className='border border-2 p-2'>Price</th>
              <th className='border border-2 p-2'>Action</th>
            </tr>

          </thead>
          <tbody>
            {cartArray.length>0?cartArray.map((item,index)=>(
                <tr>
                  <td className='border border-2 p-3'>{index+1}</td>
                  <td className='border border-2 p-3'>{item.title}</td>
                  <td className='border border-2 p-3'><img src={item.thumbnail} alt="" style={{width:'100px',height:'100px',borderRadius:'50%'}} /></td>
                  <td className='border border-2 p-3'>{item.price}</td>
                  <td className='border border-2 p-3'> <i  onClick={()=>dispatch(deleteFromCart(item.id))} style={{cursor:'pointer'}} className="fa-solid fa-trash text-danger ms-3"></i></td>
                </tr>
            )):"Empty cart"
            }


          </tbody>
        </table>
        </Col>
        <Col>
        <div className='card m-5 text-center'>
          <h3 className='text-center m-3'>Cart Summary</h3>
          <h6>Total Cart Item: {cartArray.length} </h6>
          <h6>Total Price: ₹ {total}</h6>
          <div className='text-center m-4'>
            <button onClick={emptyCarts} className='btn btn-success'>CheckOut</button>
          </div>
        </div>
        </Col>
      </Row>
    </div>
  )
}

export default Cart