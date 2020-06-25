import React from 'react';
import data from './data.json'
// import Cart from './cart'
const Home = (props)=>{

  const handleClick = (id) =>{
      const {app} = props
        let item = data.find(item=>item.id===id)
        // console.log(item)
        app.addToCart(item)
    }


        return(
            <div>
            <h1>Home</h1>
            {data?.map(item=>{
                return(
                    <div key={item.id} style={{display:'flex-row' ,border:"1px solid black", width :"200px", margin :"10px"}}>
                        <img  src={item.img} alt=''/>
                        <div>
                            <b> {item.itemName}</b>
                            <p>{item.price}</p>
                        </div>
                        <button onClick= {()=>handleClick(item.id)}>AddToCart</button>
                    </div>    

                    )
            })}
            </div>
        )
    }

export default Home