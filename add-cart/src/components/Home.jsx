import React from 'react';
import data from './data.json'
import AddToCart from './AddToCart'
export default class Home extends React.Component{
    render(){
        return(
            <div>
            <h1>Home</h1>
            {data?.map(item=>{
                return(
                    <div key={item.id} style={{display:'flex-row'}}>
                        <img  src={item.img} alt=''/>
                        <div>
                            <b> {item.itemName}</b>
                            <p>{item.price}</p>
                        </div>
                        <button>AddToCart</button>
                    </div>    

                    )
            })}
            </div>
        )
    }
}