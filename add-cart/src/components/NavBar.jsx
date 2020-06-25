import React from 'react';
import {Link } from 'react-router-dom'

export default class SignIn extends React.Component{
    render(){
        return(
           <React.Fragment>
               <Link to='/'>Home
               </Link><br />
               <Link to='/SignIn'>SignIn
               </Link> <br />
               <Link to='/AddToCart'>AddToCart
               </Link> <br />
            </React.Fragment>
        )
    }
}