import React,{useContext, useState, useEffect }from 'react'
import { ShopContext } from '../../context/shop-context'
import {Col, Form, Row} from 'react-bootstrap';

import "./cart.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CouponDiscount, OnTopDiscount,SeasonalDiscount } from '../../function';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [vouchers , setVouchers] = useState ({
    coupon: "",
    onTop:"",
    seasonal:"",
  });
  const [sumTotal,setSumTotal] = useState (0);
  const [sumDiscount,setsumDiscount] = useState (0);
  const { cartItems, getTotalCartAmount, getDefaultCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()
  var couponDis, onTopDis, seasonDis = 0;
  const navigate = useNavigate()


  const handleChange = (e,vouchers) => {
    setVouchers({...vouchers,
        [e.target.name]: e.target.value
    });

   
};

const handleSubmit = (e,total,vouchers) => {
  e.preventDefault();

  let sumTotal = 0;
  let sumDis = 0;


  couponDis = (CouponDiscount(total,vouchers));
  onTopDis = (OnTopDiscount(total,vouchers,cartItems));
  seasonDis = (SeasonalDiscount(total,vouchers));
  
  sumTotal = (totalAmount/100) - (couponDis + onTopDis + seasonDis);
  sumDis = (couponDis + onTopDis + seasonDis);

  setSumTotal(sumTotal);
  setsumDiscount(sumDis);

  console.log(couponDis,"CouponDiscount")
  console.log(onTopDis,"OnTopDiscount")
  console.log(seasonDis,"SeasonalDiscount")
  console.log(sumDis,"sum Discount");
  console.log(sumTotal,"Total");

}

  return (
  <>
    <div className='checkoutTitle'>
        <h1>Checkout</h1>
    </div>

    <div className="container text-center">
     
        
        <Row className='justify-content-center'>
          <Col md={3}>
              <label> Select Voucher (Coupon):</label>
          </Col>
          <Col md={3}>
                  <Form.Select className='voucherSelect' 
                  name="coupon"
                  aria-label="Select Coupon" size='sm' 
                  style={{width: "250px",textAlign:"center"}}
                  onChange={(e) => handleChange(e,vouchers)}>
                    <option selected disabled hidden>Select Coupon</option>
                    <option value="NoVoucher">No Voucher</option> 
                    <option value="FixedAmount">Fixed Amount</option> 
                    <option value="PercentageDiscount">Percentage discount (10%)</option>
                  </Form.Select>
          </Col>
        </Row >
        <br/>


          <Row className='justify-content-center'>
            <Col md={3}>
                <label> Select Voucher (On Top):</label>
            </Col>
            <Col md={3}>
                    <Form.Select className='voucherSelect' 
                    name="onTop"
                    aria-label="Select Coupon" size='sm' 
                    style={{width: "250px",textAlign:"center"}}
                    onChange={(e) => handleChange(e,vouchers)}>
                      <option selected disabled hidden>Select Voucher</option>
                      <option value="NoVoucher">No Voucher</option> 
                      <option value="PercentageDiscountByItemCategory">Percentage discount by item category (Only Clothing)</option> 
                      <option value="DiscountByPoint">Discount by point</option> 
                    </Form.Select>
            </Col>
        </Row>
        <br/>

        <Row className='justify-content-center'>
                <Col md={3}>
                  <label> Select Voucher (seasonal):</label>
                </Col>
                <Col md={3}>
                    <Form.Select className='voucherSelect' 
                    name="seasonal"
                    aria-label="Select Coupon" size='sm' 
                    style={{width: "250px",textAlign:"center"}}
                    onChange={(e) => handleChange(e,vouchers)}>
                      <option selected disabled hidden>Select Voucher</option>
                      <option value="NoVoucher">No Voucher</option> 
                      <option value="SpecialCampaigns">Special campaigns</option> 
                    </Form.Select>
                </Col>  
        </Row> 
        <br/>
        <div className='row'>        
          <div className="checkout">
              <label> Merchandise Subtotal:</label> <b>{totalAmount/100} ฿</b>
              <br/>
          </div>
        </div>
        <br/>

        <div className='row'>        
          <div className="checkout">
              <label> Voucher Discount:</label> <b>{sumDiscount} ฿</b>
              <br/>
          </div>
        </div>
        <br/>

        <div className='row'>        
          <div className="checkout">
              <label> Total Payment:</label> <b>{totalAmount/100 - (totalAmount/100 - sumTotal)} ฿</b>
              <br/>
          </div>
        </div>
        <br/>
        
        <button onClick={(e) =>handleSubmit(e,totalAmount,vouchers)} className="evaluate">Evaluate</button>
      
     
    </div>
  </>
  )
}

export default Checkout;