import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';
import { deleteFromWishlist } from '../Redux/Slice/wishlistSlice';
import { addToCart } from '../Redux/Slice/cartSlice';



function Wishlist() {
  const dispatch = useDispatch()
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const cartArray = useSelector((state)=>state.cartReducer)
  const handleCart=(item)=>{
    const isItem = cartArray.some((cartItem)=>cartItem.id === item.id)
    if(isItem){
      alert("Product already exist")
    }
    else{
    //addtocart
    dispatch(addToCart(item))
    dispatch(deleteFromWishlist(item.id))
    //removefromwishlist
    }
  }

  return (
    <div style={{overflow:'hidden'}}>
      <Row>
      {
        wishlistArray.length>0?wishlistArray.map((item)=>(
          <Col className='mt-3 ms-3 mb-3' >
          <MDBCard style={{width:'300px',height:'350px'}}>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-overlay"
                  >
                    <MDBCardImage
                      src={item.thumbnail}
                      fluid
                      alt="..."
                      style={{width:'100%',height:'200px'}}
                    />
                    <a>
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>{item.title}</MDBCardTitle>
                    <MDBCardText>
                     Price: ₹ {item.price}
                    </MDBCardText>
                    <div className="d-flex justify-content-between">
                    <MDBBtn onClick={()=>dispatch(deleteFromWishlist(item.id))} ><i className="fa-solid fa-trash text-danger"></i></MDBBtn>
                    <MDBBtn onClick={()=>handleCart(item)}  ><i className="fa-solid fa-cart-shopping text-primary"></i></MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
          </Col>
        )):
        <div className='text-center'>
          <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="" />
          <h4>Back to Home</h4>
      <Link to={'/'}>  <a > <button className='btn m-4'>Home</button></a> </Link>
        </div>
      }
      </Row>
    </div>
  )
}

export default Wishlist