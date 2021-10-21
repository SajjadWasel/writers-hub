import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMoneyBillAlt, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {

    /* ----------------------------
        Props distructuring 
    ------------------------------*/
    const {cart} = props;

    /* ------------------------------------------
    Total Calculation and Setting Added Writters 
    --------------------------------------------*/
    let total = 0;
    let allAddedWritters=[];
    for(const writer of cart) {
        if (allAddedWritters.indexOf(writer) === -1) {
            total = total + writer.cost;
            allAddedWritters.push(writer);
        }
    }


    /* -------------------------------------
        Font Awesome Icons
    --------------------------------------*/
    const cart_icon = <FontAwesomeIcon icon={faUser} />;
    const money_icon = <FontAwesomeIcon icon={faMoneyBillAlt} />;
    const shopping_icon = <FontAwesomeIcon icon={faShoppingBag}/>



    return (
        <div>

            <div className="cart mt-3 mb-auto">
                {/*----------------------------- 
                Display total and added writers
                ------------------------------*/}
                <div className="cart-body">
                    <h2 className="m-2">Cart</h2>
                    <div className='cart-total p-2'>
                        <h5>{cart_icon} Writers Added: {allAddedWritters.length}</h5>
                        <hr />
                        <h5>{money_icon} Total Cost: {total}$</h5>
                    </div>
                    <div className="added-writter py-3 px-5 row row-cols-md-4 d-flex justify-content-center ">     
                    
                     {/*Looping allAddedWritters for diplaying added writters in cart*/}
                            
                        {
                            allAddedWritters.map(writer => 
                                <div key={writer.cost} className="m-2 bg-light">
                                    <img src={writer.image} alt="" />
                                    <p>{writer.name}</p>
                                </div>
                            )
                        }

                    </div>
                    {/* ---Cart Button--- */}
                    <a href="/home"><button className="btn btn-primary mb-4 buy-now-btn">{shopping_icon} Buy Now</button></a>
                </div>
            </div>
        </div>
    );
};

export default Cart;