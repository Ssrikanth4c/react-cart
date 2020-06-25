import React from 'react'
import {Route} from 'react-router-dom'
// import {Route} from 'react-router-dom'
import AddToCart from '../components/AddToCart'
import Home from '../components//Home'
import SignIn from '../components/SignIn'


export default class Routes extends React.Component{
    render()
   {
       return(
        <>
        <Route  path='/' exact  component={Home} />
        <Route  path='/AddToCart'  component={AddToCart} />
        <Route  path='/SignIn'   component={SignIn} />
        </>
       )
   } 
}