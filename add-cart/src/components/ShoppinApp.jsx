import React from 'react'
import Navbar from './NavBar'
import Routes from '../Routes/Routes'

export default class ShoppingApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cartArr : [],
            users :[
                {
                    name:"sri",
                    password:"sri"
                }
            ],
            isLoggedIn : false
        }
    }

    chekuserValidation = ({name,password}) =>{
        let flag = false;
        this.state.users.forEach(user=>{
            if(user.name === name && user.password === password){
                flag =true
            }
        });

        if(flag){
            alert('user logged in successfully')
            this.setState({
                isLoggedIn:true
            })
        }else{
            alert("user is not valid")
        }
    }

    isAuthenticated = ()=>{
        if(this.state.isLoggedIn){
            return true
        }else{
            return false
        }
    }


    addToCart = (payload) =>{
        if(!this.isAuthenticated()){
            alert('please log in')
        }
        let cart = [...this.state.cartArr]
        let id = payload.id

        let item = {
            ...payload,
            qty:1
        }
        console.log(cart)
        let duplicate = false
        for(let i = 0;i<cart.length;i++){
            if(cart[i].id=== id){
                duplicate = true
                cart[i].qty++
            }
        }
        if(duplicate){
            this.setState({
                cartArr:cart
            })
        }else{
            this.setState({
                cartArr: [...cart, item]
            })
        }
    }
    
    getCartArr =()=>{
        return this.state.cartArr
    }
    


    render(){
        let allMethod = {
            addToCart:this.addToCart,
            getCartArr:this.getCartArr,
            chekuserValidation:this.chekuserValidation
        }
        return(
            <div>
                <h1> main page</h1>
                <Navbar />
                <Routes app = {allMethod}/>
            </div>
        )
    }
}


// - >  authentication
//- login 
