import React from 'react';

function Cart(props) {
    console.log(props)
    const {app} = props

    var cartItems = app.getCartArr()

    return (
        <div>
            {cartItems.map(item=>{
                return(
                    <div style={{display:'flex-row' ,border:"1px solid black", width :"200px", margin :"10px"}}>
                        <div>{item.itemName}</div>
                        <div>{item.price}</div>
                        <div>{item.qty}</div>
                        <img src={item.img} alt={item.name}/>
                    </div>
                )
            })
        }
            
        </div>
    );
}

export default Cart;