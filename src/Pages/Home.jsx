import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBRipple,
} from "mdb-react-ui-kit";
import useFetch from "../Hooks/useFetch";
import { Col, Row } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { addToWishlist } from "../Redux/Slice/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Slice/cartSlice";


function Home() {
  const data = useFetch("https://dummyjson.com/products");
  console.log(data);

  const dispatch = useDispatch()

  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const cartArray = useSelector((state)=>state.cartReducer)

  const handleAddToWishlist = (item)=>{

    const isItem = wishlistArray.some((wishlistItem)=>wishlistItem.id === item.id)
    if(isItem){
      alert("Product already exist")
    }
    else{
    dispatch(addToWishlist(item))
    }
  }

const handleAddToCart = (item)=>{
  const isItem = cartArray.some((cartItem)=>cartItem.id === item.id)
  if(isItem){
    alert("Product already exist")
  }
  else{
  dispatch(addToCart(item))
  }
}
 

  return (
    <div style={{overflow:'hidden'}}>
      <MDBRipple
        rippleColor="light"
        className="bg-image hover-overlay shadow-1-strong rounded w-100"
      >
        <img
          src="https://img.freepik.com/free-vector/flat-design-shopping-center-twitch-banner_23-2149337409.jpg?w=1380&t=st=1708065317~exp=1708065917~hmac=f055c83ce352652b4dbaec45f406041157f8e4a6caa478ffd03f834506f54150"
          alt=""
          style={{ width: "100%", height: "500px" }}
        />
      </MDBRipple>

      <Row>
        {data?.length > 0
          ? data.map((item) => (
              <Col className="mb-4 ms-4 mt-3">
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
                    <MDBBtn onClick={()=>handleAddToWishlist(item)} ><i className="fa-solid fa-heart text-danger"></i></MDBBtn>
                    <MDBBtn  onClick={()=>handleAddToCart(item)}><i className="fa-solid fa-cart-shopping text-primary"></i></MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </Col>
            ))
          : "No data found"}
      </Row>
    </div>
  );
}

export default Home;
